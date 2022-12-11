
document.addEventListener("DOMContentLoaded", function () {

    // color button
    var colorButton = document.getElementById("btnColor");
    colorButton.addEventListener("click", colorChanger());

    // these are the elements with the color white
    var webFile = document.getElementsByClassName('file');
    var highlightAboutBox = document.getElementsByClassName('highlight-about-box');
    var highlightBox = document.getElementsByClassName('highlight-box');

    // these are the elements with the darkest color, #23006e
    var webBody = document.querySelector('body');
    var webH2 = document.querySelector('h2');
    var webH3 = document.querySelector('h3');
    var webH4 = document.querySelector('h4');
    var webH5 = document.querySelector('h5');
    var webH6 = document.querySelector('h6');
    var webHeaderLink = document.getElementsByClassName('header-link');


    // these are the elements with the midtone color, #1f68b8;
    var webIcon = document.querySelector('i');
    var webLink = document.querySelector('a');
    var unhighlightAboutBox = document.getElementsByClassName('unhighlight-about-box');
    var unhighlightBox = document.getElementsByClassName('unhighlight-box');

    // these are the elements with the purple color, #b515c2
    var webBorder = document.querySelector('hr');
    var webDottedBorder = document.getElementsByClassName('line');

    // these are the elements with the lightest color, #fac632
    var webH1 = document.querySelector('h1');




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

    /*function colorChangeWhite(color){
        webFile[0].style.color = color;
        webFile[0].style.border = color;

        highlightAboutBox[0].style.backgroundColor = color;
        highlightBox[0].style.backgroundColor = color; 
    }*/

    function colorChangeDarkest(color){
        /*webBody[0].style.backgroundColor = color; */
        webH2[0].style.color = color; 
        webH3[0].style.color = color; 
        webH4[0].style.color = color; 
        webH5[0].style.color = color; 
        webH6[0].style.color = color; 
        webHeaderLink[0].style.color = color;
    }

    function colorChangeMidtone(color){
        webIcon[0].style.color = color; 
        webLink[0].style.color = color; 
        unhighlightAboutBox[0].style.backgroundColor = color; 
        unhighlightBox[0].style.backgroundColor = color;
    }

    function colorChangePurple(color){
        webBorder[0].style.color = color; 
        webDottedBorder[0].style.color = color;
    }

    function colorChangeLightest(color){
        webH1[0].style.color = color; 
    }

    function colorChanger(){
        colorChangeDarkest(getRandomColor());
        colorChangeMidtone(getRandomColor());
        colorChangePurple(getRandomColor());
        colorChangeLightest(getRandomColor());
    }


});