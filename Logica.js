// Este script contiene la lógica de la página

// Función que se llama al hacer clic en el botón "Contáctanos"
function contactar() {
    // Redirige a la sección de contacto suavemente
    document.querySelector("#contacto").scrollIntoView({ behavior: "smooth" });
}

// Agregamos evento para el formulario de contacto
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("formContacto");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío real del formulario
        alert("Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.");
        form.reset(); // Limpia el formulario
    });
});
