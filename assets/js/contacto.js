(() => {
  const form = document.getElementById("form-contacto");
  const alertOk = document.getElementById("alert-ok");
  const phone = "573146077201";

  function buildWhatsAppMessage(){
    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const tipoPedido = document.getElementById("tipoPedido").value;
    const cantidad = document.getElementById("cantidad").value.trim();
    const fecha = document.getElementById("fechaPedido").value;
    const mensaje = document.getElementById("mensaje").value.trim();

    return [
      "Hola MazMas Cultura Paisa.",
      `Mi nombre es: ${nombre}`,
      `Teléfono: ${telefono}`,
      `Tipo de solicitud: ${tipoPedido}`,
      cantidad ? `Cantidad aproximada: ${cantidad}` : "",
      fecha ? `Fecha estimada: ${fecha}` : "",
      mensaje ? `Mensaje: ${mensaje}` : "",
      "Quedo atento(a)."
    ].filter(Boolean).join("\n");
  }

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      form.classList.add("was-validated");

      if (!form.checkValidity()) return;

      const message = buildWhatsAppMessage();
      if (alertOk) alertOk.classList.remove("d-none");

      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");

      form.reset();
      form.classList.remove("was-validated");
    });
  }

  const toastEl = document.getElementById("toastInfo");
  if (toastEl) {
    document.addEventListener("DOMContentLoaded", () => {
      const toast = new bootstrap.Toast(toastEl, { delay: 5200 });
      toast.show();
    });
  }
})();
