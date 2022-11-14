// sets the random number for the initial random call
const output = document.querySelector(".output");
let outputInt = parseInt(output.textContent);

// initial random call so that number is random on page load
random();

// console.log(outputInt);

// generates a random number
function random() {
  outputInt = randomNumber(0, 9999999999);
  output.textContent = outputInt;
}

function randomNumber(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

// alert for when the user selects the first yet button
function submit() {
  alert(
    "Uh oh! Look's like our systems aren't working at the moment. Please contact us through our support number, or visit one of our physical locations in order to submit your phone number."
  );
}

// function that renders new elements on each click of the no button
function noSpawn() {
  // gets a random number so that each new spawn as a new random number
  const num = Math.floor(Math.random() * (9999999999 - 0 + 1)) + 0;
  let numText = num.toString();

  // creates a new p element with question prompt
  const para = document.createElement("p");
  para.innerText = "Is this your phone number?";
  document.getElementById("new-spawn").appendChild(para);

  // creates a new number element, each number is random
  const number = document.createElement("p");
  number.innerText = numText;
  number.className = "outputRespawn";
  number.setAttribute("id", "output-number");
  document.getElementById("new-spawn").appendChild(number);

  // creates a new yes button which has the same alert as the submit function
  const yesButton = document.createElement("button");
  yesButton.innerHTML = "Yes";
  yesButton.type = "button";
  yesButton.name = "yes-button";
  yesButton.onclick = function () {
    alert(
      "Uh oh! Look's like our systems aren't working at the moment. Please contact us through our support number, or visit one of our physical locations in order to submit your phone number."
    );
  };
  document.getElementById("new-spawn").appendChild(yesButton);
}

// buttons event listeners
const yesButton = document
  .querySelector(".yes-button")
  .addEventListener("click", submit);
const noButton = document
  .querySelector(".no-button")
  .addEventListener("click", noSpawn);
