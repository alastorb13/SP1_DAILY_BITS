import { data, testdata } from "/scripts/data.js";
console.group("uno");

/* !!!!!!!!!!!!!!!!!!!!!!!!!DEFINICION DE PARTES IMPORTANTES DE LA PAGINA */

let house = document.getElementById("house");
let principal = document.getElementById("principal");
let homeBtn = document.getElementById("home");
let statsBtn = document.getElementById("stats");
let perfilBtn = document.getElementById("perfil");
let category1 = document.getElementById("category1");
let category2 = document.getElementById("category2");
let category3 = document.getElementById("category3");
let category4 = document.getElementById("category4");
let category5 = document.getElementById("category5");
let principalbk = principal.cloneNode(true);
let testHtml = document.createElement("div");
let ordenG = "";
let ordenL = [];
let ordenS = [];
let rpp1 = false;
let rpp2 = false;
let rpp3 = false;
let rpp4 = false;
let rpp5 = false;
let btn = false;
let ct;
let fl;
let vd;
testHtml = document.createTextNode("Algo");

/* Definciiones de prueba*/

let perfilData = {
  nombre: "alguien",
  foto: "media/Photo/oso.png",
  categorias: [5, 7, 3, 8, 11],
  ruta: rutaDePreguntas(),
  tiempo: 0,
  correctas: 0,
  incorrectas: 0,
};

let vidas;
let preguntaActual;

/* !!!!!!!!!!!!!!!!!!!!!!!!! Imprimir Pagina */
function actBarraDeVida(vida) {
  let BarraDeVida = `<div id='vidas' class='textwhite'><h3>${vida}</h3></div>`;
  return BarraDeVida;
}
function preguntasA(data, categoria, preguntaActual) {
  let orden = desorganizarRespuestas("a");
  console.log(orden);
  let ord1 = data[categoria].questions[preguntaActual].Qans[0];
  let ord2 = data[categoria].questions[preguntaActual].Qans[1];
  let ord3 = data[categoria].questions[preguntaActual].Qans[2];
  let ord = [ord1, ord2, ord3];
  console.log(ord1[1] + "  " + ord2[1] + "  " + ord3[1]);
  let ans1 = ord[orden[0]][orden[0] + 1];
  let ans2 = ord[orden[1]][orden[1] + 1];
  let ans3 = ord[orden[2]][orden[2] + 1];
  let enunciado = `
  <div id='pregunta' class='textwhite'>
    <h1>${data[categoria].questions[preguntaActual].QQuest}</h1>
  </div>
  <div id='respuestas'>
    <div id='respuesta1' class='textwhite'>
      <h2 >${ans1}</h2>
    </div>
    <div id='respuesta2'>
      <h2 class='textwhite'>${ans2}</h2>
    </div>
    <div id='respuesta3'>
      <h2 class='textwhite'>${ans3}</h2>
    </div>
    <div id='respuesta5'></div>
    <div id='respuesta5'></div>
  </div>
  <div id='espRespuesta' class = 'textwhite'></div>
  <div id='corrección'>
    <button id='boton' type="button" class="btn btn-secondary">comprobar</button>
  </div>`;
  ordenS = [orden[0], orden[1], orden[2]];
  console.log("enunciado    " + orden);
  let retorno = [orden, enunciado];
  return retorno;
}
function preguntasB(data, categoria, preguntaActual) {
  let orden = desorganizarRespuestas("b");

  let enunciado = ``;
  function insertans() {
    let ord1 = data[categoria].questions[preguntaActual].Qans[0];
    let ord2 = data[categoria].questions[preguntaActual].Qans[1];
    let ord3 = data[categoria].questions[preguntaActual].Qans[2];
    let ord4 = data[categoria].questions[preguntaActual].Qans[3];
    let ord5 = data[categoria].questions[preguntaActual].Qans[4];
    let ord = [ord1, ord2, ord3, ord4, ord5];
    let ans1 = ord[orden[0]][orden[0] + 1];
    let ans2 = ord[orden[1]][orden[1] + 1];
    let ans3 = ord[orden[2]][orden[2] + 1];
    let ans4 = ord[orden[3]][orden[3] + 1];
    let ans5 = ord[orden[4]][orden[4] + 1];
    console.log(ans1, ans2, ans3, ans4, ans5);
    enunciado = `
  <div id='pregunta' class='textwhite'><h1>${data[categoria].questions[preguntaActual].QQuest}</h1></div>
  <div id='espRespuesta' class = 'textwhite'></div>
  </br></br>
  <div id ='respuestas'>
    <div id='respuesta1'><h2 class='textwhite'>${ans1}</h2>0</div>
    <div id='respuesta2'><h2 class='textwhite'>${ans2}</h2>1</div>
    <div id='respuesta3'><h2 class='textwhite'>${ans3}</h2>2</div>
    <div id='respuesta4'><h2 class='textwhite'>${ans4}</h2>3</div>
    <div id='respuesta5'><h2 class='textwhite'>${ans5}</h2>4</div></div>
  <div id='corrección'>
    <button id='boton' type="button" class="btn btn-secondary">comprobar</button>
  </div>
  `;
    ordenG = [orden[0], orden[1], orden[2], orden[3], orden[4]];
    console.log("ordenS  " + ordenS + enunciado);
  }
  insertans();

  let retorno = [orden, enunciado];
  return retorno;
}

function preguntasC(data, categoria, preguntaActual) {
  let orden = desorganizarRespuestas("c");
  let ord1 = data[categoria].questions[preguntaActual].Qans[0];
  let ord2 = data[categoria].questions[preguntaActual].Qans[1];
  let ord3 = data[categoria].questions[preguntaActual].Qans[2];
  let ord4 = data[categoria].questions[preguntaActual].Qans[3];
  let ord5 = data[categoria].questions[preguntaActual].Qans[4];
  let ord = [ord1, ord2, ord3, ord4];
  let ans1 = ord[orden[0]][orden[0] + 1];
  let ans2 = ord[orden[1]][orden[1] + 1];
  let ans3 = ord[orden[2]][orden[2] + 1];
  let ans4 = ord[orden[3]][orden[3] + 1];

  let enunciado = `
  
  <div id='pregunta' class='textwhite'>
    <h1>${data[categoria].questions[preguntaActual].QQuest}</h1>
  </div></br></br>
  <div id ='respuestas'> 
    <div id='respuesta1'>
      <h2 class='textwhite'>${ans1}</h2>
    </div>
    <div id='respuesta2'>
      <h2 class='textwhite'>${ans2}</h2>
    </div>
    <div id='respuesta3'>
      <h2 class='textwhite'>${ans3}</h2>
    </div>
    <div id='respuesta4'>
      <h2 class='textwhite'>${ans4}</h2>
    </div>
    <div id='espRespuesta' class = 'textwhite'></div>
    <div id='respuesta5'></div>
    <div id='corrección'>
      <button id='boton' type="button" class="btn btn-secondary">comprobar</button>
    </div>
  </div>
  `;
  ordenS = [orden[0], orden[1], orden[2], orden[3]];
  console.log("ordenS    " + ordenS);
  let retorno = [orden, enunciado];
  return retorno;
}

function prepararTipo(perfil, data, category) {
  let numeroPregunta = perfil.categorias[category];
  let tipo = data[category].questions[numeroPregunta].Qtype;
  let retorno = [category, numeroPregunta, tipo];
  return retorno;
}

function imprimirPreguntas(perfil, data, category) {
  let datosPregunta = prepararTipo(perfil, data, category);
  let imprime = [];
  if (datosPregunta[2] == "a") {
    imprime = preguntasA(data, category, datosPregunta[1]);
  } else if (datosPregunta[2] == "b") {
    imprime = preguntasB(data, category, datosPregunta[1]);
  } else if (datosPregunta[2] == "c") {
    imprime = preguntasC(data, category, datosPregunta[1]);
  }
  return imprime;
}

/*!!!!!!!!!!!!!!!!!!!!!! Operaciones con preguntas*/

clearGlobalVariables();

function respuestasTipoB() {
  let enunciado = document.getElementById("pregunta");
  let respuestas = document.getElementById("respuestas");
  let respuesta1 = document.getElementById("respuesta1");
  let respuesta2 = document.getElementById("respuesta2");
  let respuesta3 = document.getElementById("respuesta3");
  let respuesta4 = document.getElementById("respuesta4");
  let respuesta5 = document.getElementById("respuesta5");
  let espRespuesta = document.getElementById("espRespuesta");
  let boton = document.getElementById("boton");

  function rp1() {
    if (rpp1 == false) {
      espRespuesta.appendChild(respuesta1);
      ordenL.push(0);
      console.log(ordenL);
      rpp1 = true;
    }
  }
  function rp2() {
    if (rpp2 == false) {
      espRespuesta.appendChild(respuesta2);
      ordenL.push(1);
      console.log(ordenL);
      rpp2 = true;
    }
  }
  function rp3() {
    if (rpp3 == false) {
      espRespuesta.appendChild(respuesta3);
      ordenL.push(2);
      console.log(ordenL);
      rpp3 = true;
    }
  }
  function rp4() {
    if (rpp4 == false) {
      espRespuesta.appendChild(respuesta4);
      ordenL.push(3);
      console.log(ordenL);
      rpp4 = true;
    }
  }
  function rp5() {
    if (rpp5 == false) {
      espRespuesta.appendChild(respuesta5);
      ordenL.push(4);
      console.log(ordenL);
      rpp5 = true;
    }
  }

  function comprobar() {
    fl = 0;
    vd = 0;
    if (btn == false) {
      ordenL = ordenL.join();
      btn = true;
      if (ordenL == ordenS) {
        boton.className = "btn btn-success";
        vd = 1;
        return console.log("bien");
      } else {
        boton.className = "btn btn-danger";
        fl = 1;
        return console.log("mal");
      }
    } else if (btn == true) {
      perfilData.categorias[ct] += 1;
      perfilData.correctas += vd;
      perfilData.incorrectas += fl;
      btn = false;
      if (perfilData.categorias[ct] == 13) {
        princ();
      } else {
        let newFace = imprimirPreguntas(perfilData, data, ct);
        let tipo = prepararTipo(perfilData, data, ct);
        changeFace(newFace);
        if (tipo[2] == "a") {
          respuestasTipoA();
        } else if (tipo[2] == "b") {
          respuestasTipoB();
        } else if (tipo[2] == "c") {
          respuestasTipoC();
        }
      }
    }
  }
  /*

  let newFace = imprimirPreguntas(perfilData, data, 1);
  let tipo = prepararTipo(perfilData, data, 1);
  ct = 1;
  changeFace(newFace);
  if (tipo[2] == "a") {
    respuestasTipoA();
  } else if (tipo[2] == "b") {
    respuestasTipoB();
  } else if (tipo[2] == "c") {
    respuestasTipoC();
  }
}

*/

  respuesta1.addEventListener("click", rp1);
  respuesta2.addEventListener("click", rp2);
  respuesta3.addEventListener("click", rp3);
  respuesta4.addEventListener("click", rp4);
  respuesta5.addEventListener("click", rp5);
  boton = document.getElementById("boton");
  boton.addEventListener("click", comprobar);
}

function respuestasTipoA() {
  let enunciado = document.getElementById("pregunta");
  let respuestas = document.getElementById("respuestas");
  let respuesta1 = document.getElementById("respuesta1");
  let respuesta2 = document.getElementById("respuesta2");
  let respuesta3 = document.getElementById("respuesta3");

  let seleccion;

  function refrescar() {
    respuestas.innerHTML = ``;
    respuestas.appendChild(respuesta1);
    respuestas.appendChild(respuesta2);
    respuestas.appendChild(respuesta3);
  }
  function iniciar() {
    respuesta1.classList.remove("violetcolor");
    respuesta2.classList.remove("violetcolor");
    respuesta3.classList.remove("violetcolor");
  }
  function lineaRespuesta1() {
    iniciar();
    respuesta1.classList.add("violetcolor");
    refrescar();
    seleccion = ordenS[0];
  }
  function lineaRespuesta2() {
    iniciar();
    respuesta2.classList.add("violetcolor");
    refrescar();
    seleccion = ordenS[1];
  }
  function lineaRespuesta3() {
    iniciar();
    respuesta3.classList.add("violetcolor");
    refrescar();
    console.log(respuesta3);
    seleccion = ordenS[2];
  }

  function comprobar() {
    if (btn == false) {
      fl = 0;
      vd = 0;
      btn = true;
      if (seleccion == 0) {
        boton.className = "btn btn-success";
        vd = 1;
        return console.log("bien");
      } else {
        boton.className = "btn btn-danger";
        fl = 1;
        return console.log("mal");
      }
    } else if (btn == true) {
      perfilData.categorias[ct] += 1;
      perfilData.correctas += vd;
      perfilData.incorrectas += fl;
      btn = false;
      if (perfilData.categorias[ct] == 13) {
        princ();
      } else {
        let newFace = imprimirPreguntas(perfilData, data, ct);
        let tipo = prepararTipo(perfilData, data, ct);
        changeFace(newFace);
        if (tipo[2] == "a") {
          respuestasTipoA();
        } else if (tipo[2] == "b") {
          respuestasTipoB();
        } else if (tipo[2] == "c") {
          respuestasTipoC();
        }
      }
    }
  }
  console.log(ordenS);
  respuesta1.addEventListener("click", lineaRespuesta1);
  respuesta2.addEventListener("click", lineaRespuesta2);
  respuesta3.addEventListener("click", lineaRespuesta3);
  boton.addEventListener("click", comprobar);
}

function respuestasTipoC() {
  let enunciado = document.getElementById("pregunta");
  let respuestas = document.getElementById("respuestas");
  let respuesta1 = document.getElementById("respuesta1");
  let respuesta2 = document.getElementById("respuesta2");
  let respuesta3 = document.getElementById("respuesta3");
  let respuesta4 = document.getElementById("respuesta4");
  console.log(respuestas);
  let seleccion;

  function refrescar() {
    respuestas.innerHTML = ``;
    respuestas.appendChild(respuesta1);
    respuestas.appendChild(respuesta2);
    respuestas.appendChild(respuesta3);
    respuestas.appendChild(respuesta4);
  }
  function iniciar() {
    respuesta1.classList.remove("violetcolor");
    respuesta2.classList.remove("violetcolor");
    respuesta3.classList.remove("violetcolor");
    respuesta4.classList.remove("violetcolor");
  }
  function lineaRespuesta1() {
    iniciar();
    respuesta1.classList.add("violetcolor");
    refrescar();
    seleccion = ordenS[0];
  }
  function lineaRespuesta2() {
    iniciar();
    respuesta2.classList.add("violetcolor");
    refrescar();
    seleccion = ordenS[1];
  }
  function lineaRespuesta3() {
    iniciar();
    respuesta3.classList.add("violetcolor");
    refrescar();
    console.log(respuesta3);
    seleccion = ordenS[2];
  }
  function lineaRespuesta4() {
    iniciar();
    respuesta4.classList.add("violetcolor");
    refrescar();
    console.log(respuesta4);
    seleccion = ordenS[3];
  }
  function comprobar() {
    if (btn == false) {
      fl = 0;
      vd = 0;
      btn = true;
      if (seleccion == 0) {
        boton.className = "btn btn-success";
        vd = 1;
        return console.log("bien");
      } else {
        boton.className = "btn btn-danger";
        fl = 1;
        return console.log("mal");
      }
    } else if (btn == true) {
      perfilData.categorias[ct] += 1;
      perfilData.correctas += vd;
      perfilData.incorrectas += fl;
      btn = false;
      if (perfilData.categorias[ct] == 13) {
        princ();
      } else {
        let newFace = imprimirPreguntas(perfilData, data, ct);
        let tipo = prepararTipo(perfilData, data, ct);
        changeFace(newFace);
        if (tipo[2] == "a") {
          respuestasTipoA();
        } else if (tipo[2] == "b") {
          respuestasTipoB();
        } else if (tipo[2] == "c") {
          respuestasTipoC();
        }
      }
    }
  }

  console.log(ordenS);
  respuesta1.addEventListener("click", lineaRespuesta1);
  respuesta2.addEventListener("click", lineaRespuesta2);
  respuesta3.addEventListener("click", lineaRespuesta3);
  respuesta4.addEventListener("click", lineaRespuesta4);
  boton.addEventListener("click", comprobar);
}

/* !!!!!!!!!!!!!!!!!!!!!!!!!FUNCIONALIDADES DE LOS BOTONES */

category1.addEventListener("click", categoryhtml);
category2.addEventListener("click", categorycss);
category3.addEventListener("click", categoryjs);
category4.addEventListener("click", categoryfigma);
category5.addEventListener("click", categoryux);
homeBtn.addEventListener("click", princ, true);

function changeFace(newFace) {
  house.innerHTML = newFace;
  return;
}

function categoryhtml() {
  let fragmentoDePrueba = imprimirPreguntas(perfilData, data, 0);
  let tipo = prepararTipo(perfilData, data, 0);
  ct = 0;
  console.log(tipo[2]);
  changeFace(fragmentoDePrueba);
  if (tipo[2] == "a") {
    respuestasTipoA();
  } else if (tipo[2] == "b") {
    respuestasTipoB();
  } else if (tipo[2] == "c") {
    respuestasTipoC();
  }
}

function categorycss() {
  let newFace = imprimirPreguntas(perfilData, data, 1);
  let tipo = prepararTipo(perfilData, data, 1);
  ct = 1;
  changeFace(newFace);
  if (tipo[2] == "a") {
    respuestasTipoA();
  } else if (tipo[2] == "b") {
    respuestasTipoB();
  } else if (tipo[2] == "c") {
    respuestasTipoC();
  }
}

function categoryjs() {
  let newFace = imprimirPreguntas(perfilData, data, 2);
  let tipo = prepararTipo(perfilData, data, 2);
  ct = 2;
  console.log(newFace);
  changeFace(newFace);
  if (tipo[2] == "a") {
    respuestasTipoA();
  } else if (tipo[2] == "b") {
    respuestasTipoB();
  } else if (tipo[2] == "c") {
    respuestasTipoC();
  }
}

function categoryfigma() {
  let newFace = imprimirPreguntas(perfilData, data, 3);
  let tipo = prepararTipo(perfilData, data, 3);
  ct = 3;
  changeFace(newFace);
  if (tipo[2] == "a") {
    respuestasTipoA();
  } else if (tipo[2] == "b") {
    respuestasTipoB();
  } else if (tipo[2] == "c") {
    respuestasTipoC();
  }
}

function categoryux() {
  let newFace = imprimirPreguntas(perfilData, data, 4);
  let tipo = prepararTipo(perfilData, data, 4);
  ct = 4;
  changeFace(newFace);
  if (tipo[2] == "a") {
    respuestasTipoA();
  } else if (tipo[2] == "b") {
    respuestasTipoB();
  } else if (tipo[2] == "c") {
    respuestasTipoC();
  }
}

function princ() {
  clearGlobalVariables();
  changeFace(principalbk);
  house.appendChild(principal);
}

/* FUNCIONES PARA AGREGAR O TRANSFORMAR CONTENIDOS DEL HTML */

function clearGlobalVariables() {
  rpp1 = false;
  rpp2 = false;
  rpp3 = false;
  rpp4 = false;
  rpp5 = false;
  ordenG = "";
  ordenL = [];
  ordenS = [];
}

/* Operaciones con preguntas */

function extraerPregunta(categoria, pregunta) {
  let enunciado = data[categoria].questions[pregunta].QQuest;
  let tipo = data[categoria].questions[pregunta].Qtype;
  let respuestas = data[categoria].questions[pregunta].Qans;
  let retorno = [tipo, enunciado, respuestas];
  return retorno;
}

function rutaDePreguntas() {
  let ct1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let ct2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let ct3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let ct4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  let ct5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  ct1.sort(func);
  ct2.sort(func);
  ct3.sort(func);
  ct4.sort(func);
  ct5.sort(func);
  let ruta = [ct1, ct2, ct3, ct4, ct5];
  return ruta;
}

function inicializarStats(PerfNombre, ruta) {
  let perfilData = {
    nombre: PerfNombre,
    foto: ruta,
    categorias: [0, 0, 0, 0, 0],
    ruta: rutaDePreguntas(),
    tiempo: 0,
    correctas: 0,
    incorrectas: 0,
    vidas: [4, 4, 4, 4, 4],
  };
  return perfilData;
}

function desorganizarRespuestas(type) {
  let orden;
  if (type == "a") {
    orden = [0, 1, 2];
  } else if (type == "b") {
    orden = [0, 1, 2, 3, 4];
  } else if (type == "c") {
    orden = [0, 1, 2, 3];
  }
  return orden.sort(func);
}

function func(a, b) {
  /* Funcion de aleatoriedad para desordenar una lista*/
  return 0.5 - Math.random();
}

/* !!!!!!!!!!!!!!!!!!!!! FUCIONANDO PREGUNTAS Y EL DOM */
