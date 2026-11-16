/* Page actions toolbar under the page title (layouts/partials/page-actions.html) and the
   "Set up your AI agent" dialog (layouts/partials/agent-setup-dialog.html).
   - Ask about this page -> aiSearchOpenForPage() in ai-search.js (Ask AI dialog in page mode)
   - Copy for LLM        -> fetches the page's .md twin and copies "Source: <url>" + Markdown
   - View as Markdown    -> plain link (only tracked here)
   - Set up agent        -> opens the dialog: client tabs, copy buttons, one-click install links
   Vanilla JS on purpose: jQuery is only loaded on pages where Ask AI is enabled. */
(function () {
  "use strict";

  var TAB_STORAGE_KEY = "gdoc-agent-client";
  var FLASH_MS = 2000;
  var dialog = null;

  /* ---------- helpers ---------- */

  function track(action, client) {
    try {
      if (window.dataLayer && typeof window.dataLayer.push === "function") {
        var data = { event: "page_action", page_action: action };
        if (client) data.agent_client = client;
        window.dataLayer.push(data);
      }
    } catch (e) { /* analytics must never break the page */ }
  }

  function announce(text) {
    var el = document.querySelector(".gdoc-page-actions__status");
    if (!el) return;
    el.textContent = "";
    window.setTimeout(function () { el.textContent = text; }, 50);
  }

  // Show success (copy icon -> check) or failure for a moment via is-done / is-failed. The toolbar's
  // "Copied" / "Failed" labels are stacked in the same grid cell as the idle label and swapped by CSS,
  // so the button keeps its width and the rest of the toolbar does not move.
  function flash(btn, ok) {
    var copyIcon = btn.querySelector(".copy");
    var checkIcon = btn.querySelector(".check");
    window.clearTimeout(btn.gdocFlashTimer);

    btn.classList.toggle("is-done", ok);
    btn.classList.toggle("is-failed", !ok);
    if (ok && copyIcon && checkIcon) {
      copyIcon.classList.add("hidden");
      checkIcon.classList.remove("hidden");
    }

    btn.gdocFlashTimer = window.setTimeout(function () {
      btn.classList.remove("is-done", "is-failed");
      if (copyIcon && checkIcon) {
        copyIcon.classList.remove("hidden");
        checkIcon.classList.add("hidden");
      }
    }, FLASH_MS);
  }

  // execCommand fallback. The textarea goes into `container` (the open modal dialog when copying from
  // it): everything outside a modal <dialog> is inert and cannot be selected.
  function legacyCopy(text, container) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.top = "0";
    ta.style.left = "-9999px";
    (container || document.body).appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
    ta.parentNode.removeChild(ta);
    return ok ? Promise.resolve() : Promise.reject(new Error("execCommand('copy') failed"));
  }

  function copyText(text, container) {
    if (window.isSecureContext && navigator.clipboard && navigator.clipboard.writeText) {
      return navigator.clipboard.writeText(text).catch(function () { return legacyCopy(text, container); });
    }
    return legacyCopy(text, container);
  }

  /* ---------- Copy for LLM ---------- */

  function fetchMarkdown(btn) {
    var url = btn.getAttribute("data-md");
    var source = btn.getAttribute("data-src");
    return fetch(url, { credentials: "same-origin" })
      .then(function (response) {
        if (!response.ok) throw new Error("HTTP " + response.status + " for " + url);
        return response.text();
      })
      .then(function (markdown) {
        return "Source: " + source + "\n\n" + markdown.replace(/^﻿/, "");
      });
  }

  function copyMarkdown(btn) {
    var text = fetchMarkdown(btn);
    var copied;
    if (window.isSecureContext && window.ClipboardItem && navigator.clipboard && navigator.clipboard.write) {
      // A ClipboardItem built from a promise keeps the click's user activation while the Markdown
      // downloads (Safari rejects a writeText() that runs after an await).
      copied = navigator.clipboard.write([new window.ClipboardItem({
        "text/plain": text.then(function (t) { return new Blob([t], { type: "text/plain" }); })
      })]).catch(function () {
        return text.then(function (t) { return copyText(t); });
      });
    } else {
      copied = text.then(function (t) { return copyText(t); });
    }
    copied.then(function () {
      flash(btn, true);
      announce("Page copied as Markdown");
      track("copy_markdown");
    }, function (err) {
      flash(btn, false);
      announce("Copy failed. Use View as Markdown instead.");
      if (window.console) window.console.warn("Copy for LLM:", err);
    });
  }

  /* ---------- Set up agent dialog ---------- */

  function tabsOf(d) { return d.querySelectorAll('[role="tab"]'); }

  function selectTab(tab, focus, remember) {
    var tabs = tabsOf(dialog);
    for (var i = 0; i < tabs.length; i++) {
      var on = tabs[i] === tab;
      tabs[i].setAttribute("aria-selected", on ? "true" : "false");
      tabs[i].tabIndex = on ? 0 : -1;
      var panel = document.getElementById(tabs[i].getAttribute("aria-controls"));
      if (panel) panel.hidden = !on;
    }
    var select = dialog.querySelector(".gdoc-agent-dialog__select");
    if (select) select.value = tab.getAttribute("data-client");
    if (focus) tab.focus();
    if (remember) {
      try { window.localStorage.setItem(TAB_STORAGE_KEY, tab.getAttribute("data-client")); } catch (e) { /* storage off */ }
    }
  }

  // Phones: when the client tabs do not fit on one line, show the <select> instead of a wrapped tab row.
  // Measured with the tab row forced onto one line; runs only while the dialog is open (it has no layout
  // when closed).
  function updateTabMode() {
    if (!dialog || !dialog.open) return;
    var tablist = dialog.querySelector('[role="tablist"]');
    if (!tablist) return;
    dialog.classList.remove("gdoc-agent-dialog--select");
    tablist.style.flexWrap = "nowrap";
    var overflow = tablist.scrollWidth > tablist.clientWidth + 1;
    tablist.style.flexWrap = "";
    dialog.classList.toggle("gdoc-agent-dialog--select", overflow);
  }

  function clientOf(el) {
    var panel = el.closest('[role="tabpanel"]');
    return panel ? panel.getAttribute("data-client") : "";
  }

  function onTabKeydown(e) {
    var tabs = Array.prototype.slice.call(tabsOf(dialog));
    var i = tabs.indexOf(e.target);
    if (i < 0) return;
    var next = null;
    if (e.key === "ArrowRight") next = tabs[(i + 1) % tabs.length];
    else if (e.key === "ArrowLeft") next = tabs[(i - 1 + tabs.length) % tabs.length];
    else if (e.key === "Home") next = tabs[0];
    else if (e.key === "End") next = tabs[tabs.length - 1];
    if (!next) return;
    e.preventDefault();
    selectTab(next, true, true);
  }

  function onDialogClick(e) {
    if (e.target === dialog) { dialog.close(); return; } // the backdrop: the dialog box has no padding
    var el = e.target.closest("[data-action], [role='tab']");
    if (!el) return;
    if (el.getAttribute("role") === "tab") { selectTab(el, false, true); return; }
    var action = el.getAttribute("data-action");
    if (action === "close-dialog") {
      dialog.close();
    } else if (action === "copy-code") {
      var code = el.parentNode.querySelector("code");
      if (!code) return;
      copyText(code.textContent, dialog).then(function () {
        flash(el, true);
        track("setup_agent_copy", clientOf(el));
      }, function () { flash(el, false); });
    } else if (action === "one-click") {
      track("setup_agent_one_click", clientOf(el));
    }
  }

  function initDialog() {
    if (dialog) return dialog;
    dialog = document.getElementById("gdoc-agent-setup");
    if (!dialog) return null;
    // Out of the article, so its .gdoc-markdown rules (pre, code, a, h2) do not restyle the dialog.
    document.body.appendChild(dialog);
    dialog.addEventListener("click", onDialogClick);
    var tablist = dialog.querySelector('[role="tablist"]');
    if (tablist) tablist.addEventListener("keydown", onTabKeydown);
    var select = dialog.querySelector(".gdoc-agent-dialog__select");
    if (select) {
      select.addEventListener("change", function () {
        var tab = dialog.querySelector('[role="tab"][data-client="' + select.value + '"]');
        if (tab) selectTab(tab, false, true);
      });
    }
    window.addEventListener("resize", updateTabMode);

    var saved = null;
    try { saved = window.localStorage.getItem(TAB_STORAGE_KEY); } catch (e) { /* storage off */ }
    if (saved) {
      var tabs = tabsOf(dialog);
      for (var i = 0; i < tabs.length; i++) {
        if (tabs[i].getAttribute("data-client") === saved) { selectTab(tabs[i], false, false); break; }
      }
    }
    return dialog;
  }

  function openDialog() {
    var d = initDialog();
    if (!d) return;
    if (typeof d.showModal === "function") {
      if (!d.open) d.showModal();
    } else {
      d.setAttribute("open", ""); // very old browsers: shown inline, closed by the close button
    }
    updateTabMode();
    var selected = d.querySelector('[role="tab"][aria-selected="true"]');
    var select = d.querySelector(".gdoc-agent-dialog__select");
    if (d.classList.contains("gdoc-agent-dialog--select") && select) select.focus();
    else if (selected) selected.focus();
    track("setup_agent_open");
  }

  /* ---------- toolbar ---------- */

  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".gdoc-page-actions [data-action]");
    if (!btn) return;
    switch (btn.getAttribute("data-action")) {
      case "ask-page":
        e.preventDefault();
        if (typeof window.aiSearchOpenForPage === "function" &&
            window.aiSearchOpenForPage(btn.getAttribute("data-page"), btn.getAttribute("data-title"))) {
          track("ask_page");
        }
        break;
      case "copy-md":
        e.preventDefault();
        copyMarkdown(btn);
        break;
      case "view-md":
        track("view_markdown"); // a real link: let it open
        break;
      case "setup-agent":
        e.preventDefault();
        openDialog();
        break;
    }
  });
})();
