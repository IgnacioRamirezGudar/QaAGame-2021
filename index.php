<?php
    include "php/send_data.php";
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=1, initial-scale=1.0">
    <title>Inicio</title>
    <link rel="stylesheet" href="css/index.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link rel="shortcut icon" href="img/logo1.png">
</head>
<body>

  <div id="login-button">
    <div class = "title2"> 
      <h2>HI</h2>
      <h2>CLICK ME</h2>
    </div>
  </div>
    

  <div id="container">
    <h1>WELCOME</h1>
      <form method="POST" class="form">
        <input type="text" name="user" id="" placeholder="Ingrese nombre de usuario">
        <input type="text" name="password" id="" placeholder="Ingrese contraseña">
        <p>*La contraseña debe tener más de 5 caracteres</p>
        <input type="submit" value="INGRESAR" name = "send">
      </form>
  </div>
  <script src="js/script.js"></script>
</body>
</html>
