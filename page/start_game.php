<?php
include "../bdd/bdd.php";
session_start();
if (!isset($_SESSION['user'])){
    header('Location:../');
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <META HTTP-EQUIV="CACHE-CONTROL" CONTENT="NO-CACHE">
    <META HTTP-EQUIV="PRAGMA" CONTENT="NO-CACHE">
    <title>Game</title>
    <link rel="stylesheet" href="../css/start_game.css">
    <link rel="stylesheet" href="../css/art_css.css">
    <link rel="shortcut icon" href="../img/logo1.png">
</head>
<body>
    <div id="show1" class = "conter" style="display: block;">
        <p class = "title">Elija su categoría preferida y a jugar</p>
        <form style="text-align: center;" name="category" class="content-select">
            <select name="cate" class = "elegir">
                <option>--CATEGORIA--
                <option value="tec">Tecnologia
                <option value="arte">Arte
                <option value="sports">Deportes
                <option value="vg">Video Juegos
                <option value="nc">Naturales y Ciencias
            </select>
        </form>
        <button onclick="link()" id="boton" class="boton" style = "display: block;">JUGAR</button>
    </div>
    <div id="show2" style="display: none;">
        <div class="contenedor">
            <div class="encabezado">
                <div class="numero" id="numero"></div>
                <div class="pregunta" id="pregunta"></div>
            </div>
            <div class="btn" id="btn1" onclick="oprimir_btn2(0)"></div>
            <div class="btn" id="btn2" onclick="oprimir_btn2(1)"></div>
            <div class="btn" id="btn3" onclick="oprimir_btn2(2)"></div>
        </div>
    </div>
    <div id="show3" style="display: none;">
        <div class="contenedor">
            <div class="encabezado">
                <div class="numero" id="numero2"></div>
                <div class="pregunta" id="pregunta2"></div>
            </div>
            <div class="btn" id="btn4" onclick="oprimir_btn(0)"></div>
            <div class="btn" id="btn5" onclick="oprimir_btn(1)"></div>
            <div class="btn" id="btn6" onclick="oprimir_btn(2)"></div>
        </div>
    </div>
    <div id="show4" style="display: none;">
        <div class="contenedor">
            <div class="encabezado">
                <div class="numero" id="numero3"></div>
                <div class="pregunta" id="pregunta3"></div>
            </div>
            <div class="btn" id="btn7" onclick="oprimir_btn3(0)"></div>
            <div class="btn" id="btn8" onclick="oprimir_btn3(1)"></div>
            <div class="btn" id="btn9" onclick="oprimir_btn3(2)"></div>
        </div>
    </div>
    <div id="show5" style="display: none;">
        <div class="contenedor">
            <div class="encabezado">
                <div class="numero" id="numero4"></div>
                <div class="pregunta" id="pregunta4"></div>
            </div>
            <div class="btn" id="btn10" onclick="oprimir_btn4(0)"></div>
            <div class="btn" id="btn11" onclick="oprimir_btn4(1)"></div>
            <div class="btn" id="btn12" onclick="oprimir_btn4(2)"></div>
        </div>
    </div>
    <div id="show6" style="display: none;">
        <div class="contenedor">
            <div class="encabezado">
                <div class="numero" id="numero5"></div>
                <div class="pregunta" id="pregunta5"></div>
            </div>
            <div class="btn" id="btn13" onclick="oprimir_btn5(0)"></div>
            <div class="btn" id="btn14" onclick="oprimir_btn5(1)"></div>
            <div class="btn" id="btn15" onclick="oprimir_btn5(2)"></div>
        </div>
    </div>
    <script>
        function link(){
            if(category.cate.value == "arte"){
                arte();
            }else if(category.cate.value == "nc"){
                nc();
            }else if(category.cate.value == "tec"){
                tec();
            }else if(category.cate.value == "vg"){
                videogames();
            }else if(category.cate.value == "sports"){
                sport();
            }
        }
    </script>
    <script src="category/nc/azar_nc.js"></script>
    <script src="category/art/azar_art.js"></script>
    <script src="category/sport/azar_sport.js"></script>
    <script src="category/tec/azar_tec.js"></script>
    <script src="category/vg/azar_vg.js"></script>
    <script src="../js/back.js"></script>
</body>
</html>