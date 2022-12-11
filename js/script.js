// color button
document
  .querySelector(".no-button")
  .addEventListener("click", console.log(tester));

  function tester() {
    return console.log("I'm listening");
  }

// these are the elements with the color white
let webFile = document.getElementsByClassName('file');
let highlightAboutBox = document.getElementsByClassName('highlight-about-box');
let highlightBox = document.getElementsByClassName('highlight-box');

// these are the elements with the darkest color, #23006e
let webBody = document.querySelector('body');
let webH2 = document.querySelector('h2');
let webH3 = document.querySelector('h3');
let webH4 = document.querySelector('h4');
let webH5 = document.querySelector('h5');
let webH6 = document.querySelector('h6');
let webHeaderLink = document.getElementsByClassName('header-link');


// these are the elements with the midtone color, #1f68b8;
let webIcon = document.querySelector('i');
let webLink = document.querySelector('a');
let unhighlightAboutBox = document.getElementsByClassName('unhighlight-about-box');
let unhighlightBox = document.getElementsByClassName('unhighlight-box');

// these are the elements with the purple color, #b515c2
let webBorder = document.querySelector('hr');
let webDottedBorder = document.getElementsByClassName('line');

// these are the elements with the lightest color, #fac632
let webH1 = document.querySelector('h1');



function getRandomColor() {
    let characters = "0123456789ABCDEF";
    let color = "#";

    for (let i=0; i<6; i++) {
        color += characters[getRandomNumber(0,15)];
    }

    return color;

}

function getRandomNumber(low, high) {
    let r = Math.floor(Math.random() * (high - low + 1)) + low; 
    return r;
}

function colorChangeWhite(color){
    webFile.style.color = color;
    webFile.style.border = color;

    highlightAboutBox.style.backgroundColor = color;
    highlightBox.style.backgroundColor = color; 
}

function colorChangeDarkest(color){
    webBody.style.backgroundColor = color;
    webH1.style.color = color; 
    webH2.style.color = color; 
    webH3.style.color = color; 
    webH4.style.color = color; 
    webH5.style.color = color; 
    webH6.style.color = color; 
    webHeaderLink.style.color = color;
}

function colorChangeMidtone(color){
    webIcon.style.color = color; 
    webLink.style.color = color; 
    unhighlightAboutBox.style.backgroundColor = color; 
    unhighlightBox.style.backgroundColor = color;
}

function colorChangePurple(color){
    webBorder.style.color = color; 
    webDottedBorder.style.color = color;
}

function colorChangeLightest(color){
    webH1.style.color = color; 
}

function colorChanger(){
    colorChangeWhite(getRandomColor());
    colorChangeDarkest(getRandomColor());
    colorChangeMidtone(getRandomColor());
    colorChangePurple(getRandomColor());
    colorChangeLightest(getRandomColor());
}



