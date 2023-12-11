function videogames(){
    document.getElementById("show1").style.display = "none"
    document.getElementById("show6").style.display = "block"
    base_preguntas5 = readText5("p_vg.json")
    interprete_bp5 = JSON.parse(base_preguntas5)
    escogerPreguntaAleatoria5()
}
    let pregunta5
    let posibles_respuestas5
    btn_correspondiente5 = [
        select_id("btn13"), select_id("btn14"),
        select_id("btn15")
    ]
    npreguntas5 = []
    let preguntas_hechas5 = 0
    let preguntas_correctas5 = 0
    let preguntas_incorrectas5 = 0
function escogerPreguntaAleatoria5(){
    let n5 = Math.floor(Math.random() * interprete_bp5.length)
    while (npreguntas5.includes(n5)){
      n5++
      if (n5 >= interprete_bp5.length){
        n5 = 0
      }
      if (npreguntas5.length == interprete_bp5.length){
        npreguntas5 = []
      }
    }
    npreguntas5.push(n5)
    preguntas_hechas5++
    if(preguntas_hechas5 == 10){
      window.location="start_game.php";
    }
    escogerPregunta5(n5)
}  
function escogerPregunta5(n5){
    pregunta5 = interprete_bp5[n5]
    select_id("pregunta5").innerHTML = pregunta5.pregunta
    select_id("numero5").innerHTML = n5
    let pc5 = preguntas_correctas5
    let inco5 = preguntas_incorrectas5
    desordenarRespuestas5(pregunta5)
} 
function desordenarRespuestas5(pregunta5){
    posibles_respuestas5 = [
      pregunta5.respuesta,
      pregunta5.incorrecta1,
      pregunta5.incorrecta2,
    ]
    posibles_respuestas5.sort(() => Math.random() - 0.5)
  
    select_id("btn13").innerHTML = posibles_respuestas5[0]
    select_id("btn14").innerHTML = posibles_respuestas5[1]
    select_id("btn15").innerHTML = posibles_respuestas5[2]
}  
let suspender_botones5 = false
function oprimir_btn5(i){
    if (suspender_botones5){
      return
    }
    suspender_botones5 = true
    if (posibles_respuestas5[i] == pregunta5.respuesta) {
      preguntas_correctas5++
      points5()
      btn_correspondiente5[i].style.background = "lightgreen"
      if(preguntas_correctas5 == 10){
        send_points5()
      }
    } else {
      btn_correspondiente5[i].style.background = "pink"
      if(posibles_respuestas5[i] == pregunta5.incorrecta1 ||posibles_respuestas5[i] == pregunta5.incorrecta2 ){
        preguntas_incorrectas5++
          if(preguntas_incorrectas5 <= 2 || preguntas_incorrectas5 == 5 || preguntas_incorrectas5 == 10){
            rest_points5()
          }  
      }
    }
    for (let j = 0; j < 4; j++) {
      if (posibles_respuestas5[j] == pregunta5.respuesta) {
        btn_correspondiente5[j].style.background = "lightgreen"
        break
      }
    }
    setTimeout(() =>{
      reiniciar5()
      suspender_botones5 = false
    }, 1500);
}
function reiniciar5(){
    for (const btn of btn_correspondiente5) {
      btn.style.background = "white"
    }
    escogerPreguntaAleatoria5()
}
function select_id(id){
    return document.getElementById(id)
}
function style(id){
    return select_id(id).style
}
function readText5(){
    var texto = null;
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "category/vg/p_vg.json", false);
    xmlhttp.send();
    if (xmlhttp.status == 200) {
        texto = xmlhttp.responseText;
    }
    return texto;
}
function send_points5(){
  var puntos = 10;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/vg/send_point.php', {
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
function rest_points5(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/vg/rest_p_vg.php', {
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
function points5(){
  var puntos = 5;
  const data = new FormData();
  data.append('puntos', puntos);

  fetch('category/vg/send_point.php', {
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