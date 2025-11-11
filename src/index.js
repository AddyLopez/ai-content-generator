const ProgressBar = require("/dist/progressbar.js");

const displayContent = (response) => {
  // progressbar.js@1.0.0 version is used
  // Docs: http://progressbarjs.readthedocs.org/en/1.0.0/

  const bar = new ProgressBar.Line("#container", {
    strokeWidth: 4,
    easing: "easeInOut",
    duration: 1400,
    color: "#FFEA82",
    trailColor: "#eee",
    trailWidth: 1,
    svgStyle: { width: "100%", height: "100%" },
    text: {
      style: {
        // Text color.
        // Default: same as stroke color (options.color)
        color: "#999",
        position: "absolute",
        right: "0",
        top: "30px",
        padding: 0,
        margin: 0,
        transform: null,
      },
      autoStyleContainer: false,
    },
    from: { color: "#FFEA82" },
    to: { color: "#ED6A5A" },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(1.0); // Number from 0.0 to 1.0

  console.log("Displaying content...");
  new Typewriter("#generated", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
};

const generateContent = (event) => {
  event.preventDefault();

  const apiKey = "085ca3tcfao1ca19876ded9ba834fb7c";

  // Prompt engineering
  const userInput = document.getElementById("text-input").value;
  let prompt = `Generate a poem in Spanish about ${userInput}`;
  let context = `You are a literary AI assistant who returns an answer within an HTML <p> tag. Include line breaks using an HTML <br /> tag. Sign the poem with "SheCodes AI" on a new line within an HTML <strong> tag. If the poem includes the user's search term in Spanish, include the user's search term in an HTML <span> tag in the poem and add the CSS class "highlight" to that particular HTML <span> tag.`;
  const apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiURL).then(displayContent);

  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);
};

const form = document.getElementById("form");

form.addEventListener("submit", generateContent);
