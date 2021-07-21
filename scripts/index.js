/*document.querySelector("#ingreso").addEventListener("keypress", function (e) {
  console.log("ingreso");
  if (e.key === "Enter") {
    console.log("enter");
    window.open(URL, main.html);
  }
});*/

let test = () => {
  console.log("1");
};
let test2 = () => {
  console.log("2");
};
test2();

document.querySelector("#ingreso").addEventListener("keypress", test);
