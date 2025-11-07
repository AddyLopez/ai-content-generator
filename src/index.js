const displayContent = () => {
  alert("Content displayed!");
};

const generateContent = (event) => {
  event.preventDefault();

  new Typewriter("#generated", {
    strings:
      "El corazón antañón viajará de regreso al ritmo ya olvidado de la vieja ilusión.",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

  const apiKey = "085ca3tcfao1ca19876ded9ba834fb7c";
  let prompt;
  let context;
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayContent);
};

const form = document.getElementById("form");

form.addEventListener("submit", generateContent);
