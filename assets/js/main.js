(function () {
  var root = document.documentElement;

  // ---------- theme ----------
  var toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });
  if (window.matchMedia) {
    matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
      var stored = null;
      try { stored = localStorage.getItem("theme"); } catch (err) {}
      if (!stored) root.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }

  // ---------- search ----------
  var input = document.getElementById("search");
  var noResults = document.getElementById("no-results");
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section"));
  var items = Array.prototype.slice.call(
    document.querySelectorAll("#about p, .interests li, .rows li, .pubs li, .miscs li, .misc-note")
  );
  var texts = items.map(function (el) { return el.textContent.toLowerCase(); });

  function filter() {
    var terms = input.value.toLowerCase().split(/\s+/).filter(Boolean);
    var any = false;
    items.forEach(function (el, i) {
      var hit = terms.every(function (t) { return texts[i].indexOf(t) !== -1; });
      el.hidden = !hit;
      if (hit) any = true;
    });
    document.querySelectorAll(".group").forEach(function (g) {
      g.hidden = !g.querySelector(".pubs li:not([hidden])");
    });
    sections.forEach(function (sec) {
      sec.hidden = terms.length > 0 && !items.some(function (el) {
        return !el.hidden && sec.contains(el);
      });
    });
    noResults.hidden = any;
  }

  input.addEventListener("input", filter);
  var q = new URLSearchParams(location.search).get("q");
  if (q) { input.value = q; filter(); }
  document.addEventListener("keydown", function (e) {
    if (e.key === "/" && document.activeElement !== input) {
      e.preventDefault();
      input.focus();
    } else if (e.key === "Escape" && document.activeElement === input) {
      input.value = "";
      filter();
      input.blur();
    }
  });
})();
