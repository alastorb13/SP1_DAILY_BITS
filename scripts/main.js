import { data } from "/scripts/data.js";
import { settingProgress } from "/scripts/components.js";
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

/* !!!!!!!!!!!!!!!!!!!!!!!!! Imprimir Pagina */

settingProgress();

function preguntasA(data, categoria, preguntaActual) {
  let orden = desorganizarRespuestas("a");
  console.log(data[categoria].questions[preguntaActual].Qans[0]);
  let ans1 = data[categoria].questions[preguntaActual].Qans[0][1];
  let ans2 = data[categoria].questions[preguntaActual].Qans[1][2];
  let ans3 = data[categoria].questions[preguntaActual].Qans[2][3];
  let ans = [ans1, ans2, ans3];
  ans1 = ans[orden[0]];
  ans2 = ans[orden[1]];
  ans3 = ans[orden[2]];
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
  ordenS = orden;
  let retorno = [orden, enunciado];
  return retorno;
}

function preguntasB(data, categoria, preguntaActual) {
  let orden = desorganizarRespuestas("b");

  let enunciado = ``;
  function insertans() {
    let ord1 = data[categoria].questions[preguntaActual].Qans[0][1];
    let ord2 = data[categoria].questions[preguntaActual].Qans[1][2];
    let ord3 = data[categoria].questions[preguntaActual].Qans[2][3];
    let ord4 = data[categoria].questions[preguntaActual].Qans[3][4];
    let ord5 = data[categoria].questions[preguntaActual].Qans[4][5];
    let ord = [ord1, ord2, ord3, ord4, ord5];
    let ans1 = ord[orden[0]];
    let ans2 = ord[orden[1]];
    let ans3 = ord[orden[2]];
    let ans4 = ord[orden[3]];
    let ans5 = ord[orden[4]];
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
    ordenG = orden;
    ordenS = orden;
    ordenL = [];
  }

  insertans();

  let retorno = [orden, enunciado];
  return retorno;
}

function preguntasC(data, categoria, preguntaActual) {
  let orden = desorganizarRespuestas("c");

  let ord1 = data[categoria].questions[preguntaActual].Qans[0][1];
  let ord2 = data[categoria].questions[preguntaActual].Qans[1][2];
  let ord3 = data[categoria].questions[preguntaActual].Qans[2][3];
  let ord4 = data[categoria].questions[preguntaActual].Qans[3][4];

  let ord = [ord1, ord2, ord3, ord4];
  let ans1 = ord[orden[0]];
  let ans2 = ord[orden[1]];
  let ans3 = ord[orden[2]];
  let ans4 = ord[orden[3]];

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
    <div id='correccion'>
      <button id='boton' type="button" class="btn btn-secondary">comprobar</button>
    </div>
  </div>
  `;
  ordenS = orden;
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
      if (ordenL == ordenG) {
        boton.className = "btn btn-success";
        vd = 1;
        return console.log("bien");
      } else {
        boton.className = "btn btn-danger";
        fl = 1;
        console.log(ordenL + " != " + ordenS);
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
        rpp1 = false;
        rpp2 = false;
        rpp3 = false;
        rpp4 = false;
        rpp5 = false;
        ordenL = [];
        categorySelect(ct);
      }
    }
  }

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
        console.log(ordenL + " != " + ordenS);
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
        categorySelect(ct);
      }
    }
  }

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
  let correccion = document.getElementById("correccion");
  let seleccion;

  function refrescar() {
    respuestas.innerHTML = ``;
    respuestas.appendChild(respuesta1);
    respuestas.appendChild(respuesta2);
    respuestas.appendChild(respuesta3);
    respuestas.appendChild(respuesta4);
    respuestas.appendChild(correccion);
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
    seleccion = ordenS[2];
  }
  function lineaRespuesta4() {
    iniciar();
    respuesta4.classList.add("violetcolor");
    refrescar();
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
      console.log(perfilData.categorias[ct]);
      if (perfilData.categorias[ct] == 12) {
        princ();
      } else {
        categorySelect(ct);
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

function asignarEscuchadores(category) {
  console.log(category);
  if (category == "a") {
    respuestasTipoA();
  } else if (category == "b") {
    respuestasTipoB();
  } else if (category == "c") {
    respuestasTipoC();
  } else {
    console.log("No se ha asignado escuchador");
  }
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

function categorySelect(ct) {
  if (ct == 0) {
    categoryhtml();
  } else if (ct == 1) {
    categorycss();
  } else if (ct == 2) {
    categoryjs();
  } else if (ct == 3) {
    categoryfigma();
  } else if (ct == 4) {
    categoryux();
  } else {
    princ;
  }
}
function categoryhtml() {
  let fragmentoDePrueba = imprimirPreguntas(perfilData, data, 0);
  let tipo = prepararTipo(perfilData, data, 0);
  ct = 0;
  btn = false;
  console.log(tipo[2]);
  changeFace(fragmentoDePrueba);
  asignarEscuchadores(tipo[2]);
}

function categorycss() {
  let newFace = imprimirPreguntas(perfilData, data, 1);
  let tipo = prepararTipo(perfilData, data, 1);
  ct = 1;
  btn = false;
  changeFace(newFace);
  asignarEscuchadores(tipo[2]);
}

function categoryjs() {
  ct = 2;
  btn = false;
  let newFace = imprimirPreguntas(perfilData, data, 2);
  let tipo = prepararTipo(perfilData, data, 2);
  changeFace(newFace);
  asignarEscuchadores(tipo[2]);
}

function categoryfigma() {
  let newFace = imprimirPreguntas(perfilData, data, 3);
  let tipo = prepararTipo(perfilData, data, 3);
  ct = 3;
  btn = false;
  changeFace(newFace);
  asignarEscuchadores(tipo[2]);
}

function categoryux() {
  let newFace = imprimirPreguntas(perfilData, data, 4);
  let tipo = prepararTipo(perfilData, data, 4);
  ct = 4;
  btn = false;
  changeFace(newFace);
  asignarEscuchadores(tipo[2]);
}

function princ() {
  clearGlobalVariables();
  settingProgress();
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
/*export*/

export { perfilData };
