function generatePoem(event) {
  event.preventDefault();

  let poemElement = document.querySelector("#poem");
  poemElement.innerHTML = "Your poem here";

  new Typewriter(poemElement, {
    autoStart: true,
    delay: 15,
  })
    .typeString("")
    .start();
}

let poemFormElement = document.querySelector("#poem-generator");
poemFormElement.addEventListener("submit", generatePoem);
