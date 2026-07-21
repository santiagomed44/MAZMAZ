(() => {
  const phone = "573205466172";
  const buttons = document.querySelectorAll("[data-producto]");

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const producto = btn.getAttribute("data-producto");
      const message = `Hola MazMas, quiero información sobre: ${producto}.`;
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
    });
  });
})();
