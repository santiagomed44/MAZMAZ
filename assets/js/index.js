(() => {
  function equalizeCards(selector){
    const cards = [...document.querySelectorAll(selector)];
    cards.forEach(card => card.style.minHeight = "0px");

    const rows = new Map();
    cards.forEach(card => {
      const top = Math.round(card.getBoundingClientRect().top + window.scrollY);
      if (!rows.has(top)) rows.set(top, []);
      rows.get(top).push(card);
    });

    rows.forEach(rowCards => {
      const max = Math.max(...rowCards.map(card => card.offsetHeight));
      rowCards.forEach(card => card.style.minHeight = `${max}px`);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    equalizeCards(".product-card .card-body");
    equalizeCards(".blog-card-body");
    window.addEventListener("resize", () => {
      equalizeCards(".product-card .card-body");
      equalizeCards(".blog-card-body");
    });
  });
})();
