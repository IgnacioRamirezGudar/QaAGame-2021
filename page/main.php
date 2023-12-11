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
    <meta http-equiv="Cache-Control" content="no-cache, mustrevalidate">
    <title>Main Game</title>
    <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/main2.scss">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="shortcut icon" href="../img/logo1.png">
</head>
<body>
    <div class="conteiner">
        <p class = "img"></p>
        <p class = "user">[<?php echo $_SESSION['user']?>]</p>
        <a href="../php/destroy.php"><p class="close">Cerrar Sesion</p></a>
        <button class="start" onclick="window.location.href='../page/start_game.php'">START GAME</button>
        <button class="ranking" onclick="window.location.href='../page/ranking.php'">RANKING</button>
    </div>
    <script src="../js/script2.js"></script>
</body>
</html>