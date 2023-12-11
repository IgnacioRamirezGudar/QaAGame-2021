function nc(){
  document.getElementById("show1").style.display = "none"
  document.getElementById("show3").style.display = "block"
  base_preguntas = readText("p_nc.json")
  interprete_bp = JSON.parse(base_preguntas)
  escogerPreguntaAleatoria();
}
    let pregunta
    let posibles_respuestas
    btn_correspondiente = [
        select_id("btn4"), select_id("btn5"),
        select_id("btn6")
    ]
    npreguntas = []
    let preguntas_hechas = 0
    let preguntas_correctas = 0
    let preguntas_incorrectas = 0
function escogerPreguntaAleatoria() {
    let n = Math.floor(Math.random() * interprete_bp.length)
    while (npreguntas.includes(n)) {
      n++
      if (n >= interprete_bp.length) {
        n = 0
      }
      if (npreguntas.length == interprete_bp.length) {
        npreguntas = []
      }
    }
    npreguntas.push(n)
    preguntas_hechas++
    if(preguntas_hechas == 10){
      window.location="start_game.php";
    }
    escogerPregunta(n)
}
  
function escogerPregunta(n) {
    pregunta = interprete_bp[n]
    select_id("pregunta2").innerHTML = pregunta.pregunta
    select_id("numero2").innerHTML = n
    let pc = preguntas_correctas
    let inco = preguntas_incorrectas
    desordenarRespuestas(pregunta)
}
  
function desordenarRespuestas(pregunta) {
    posibles_respuestas = [
      pregunta.respuesta,
      pregunta.incorrecta1,
      pregunta.incorrecta2,
    ]
    posibles_respuestas.sort(() => Math.random() - 0.5)
  
    select_id("btn4").innerHTML = posibles_respuestas[0]
    select_id("btn5").innerHTML = posibles_respuestas[1]
    select_id("btn6").innerHTML = posibles_respuestas[2]
}
  
let suspender_botones = false
  
function oprimir_btn(i) {
    if (suspender_botones) {
      return
    }
    suspender_botones = true
    if (posibles_respuestas[i] == pregunta.respuesta) {
      preguntas_correctas++
      points()
      btn_correspondiente[i].style.background = "lightgreen"
      if(preguntas_correctas == 10){
        send_points()
      }
    } else {
      btn_correspondiente[i].style.background = "pink"
      if(posibles_respuestas[i] == pregunta.incorrecta1 ||posibles_respuestas[i] == pregunta.incorrecta2 ){
        preguntas_incorrectas++
          if(preguntas_incorrectas <= 2 || preguntas_incorrectas == 5 || preguntas_incorrectas == 10){
            rest_points()
          }  
      }
    }
    for (let j = 0; j < 4; j++) {
      if (posibles_respuestas[j] == pregunta.respuesta) {
        btn_correspondiente[j].style.background = "lightgreen"
        break
      }
    }
    setTimeout(() => {
      reiniciar()
      suspender_botones = false
    }, 1500);
}
  
function reiniciar() {
    for (const btn of btn_correspondiente) {
      btn.style.background = "white"
    }
    escogerPreguntaAleatoria()
}
  
function select_id(id) {
    return document.getElementById(id)
}
  
function style(id) {
    return select_id(id).style
}
  
function readText() {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "category/nc/p_nc.json", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}

function send_points(){
  var puntos = 10;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/nc/send_point.php', {
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
function points(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/nc/send_point.php', {
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
function rest_points(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/nc/rest_p_nc.php', {
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