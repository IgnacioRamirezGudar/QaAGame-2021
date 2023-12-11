<?php
    include ("../../../bdd/bdd.php");
    session_start();
    $points = $_POST['puntos'];
    $update = "UPDATE `user_data` SET `points_tec` = `points_tec` + $points WHERE user =  '$_SESSION[user]'";
    $con = mysqli_query($conex,$update);
?>
