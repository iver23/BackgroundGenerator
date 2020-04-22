var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("body");
var cssGradientSnippet = document.querySelector("h3");
var randomBtn = document.querySelector(".random");

cssGradientSnippet.innerHTML =
  "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

randomBtn.addEventListener("click", function () {
  var firstColor = generateRandomColors();
  var secondColor = generateRandomColors();
  backgroundGradient(firstColor, secondColor);
  color1.value = firstColor;
  color2.value = secondColor;
});

color1.addEventListener("input", function () {
  backgroundGradient(color1.value, color2.value);
});

color2.addEventListener("input", function () {
  backgroundGradient(color1.value, color2.value);
});

function backgroundGradient(firstColor, secondColor) {
  var linearGradient =
    "linear-gradient(to right, " + firstColor + ", " + secondColor + ")";
  body.style.background = linearGradient;
  cssGradientSnippet.innerHTML = linearGradient;
}

function generateRandomColors() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
