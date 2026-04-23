// Seleccionar el formulario
const form = document.getElementById("challenge-form");

// Escuchar el envío
form.addEventListener("submit", function(event) {
  event.preventDefault(); // evita recargar la página

  // Obtener valores
  const name = document.getElementById("challenger-name").value;
  const characterClass = document.getElementById("challenger-class").value;
  const level = document.getElementById("challenger-level").value;

  // Mostrar en consola
  console.log("Nombre:", name);
  console.log("Clase:", characterClass);
  console.log("Nivel:", level);

  // Mensaje visual
  alert("¡" + name + " se ha inscrito al torneo! 🚀");
});