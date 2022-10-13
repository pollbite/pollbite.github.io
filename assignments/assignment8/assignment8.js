const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

var storyText = "It was a dark and gloomy night (only 20 farenheit), so :insertx: decided to go exploring. When they got to :inserty: they could barely comprehend what they saw, then :insertz:. A once 160 pound human entirely gone. The only witness was 6 year old Cathy, who was unsurprised despite the horror of the ordeal. Afterall, Cathy knew :insertx: was destined for this. ";
var insertX = ["Cynthia", "Matthew", "Gyre"];
var insertY = ["Farbrook Caves", "the weeping willows", "the foggiest of swamps"];
var insertZ = ["contorted, turning into a tree", "grew hundreds of arms and legs before scuttling off", "became teeth"];

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

randomize.addEventListener('click', result);

function result() {

    var newStory = storyText;
    var xItem = randomValueFromArray(insertX);
    var yItem = randomValueFromArray(insertY);
    var zItem = randomValueFromArray(insertZ);

    newStory = newStory.replace(/:insertx:/g, xItem);
    newStory = newStory.replace(":inserty:", yItem);
    newStory = newStory.replace(":insertz:", zItem);


  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace(/Cathy/g, name);
  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(160 * 0.0714286);
    var ukWeight = weight + " stone";
    newStory = newStory.replace("160 pound", ukWeight);

    const temperature =  Math.round((20-32) * .5556);
    var ukTemp = temperature + " centigrade";
    newStory = newStory.replace("20 farenheit", ukTemp);


  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}