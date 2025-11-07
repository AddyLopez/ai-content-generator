const generateContent = (e) => {
  e.preventDefault();
  alert("Generating content...");
};

const form = document.getElementById("form");

form.addEventListener("submit", generateContent);
