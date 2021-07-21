const numb = document.querySelector(".numb");
let counter = 0;
setInterval(() => {
  if (counter == 100) {
    clearInterval();
  } else {
    counter += 1;
    numb.textContent = counter + "%";
  }
}, 80);
/*Circulo de progreso*/

var circle = document.querySelector("circle");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

const input = document.querySelector("input");
setProgress(70);

input.addEventListener("change", function (e) {
  if (input.value < 101 && input.value > -1) {
    setProgress(input.value);
  }
});
