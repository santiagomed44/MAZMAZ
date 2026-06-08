(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const banner = document.getElementById("cookieBanner");
  const btnAccept = document.getElementById("btnCookiesAceptar");
  const btnReject = document.getElementById("btnCookiesRechazar");
  const cookieKey = "mazmas_cookie_choice";

  function hideBanner(){
    if (banner) banner.classList.add("d-none");
  }

  if (localStorage.getItem(cookieKey)) hideBanner();

  if (btnAccept) {
    btnAccept.addEventListener("click", () => {
      localStorage.setItem(cookieKey, "accepted");
      hideBanner();
    });
  }

  if (btnReject) {
    btnReject.addEventListener("click", () => {
      localStorage.setItem(cookieKey, "rejected");
      hideBanner();
    });
  }

  const copyButtons = document.querySelectorAll("[data-copy]");
  copyButtons.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const text = btn.getAttribute("data-copy");
      try {
        await navigator.clipboard.writeText(text);
        btn.textContent = "Copiado";
        setTimeout(() => (btn.textContent = "Copiar"), 1600);
      } catch {
        alert("Dirección: " + text);
      }
    });
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].forEach((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
})();
