function cleanPoem(text) {
  return text
    .replace(/```html\s*/gi, "")
    .replace(/```/g, "")
    .trim();
}

function displayPoem(response) {
  let poemElement = document.querySelector("#poem");
  let poem = cleanPoem(response.data.answer);

  poemElement.innerHTML = "";

  new Typewriter(poemElement, {
    autoStart: true,
    delay: 15,
  })
    .typeString(poem)
    .start();
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `Generating a poem about ${instructionsInput.value}...`;

  let apiKey = "0232oa2bd084ect6f17c5fee93b97744";
  let prompt = `Generate an English poem about ${instructionsInput.value}`;
  let context =
    "You are a romantic poem expert who writes short poems. Generate a 4-line poem in basic HTML using <p> tags. Follow the user's instructions exactly. Do not include markdown formatting, backticks, or code blocks. Sign the poem at the end with 'Written by SheCodes AI' inside a <strong></strong> element.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${encodeURIComponent(
    prompt,
  )}&context=${encodeURIComponent(context)}&key=${apiKey}`;


  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
