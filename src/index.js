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

  // Prompt engineering
  const userInput = document.getElementById("text-input").value;
  let prompt = `Generate a poem in Spanish about ${userInput}`;
  let context;
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayContent);

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
};

const form = document.getElementById("form");

form.addEventListener("submit", generateContent);
