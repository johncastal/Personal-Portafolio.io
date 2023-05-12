//DOM elements
const about = document.getElementById("about");

//utils functions
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

//event handler
function effects_about(){
    colors = ["#eb6565","#e1c94d","#4de188","#cfbcff"]
    const randomNumber = getRandomNumber(0, colors.length - 1);
    about.style.color  = colors[randomNumber];
};

about.addEventListener("click", function() {
    effects_about();
  }, false);

const element = document.getElementById("about");
element.style.cursor = "pointer";


//function effects_skills