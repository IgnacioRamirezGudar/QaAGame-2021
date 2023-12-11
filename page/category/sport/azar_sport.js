function sport(){
    document.getElementById("show1").style.display = "none"
    document.getElementById("show4").style.display = "block"
    base_preguntas3 = readText3("sport.json")
    interprete_bp3 = JSON.parse(base_preguntas3)
    escogerPreguntaAleatoria3()
}
    let pregunta3
    let posibles_respuestas3
    btn_correspondiente3 = [
        select_id("btn7"), select_id("btn8"),
        select_id("btn9")
    ]
    npreguntas3 = []
    let preguntas_hechas3 = 0
    let preguntas_correctas3 = 0
    let preguntas_incorrectas3 = 0
function escogerPreguntaAleatoria3() {
    let n3 = Math.floor(Math.random() * interprete_bp3.length)
    while (npreguntas3.includes(n3)) {
      n3++
      if (n3 >= interprete_bp3.length) {
        n3 = 0
      }
      if (npreguntas3.length == interprete_bp3.length) {
        npreguntas3 = []
      }
    }
    npreguntas3.push(n3)
    preguntas_hechas3++
    if(preguntas_hechas3 == 10){
      window.location="start_game.php";
    }
    escogerPregunta3(n3)
}
  
function escogerPregunta3(n3) {
    pregunta3 = interprete_bp3[n3]
    select_id("pregunta3").innerHTML = pregunta3.pregunta
    select_id("numero3").innerHTML = n3
    let pc3 = preguntas_correctas3
    let inco3 = preguntas_incorrectas3
    desordenarRespuestas3(pregunta3)
}
  
function desordenarRespuestas3(pregunta3) {
    posibles_respuestas3 = [
      pregunta3.respuesta,
      pregunta3.incorrecta1,
      pregunta3.incorrecta2,
    ]
    posibles_respuestas3.sort(() => Math.random() - 0.5)
  
    select_id("btn7").innerHTML = posibles_respuestas3[0]
    select_id("btn8").innerHTML = posibles_respuestas3[1]
    select_id("btn9").innerHTML = posibles_respuestas3[2]
}
  
let suspender_botones3 = false
  
function oprimir_btn3(i) {
    if (suspender_botones3) {
      return
    }
    suspender_botones3 = true
    if (posibles_respuestas3[i] == pregunta3.respuesta) {
      preguntas_correctas3++
      points3()
      btn_correspondiente3[i].style.background = "lightgreen"
      if(preguntas_correctas3 == 10){
        send_points3()
      }
    } else {
      btn_correspondiente3[i].style.background = "pink"
      if(posibles_respuestas3[i] == pregunta3.incorrecta1 ||posibles_respuestas3[i] == pregunta3.incorrecta2 ){
        preguntas_incorrectas3++
          if(preguntas_incorrectas3 <= 2 || preguntas_incorrectas3 == 5 || preguntas_incorrectas3 == 10){
            rest_points3()
          }  
      }
    }
    for (let j = 0; j < 4; j++) {
      if (posibles_respuestas3[j] == pregunta3.respuesta) {
        btn_correspondiente3[j].style.background = "lightgreen"
        break
      }
    }
    setTimeout(() => {
      reiniciar3()
      suspender_botones3 = false
    }, 1500);
}
  
function reiniciar3() {
    for (const btn of btn_correspondiente3) {
      btn.style.background = "white"
    }
    escogerPreguntaAleatoria3()
}
  
function select_id(id) {
    return document.getElementById(id)
}
  
function style(id) {
    return select_id(id).style
}
  
function readText3() {
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "category/sport/sport.json", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}

function send_points3(){
  var puntos = 10;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/sport/send_point.php', {
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
function points3(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/sport/send_point.php', {
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
function rest_points3(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/sport/rest_p_sport.php', {
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