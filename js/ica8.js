// variables for changing the image from color to black and white
let originalImage = "../../img/WebAboutMePFP.png";
let newImage = "../../img/WebAboutMePFPBlackandWhite.png";
let findImage = document.getElementById("onClickImage");

//variables for changing input box color
let inputIdentifier = document.getElementById("inputColorChanger");

// changes the original image to a black and white image on click
function changeImage() {
  if (findImage.getAttribute("src") == originalImage) {
    findImage.src = newImage;
  } else {
    findImage.src = originalImage;
  }
}

// changes color of input box on key press, credit to w3 schools for idea
function keyPress() {
  inputIdentifier.style.backgroundColor = "#1f68b8";
}
//changes color of input box on key release, credit to w3 schools for idea
function keyRelease() {
  inputIdentifier.style.backgroundColor = "#b515c2";
}
