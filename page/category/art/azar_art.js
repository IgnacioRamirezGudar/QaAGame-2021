function arte(){
    document.getElementById("show1").style.display = "none"
    document.getElementById("show2").style.display = "block"
    base_preguntas2 = readText2("p_art.json")
    interprete_bp2 = JSON.parse(base_preguntas2)
    escogerPreguntaAleatoria2()
}
    let pregunta2
    let posibles_respuestas2
    btn_correspondiente2 = [
        select_id("btn1"), select_id("btn2"),
        select_id("btn3")
    ]
    npreguntas2 = []
    let preguntas_hechas2 = 0
    let preguntas_correctas2 = 0
    let preguntas_incorrectas2 = 0
function escogerPreguntaAleatoria2() {
    let n2 = Math.floor(Math.random() * interprete_bp2.length)
    while (npreguntas2.includes(n2)) {
      n2++
      if (n2 >= interprete_bp2.length) {
        n2 = 0
      }
      if (npreguntas2.length == interprete_bp2.length) {
        npreguntas2 = []
      }
    }
    npreguntas2.push(n2)
    if(preguntas_hechas2 == 10){
      window.location="start_game.php";
    }
    preguntas_hechas2++
    escogerPregunta2(n2)
}

function escogerPregunta2(n2) {
    pregunta2 = interprete_bp2[n2]
    select_id("pregunta").innerHTML = pregunta2.pregunta
    select_id("numero").innerHTML = n2
    let pc2 = preguntas_correctas2
    let inco2 = preguntas_incorrectas2
    desordenarRespuestas2(pregunta2)
}

function desordenarRespuestas2(pregunta2) {
    posibles_respuestas2 = [
      pregunta2.respuesta,
      pregunta2.incorrecta1,
      pregunta2.incorrecta2,
    ]
    posibles_respuestas2.sort(() => Math.random() - 0.5)

    select_id("btn1").innerHTML = posibles_respuestas2[0]
    select_id("btn2").innerHTML = posibles_respuestas2[1]
    select_id("btn3").innerHTML = posibles_respuestas2[2]
}

let suspender_botones2 = false

function oprimir_btn2(i) {
    if (suspender_botones2) {
      return
    }
    suspender_botones2 = true
    if (posibles_respuestas2[i] == pregunta2.respuesta) {
      preguntas_correctas2++
      points2()
      btn_correspondiente2[i].style.background = "lightgreen"
    if(preguntas_correctas2 == 10){
        send_points2()
      }
    } else {
      btn_correspondiente2[i].style.background = "pink"
      if(posibles_respuestas2[i] == pregunta2.incorrecta1 || posibles_respuestas2[i] == pregunta2.incorrecta2 ){
        preguntas_incorrectas2++
          if(preguntas_incorrectas2 <= 2 ||  preguntas_incorrectas2 == 5 || preguntas_incorrectas2 == 10){
            rest_points2()
          }
      }
    }
    for (let j = 0; j < 4; j++) {
      if (posibles_respuestas2[j] == pregunta2.respuesta) {
        btn_correspondiente2[j].style.background = "lightgreen"
        break
      }
    }
    setTimeout(() => {
      reiniciar2()
      suspender_botones2 = false
    }, 1500);
}

function reiniciar2() {
    for (const btn of btn_correspondiente2) {
      btn.style.background = "white"
    }
    escogerPreguntaAleatoria2()
}

function select_id(id) {
    return document.getElementById(id)
}

function style(id) {
    return select_id(id).style
}

function readText2() {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "category/art/p_art.json", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}

function points2(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/art/send_point.php', {
    method: 'POST',
    body: data
  })
  .then(function(response) {
    if(response.ok) {
        return response.text()
    } else {
        throw "Error en la llamada Ajax";
    }

  })
  .then(function(texto) {
    console.log(texto);
  })
  .catch(function(err) {
    console.log(err);
  });
}

function send_points2(){
  var puntos = 10;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/art/send_point.php', {
    method: 'POST',
    body: data
  })
  .then(function(response) {
    if(response.ok) {
        return response.text()
    } else {
        throw "Error en la llamada Ajax";
    }

  })
  .then(function(texto) {
    console.log(texto);
  })
  .catch(function(err) {
    console.log(err);
  });
}
function rest_points2(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/art/rest_p_art.php', {
    method: 'POST',
    body: data
  })
  .then(function(response) {
    if(response.ok) {
        return response.text()
    } else {
        throw "Error en la llamada Ajax";
    }

  })
  .then(function(texto) {
    console.log(texto);
  })
  .catch(function(err) {
    console.log(err);
  });
}
