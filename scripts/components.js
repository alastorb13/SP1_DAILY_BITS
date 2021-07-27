import { perfilData } from "/scripts/main.js";

/*Circulo de progreso1*/

var circle = document.querySelector("circle");
var radius = circle.r.baseVal.value;
var circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;
circle.style.strokeDashoffset = `${circumference}`;

function setProgress(percent) {
  const offset = circumference - (percent / 100) * circumference;
  circle.style.strokeDashoffset = offset;
}

/*Circulo de progreso2*/

var circle2 = document.getElementById("circle2");

var radius2 = circle2.r.baseVal.value;
var circumference2 = radius2 * 2 * Math.PI;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = `${circumference2}`;

function setProgress2(percent) {
  const offset = circumference2 - (percent / 100) * circumference2;
  circle2.style.strokeDashoffset = offset;
}

/*Circulo de progreso3*/

var circle3 = document.getElementById("circle3");

var radius3 = circle3.r.baseVal.value;
var circumference3 = radius3 * 2 * Math.PI;

circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = `${circumference3}`;

function setProgress3(percent) {
  const offset = circumference3 - (percent / 100) * circumference3;
  circle3.style.strokeDashoffset = offset;
}

/*Circulo de progreso4*/

var circle4 = document.getElementById("circle4");

var radius4 = circle4.r.baseVal.value;
var circumference4 = radius4 * 2 * Math.PI;

circle4.style.strokeDasharray = `${circumference4} ${circumference4}`;
circle4.style.strokeDashoffset = `${circumference4}`;

function setProgress4(percent) {
  const offset = circumference4 - (percent / 100) * circumference4;
  circle4.style.strokeDashoffset = offset;
}

/*Circulo de progreso5*/

var circle5 = document.getElementById("circle5");

var radius5 = circle5.r.baseVal.value;
var circumference5 = radius5 * 2 * Math.PI;

circle5.style.strokeDasharray = `${circumference5} ${circumference5}`;
circle5.style.strokeDashoffset = `${circumference5}`;

function setProgress5(percent) {
  const offset = circumference5 - (percent / 100) * circumference5;
  circle5.style.strokeDashoffset = offset;
}

function settingProgress() {
  let set1 = (perfilData.categorias[0] * 100) / 12;
  let set2 = (perfilData.categorias[1] * 100) / 12;
  let set3 = (perfilData.categorias[2] * 100) / 12;
  let set4 = (perfilData.categorias[3] * 100) / 12;
  let set5 = (perfilData.categorias[4] * 100) / 12;
  console.log(set1);
  setProgress(set1);
  setProgress2(set2);
  setProgress3(set3);
  setProgress4(set4);
  setProgress5(set5);
}

export { settingProgress };
