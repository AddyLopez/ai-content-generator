const generateContent = (event) => {
  event.preventDefault();
  alert("Generating content...");

  new Typewriter("#generated", {
    strings:
      "El corazón antañón viajará de regreso al ritmo ya olvidado de la vieja ilusión.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });
};

const form = document.getElementById("form");

form.addEventListener("submit", generateContent);
