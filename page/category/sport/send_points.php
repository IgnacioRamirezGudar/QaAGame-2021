<?php
    include ("../../../bdd/bdd.php");
    session_start();
    $points = $_POST['puntos'];
    $update = "UPDATE `user_data` SET `points_sport` = `points_sports` + $points WHERE user =  '$_SESSION[user]'";
    $con = mysqli_query($conex,$update);
?>
