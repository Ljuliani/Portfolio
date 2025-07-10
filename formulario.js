// Inicializar EmailJS con tu clave pública (no el service ID)
emailjs.init("yM4vjn-4IBFGCoKRW"); 

// Capturamos el formulario por su ID
const form = document.getElementById("formulario-contacto");

// Manejamos el evento de envío
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Evita que recargue la página

  // Enviamos usando los IDs reales
   emailjs.sendForm("service_5esieif", "template_twuu1xc", this)
    .then(() => {
      alert("Message sent successfully.");
      form.reset(); // Limpia el formulario después de enviar
    })
    .catch((error) => {
      console.error("Error sending:", error);
      alert("An error occurred while sending. Please try again later..");
    });
});
