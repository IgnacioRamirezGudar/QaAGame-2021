<?php
    session_start();
    include("../bdd/bdd.php");
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
    <title>Top Ranking</title>
    <link rel="stylesheet" href="../css/ranking.css">
    <link rel="shortcut icon" href="../img/logo1.png">
</head>
<body>
<form style="text-align: center;" name="category" onChange="categoria()" >
    <p class = "title">Elija la categoría en la que desea ver su puntaje</p>
        <select name="cate" id = "all" class="selec">
                <option value="world">General
                <option value="tecno">Tecnologia
                <option value="art">Arte
                <option value="sports">Deportes
                <option value="videogame">VideoJuegos
                <option value="nyc">Naturales y Ciencias
        </select>
    </form>
    <table class="container">
	    <thead>
		    <tr>
			    <th><h1>USUARIOS</h1></th>
			    <th><h1>PUNTOS</h1></th>
                <th><h1 >RANGO</h1></th>
		    </tr>
	    </thead>
	    <tbody id = "table_world">

	    </tbody>
    </table>
    <script src="../js/show.js"></script>
    <script src="../js/back.js"></script>
</body>
</html>