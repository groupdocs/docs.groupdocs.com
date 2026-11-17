/* Product family landing page (layouts/partials/family-page.html).
   The page ships every platform panel; this script turns them into ARIA tabs:
     - #java (or the old #viewer_java anchor, or any id inside a panel) opens that platform;
     - otherwise the platform last chosen on any family page, if this product has it;
     - the sidebar group and the "On this page" list follow the active tab;
     - when the tab labels don't fit on one line (phones), a <select> replaces them;
     - "Copy" buttons on the tool cards copy the install command.
   Styles: .gd-family* in static/custom.css. */
(function () {
  "use strict";

  var STORE = "gd-family-platform";
  var root = document.querySelector(".gd-family");
  if (!root) return;

  var tabsBox = root.querySelector(".gd-family__tabs");
  var tabs = tabsBox ? Array.prototype.slice.call(tabsBox.querySelectorAll(".gd-family__tab")) : [];
  var keys = tabs.map(function (t) { return t.getAttribute("data-platform"); });
  var family = root.getAttribute("data-family") || "";
  var select = null;

  function each(selector, fn) {
    Array.prototype.forEach.call(root.querySelectorAll(selector), fn);
  }

  function track(platform) {
    try { (window.dataLayer = window.dataLayer || []).push({ event: "family_platform", family: family, platform: platform }); } catch (e) {}
  }

  function activate(key, opts) {
    opts = opts || {};
    if (keys.indexOf(key) === -1) return;
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-platform") === key;
      t.classList.toggle("is-active", on);
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.setAttribute("tabindex", on ? "0" : "-1");
    });
    each(".gd-family__panel, .gd-family__side-group, .gd-family__toc-list", function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-platform") === key);
    });
    if (select) select.value = key;
    if (opts.focus) {
      var tab = tabs[keys.indexOf(key)];
      if (tab) tab.focus();
    }
    if (opts.remember) {
      try { localStorage.setItem(STORE, key); } catch (e) {}
      if (history.replaceState) history.replaceState(null, "", "#" + key);
      track(key);
    }
  }

  /* #java, #viewer_java, or an id inside a panel (#java-getting-started) -> that panel's platform */
  function platformFromHash() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    if (!id) return null;
    if (keys.indexOf(id) !== -1) return id;
    var el = document.getElementById(id);
    var panel = el && el.closest ? el.closest(".gd-family__panel") : null;
    return panel ? panel.getAttribute("data-platform") : null;
  }

  function onTabKeydown(e) {
    var i = keys.indexOf(e.currentTarget.getAttribute("data-platform"));
    var next = -1;
    if (e.key === "ArrowRight") next = (i + 1) % keys.length;
    else if (e.key === "ArrowLeft") next = (i - 1 + keys.length) % keys.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = keys.length - 1;
    if (next === -1) return;
    e.preventDefault();
    activate(keys[next], { focus: true, remember: true });
  }

  function buildSelect() {
    select = document.createElement("select");
    select.className = "gd-family__select";
    select.setAttribute("aria-label", "Choose a platform");
    tabs.forEach(function (t) {
      var o = document.createElement("option");
      o.value = t.getAttribute("data-platform");
      o.textContent = t.textContent.trim();
      select.appendChild(o);
    });
    select.addEventListener("change", function () { activate(select.value, { remember: true }); });
    tabsBox.parentNode.insertBefore(select, tabsBox);

    /* labels on one line or a dropdown: measure the labels' natural width against the row */
    var lastWidth = -1;
    function update() {
      var width = tabsBox.parentNode.clientWidth;
      if (!width || width === lastWidth) return;
      lastWidth = width;
      root.classList.remove("gd-family--select");
      var needed = 0;
      tabs.forEach(function (t) {
        var cs = window.getComputedStyle(t);
        needed += t.getBoundingClientRect().width + parseFloat(cs.marginLeft) + parseFloat(cs.marginRight);
      });
      needed += (tabs.length - 1) * (parseFloat(window.getComputedStyle(tabsBox).columnGap) || 0);
      root.classList.toggle("gd-family--select", needed > width + 1);
    }
    update();
    if (window.ResizeObserver) new ResizeObserver(update).observe(tabsBox.parentNode);
    else window.addEventListener("resize", update);
  }

  function initTabs() {
    if (tabs.length < 2) return;
    root.classList.add("gd-family--js");
    tabsBox.setAttribute("role", "tablist");
    tabs.forEach(function (t) {
      var key = t.getAttribute("data-platform");
      t.setAttribute("role", "tab");
      t.setAttribute("aria-controls", key);
      t.addEventListener("click", function (e) {
        e.preventDefault();
        activate(key, { remember: true });
      });
      t.addEventListener("keydown", onTabKeydown);
    });
    each(".gd-family__panel", function (p) {
      p.setAttribute("role", "tabpanel");
      p.setAttribute("aria-labelledby", "gd-family-tab-" + p.getAttribute("data-platform"));
    });
    buildSelect();

    var start = platformFromHash();
    var fromHash = !!start;
    if (!start) {
      try { start = localStorage.getItem(STORE); } catch (e) {}
    }
    activate(keys.indexOf(start) !== -1 ? start : keys[0]);
    if (fromHash) {
      /* the browser scrolled before the other panels were hidden: scroll to the target again */
      var target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
      if (target && target.scrollIntoView) target.scrollIntoView();
    }

    window.addEventListener("hashchange", function () {
      var key = platformFromHash();
      if (key) activate(key);
    });
  }

  function legacyCopy(text) {
    var ta = document.createElement("textarea");
    ta.value = text;
    ta.setAttribute("readonly", "");
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.select();
    var ok = false;
    try { ok = document.execCommand("copy"); } catch (e) {}
    document.body.removeChild(ta);
    return ok;
  }

  /* Synchronous copy first: it needs no permission and confirms at once, while the async Clipboard API
     can stay pending behind a browser permission prompt. The Clipboard API is the fallback. */
  function copyText(text) {
    if (legacyCopy(text)) return Promise.resolve();
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return Promise.reject(new Error("copy failed"));
  }

  function initCopy() {
    root.addEventListener("click", function (e) {
      var btn = e.target.closest ? e.target.closest(".gd-family__copy") : null;
      if (!btn) return;
      var text = btn.getAttribute("data-copy") || "";
      copyText(text).then(function () {
        btn.classList.add("is-done");
        btn.setAttribute("aria-label", "Copied");
        setTimeout(function () {
          btn.classList.remove("is-done");
          btn.setAttribute("aria-label", "Copy install command");
        }, 1600);
      }, function () {});
    });
  }

  initTabs();
  initCopy();
})();
