 // Seleccionar todas las tarjetas de servicios
const serviceCards = document.querySelectorAll(".service-card");

// Función para cambiar color de fondo al hacer clic en cada tarjeta de servicio
serviceCards.forEach(card => {
  card.addEventListener("click", () => {
    const colors = ["#F29999", "#C5D1D9", "#E27A6F", "#D95560"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    card.style.backgroundColor = randomColor;
  });
});

// Botón y contenedor de "Arreglos Florales"
const arrangementsButton = document.getElementById("arrangements-button");
const arrangementsIdeas = document.getElementById("arrangements-ideas");

// Selecciona el botón y el contenedor de "Decoración de Eventos"
const decorEventsButton = document.getElementById("decor-events-button");
const decorEventsContainer = document.getElementById("decor-events-ideas");

// Botón y contenedor de "Envíos a Domicilio"
const deliveryButton = document.getElementById("delivery-button");
const formContainer = document.getElementById("form-container");

// Mostrar/ocultar los arreglos florales al hacer clic en el botón correspondiente
arrangementsButton.addEventListener("click", () => {
  arrangementsIdeas.style.display = arrangementsIdeas.style.display === "none" || arrangementsIdeas.style.display === "" ? "block" : "none";
});

// Mostrar/ocultar el formulario al hacer clic en el botón "Envíos a Domicilio"
deliveryButton.addEventListener("click", () => {
  formContainer.style.display = formContainer.style.display === "none" || formContainer.style.display === "" ? "block" : "none";
});

// Mostrar/ocultar decoraciones de eventos al hacer clic en el botón correspondiente
decorEventsButton.addEventListener("click", () => {
  toggleDisplay(decorEventsContainer);
});

// Función para alternar la visualización de un contenedor
function toggleDisplay(element) {
  element.style.display = element.style.display === "none" || element.style.display === "" ? "block" : "none";
}

// Ocultar el formulario después de enviarlo
formContainer.addEventListener("submit", (e) => {
  e.preventDefault(); // Evita el envío del formulario en esta demo
  alert("Formulario enviado correctamente.");
  formContainer.style.display = "none";
});

// Frases y fondos aleatorios
const frases = [
  { text: "La salud mental no es un destino, sino un proceso. Se trata de cómo conduces, no de adónde vas - Noam Shpancer", background: "url('imagen1.jpg')" },
  { text: "La mayor riqueza es la salud mental - Dalai Lama", background: "url('imagen2.jpg')" },
  { text: "Tu salud mental es una prioridad. Tu felicidad es una prioridad. Tu autocuidado es una prioridad. Tu existencia es una prioridad. Recuérdalo - Sonya Parker", background: "url('imagen3.jpg')" },
  { text: "No hace falta ser perfecto para merecer amor y respeto.", background: "url('imagen4.jpg')" },
  { text: "La felicidad es una mariposa que cuando la persigues siempre está fuera de tu alcance, pero que si te sientas silenciosamente puede posarse sobre ti.", background: "url('imagen5.jpg')" },
  { text: "La felicidad no es la ausencia de problemas, sino la capacidad de afrontarlos - Steve Maraboli", background: "url('imagen6.jpg')" },
  { text: "No se trata de esperar a que pase la tormenta, sino de aprender a bailar bajo la lluvia - Vivian Greene", background: "url('imagen7.jpg')" },
  { text: "La vida es un 10% lo que me pasa y un 90% cómo reacciono a ello.", background: "url('imagen8.jpg')" }
];

// Colores aleatorios para el botón de frase
const colores = ["#E27A6F", "#F1AD4D", "#F29999", "#C5D1D9", "#D95560", "#76B041", "#C993FF", "#FFA07A"];

const quoteButton = document.getElementById("quote-button");
const quoteDisplay = document.getElementById("quote-display");

// Función para mostrar una frase aleatoria
function mostrarFraseAleatoria() {
  const frase = frases[Math.floor(Math.random() * frases.length)];
  const color = colores[Math.floor(Math.random() * colores.length)];

  // Cambiar el texto, fondo y visibilidad
  quoteDisplay.textContent = frase.text;
  quoteDisplay.style.backgroundImage = frase.background;
  quoteDisplay.classList.add("visible");

  // Cambiar el color del botón
  quoteButton.style.backgroundColor = color;
}

// Evento para mostrar una nueva frase al hacer clic
quoteButton.addEventListener("click", mostrarFraseAleatoria);
