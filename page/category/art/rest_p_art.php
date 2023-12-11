<?php
    include ("../../../bdd/bdd.php");
    session_start();
    $points = $_POST['puntos'];
    $update = "UPDATE `user_data` SET `points_art` = `points_art` - $points WHERE `user` =  '$_SESSION[user]'";
    // $query = "UPDATE `usuarios` SET `notas` = `$notas_noti` - $points WHERE `nombre_completo` =  '$_SESSION[nombre_completo]'";
    $con = mysqli_query($conex,$update);
    $sql = "SELECT `points_art` FROM `user_data` WHERE `user` =  '$_SESSION[user]'";
    $con2 = mysqli_query($conex,$sql);
    if($con2->num_rows > 0){
        while($row = $con2 ->fetch_assoc()){
            if($row['points_art'] <= 0){
                $update2 = "UPDATE `user_data` SET `points_art` = '0' WHERE `user` =  '$_SESSION[user]'";
                $con3 = mysqli_query($conex,$update2);
            }
        }
    }
?>