function tec(){
    document.getElementById("show1").style.display = "none"
    document.getElementById("show5").style.display = "block"
    base_preguntas4 = readText4("answers_tec.json")
    interprete_bp4 = JSON.parse(base_preguntas4)
    escogerPreguntaAleatoria4()
}
    let pregunta4
    let posibles_respuestas4
    btn_correspondiente4 = [
        select_id("btn10"), select_id("btn11"),
        select_id("btn12")
    ]
    npreguntas4 = []
    let preguntas_hechas4 = 0
    let preguntas_correctas4 = 0
    let preguntas_incorrectas4 = 0
function escogerPreguntaAleatoria4() {
    let n4 = Math.floor(Math.random() * interprete_bp4.length)
    while (npreguntas4.includes(n4)) {
      n4++
      if (n4 >= interprete_bp4.length) {
        n4 = 0
      }
      if (npreguntas4.length == interprete_bp4.length) {
        npreguntas4 = []
      }
    }
    npreguntas4.push(n4)
    preguntas_hechas4++
    if(preguntas_hechas4 == 10){
      window.location="start_game.php";
    }
    escogerPregunta4(n4)
}
  
function escogerPregunta4(n4) {
    pregunta4 = interprete_bp4[n4]
    select_id("pregunta4").innerHTML = pregunta4.pregunta
    select_id("numero4").innerHTML = n4
    let pc4 = preguntas_correctas4
    let inco4 = preguntas_incorrectas4
    desordenarRespuestas4(pregunta4)
}
  
function desordenarRespuestas4(pregunta4) {
    posibles_respuestas4 = [
      pregunta4.respuesta,
      pregunta4.incorrecta1,
      pregunta4.incorrecta2,
    ]
    posibles_respuestas4.sort(() => Math.random() - 0.5)
  
    select_id("btn10").innerHTML = posibles_respuestas4[0]
    select_id("btn11").innerHTML = posibles_respuestas4[1]
    select_id("btn12").innerHTML = posibles_respuestas4[2]
}
  
let suspender_botones4 = false
  
function oprimir_btn4(i) {
    if (suspender_botones4) {
      return
    }
    suspender_botones4 = true
    if (posibles_respuestas4[i] == pregunta4.respuesta) {
      preguntas_correctas4++
      points4()
      btn_correspondiente4[i].style.background = "lightgreen"
      if(preguntas_correctas4 == 10){
        send_points4()
      }
    } else {
      btn_correspondiente4[i].style.background = "pink"
      if(posibles_respuestas4[i] == pregunta4.incorrecta1 ||posibles_respuestas4[i] == pregunta4.incorrecta2 ){
        preguntas_incorrectas4++
          if(preguntas_incorrectas4 <= 2 || preguntas_incorrectas4 == 5 || preguntas_incorrectas4 == 10){
            rest_points4()
          }  
      }
    }
    for (let j = 0; j < 4; j++) {
      if (posibles_respuestas4[j] == pregunta4.respuesta) {
        btn_correspondiente4[j].style.background = "lightgreen"
        break
      }
    }
    setTimeout(() => {
      reiniciar4()
      suspender_botones4 = false
    }, 1500);
}
  
function reiniciar4() {
    for (const btn of btn_correspondiente4) {
      btn.style.background = "white"
    }
    escogerPreguntaAleatoria4()
}
  
function select_id(id) {
    return document.getElementById(id)
}
  
function style(id) {
    return select_id(id).style
}
  
function readText4(){
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "category/tec/answers_tec.json", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}

function send_points4(){
  var puntos = 10;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/tec/send_point.php', {
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
function rest_points4(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/tec/rest_p_tec.php', {
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
function points4(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/tec/send_point.php', {
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