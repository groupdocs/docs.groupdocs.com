/* Content tabs ({{< tabs >}} shortcode: CSS-only radio tabs, layouts/shortcodes/tabs.html).
   When a block's tab labels no longer fit on one line (phones, many or long names), show a <select>
   with the same choices instead of labels wrapped over several rows. The select is built here, so the
   shortcode output (1,300+ pages) is unchanged; styles: .gdoc-tabs__select in static/custom.css.
   Loaded on every page from layouts/partials/foot.html. */
(function () {
  "use strict";

  function labelsOf(box) {
    return Array.prototype.filter.call(box.children, function (el) {
      return el.classList.contains("gdoc-tabs__label");
    });
  }

  function enhance(box) {
    var labels = labelsOf(box);
    if (labels.length < 2 || box.querySelector(":scope > .gdoc-tabs__select")) return;

    var select = document.createElement("select");
    select.className = "gdoc-tabs__select";
    select.setAttribute("aria-label", "Choose a tab");
    labels.forEach(function (label) {
      var id = label.getAttribute("for");
      var radio = id && document.getElementById(id);
      var option = document.createElement("option");
      option.value = id || "";
      option.textContent = label.textContent.trim();
      if (radio && radio.checked) option.selected = true;
      select.appendChild(option);
    });
    select.addEventListener("change", function () {
      var radio = document.getElementById(select.value);
      if (radio) radio.checked = true; // the CSS :checked rules show its content
    });
    // keep the select in sync when a label is clicked (wide screens)
    box.addEventListener("change", function (e) {
      var t = e.target;
      if (t && t.classList && t.classList.contains("gdoc-tabs__control") && t.parentNode === box) select.value = t.id;
    });
    box.insertBefore(select, box.firstChild);

    var lastWidth = -1;
    function update() {
      var width = box.clientWidth;
      if (!width || width === lastWidth) return; // hidden (e.g. inside a closed tab) or unchanged
      lastWidth = width;
      // measure the labels on one line: show them, add up their outer widths, then decide
      box.classList.remove("gdoc-tabs--select");
      var needed = 0;
      labels.forEach(function (label) {
        var cs = window.getComputedStyle(label);
        needed += label.getBoundingClientRect().width + parseFloat(cs.marginLeft) + parseFloat(cs.marginRight);
      });
      var bs = window.getComputedStyle(box);
      var available = width - parseFloat(bs.paddingLeft) - parseFloat(bs.paddingRight);
      box.classList.toggle("gdoc-tabs--select", needed > available + 1);
    }

    update();
    if (window.ResizeObserver) {
      new ResizeObserver(update).observe(box);
    } else {
      window.addEventListener("resize", update);
    }
  }

  function init() {
    Array.prototype.forEach.call(document.querySelectorAll(".gdoc-tabs"), enhance);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
