// Journal of Personal Curiosities
// Two small jobs, so papers can be written without counting anything by hand:
//   1. <span class="fn">…</span> becomes a numbered footnote at the end of the paper.
//   2. An empty link to something with an id, <a href="#fig-x"></a>, is filled in
//      with its name: "Figure 2", "Table 1", "Section 3", "Eq. (1)" or "[4]".
// Without this script a paper still reads fine: notes stay inline in brackets.

(function () {
  var article = document.querySelector("article");
  if (!article) return;

  // 1. Footnotes
  var notes = Array.prototype.slice.call(article.querySelectorAll("span.fn"));
  if (notes.length) {
    var section = document.createElement("section");
    section.className = "back footnotes";
    section.setAttribute("aria-label", "Footnotes");
    var list = document.createElement("ol");
    section.appendChild(list);

    notes.forEach(function (note, i) {
      var n = i + 1;
      var item = document.createElement("li");
      item.id = "fn-" + n;
      item.innerHTML =
        note.innerHTML +
        '<a class="fn-back" href="#fnref-' + n + '" aria-label="Back to the text">↩</a>';
      list.appendChild(item);

      var mark = document.createElement("sup");
      mark.className = "fn-ref";
      mark.innerHTML = '<a id="fnref-' + n + '" href="#fn-' + n + '">' + n + "</a>";
      note.replaceWith(mark);
    });

    var back = article.querySelector(".back");
    if (back) back.before(section);
    else article.appendChild(section);
  }

  // 2. Cross-references
  function nth(selector, el) {
    return Array.prototype.indexOf.call(article.querySelectorAll(selector), el) + 1;
  }

  article.querySelectorAll('a[href^="#"]:empty').forEach(function (a) {
    var target = document.getElementById(a.getAttribute("href").slice(1));
    if (!target) {
      a.textContent = "??"; // the traditional mark of an unresolved reference
      return;
    }
    if (target.matches("figure.table")) a.textContent = "Table " + nth("figure.table", target);
    else if (target.matches("figure")) a.textContent = "Figure " + nth("figure:not(.table)", target);
    else if (target.matches(".eq")) a.textContent = "Eq. (" + nth(".eq", target) + ")";
    else if (target.matches(".references li")) a.textContent = "[" + nth(".references li", target) + "]";
    else if (target.matches("section")) a.textContent = "Section " + nth("section:not(.abstract):not(.back)", target);
    else a.textContent = "??";
  });
})();
