<?php
    include ("../../../bdd/bdd.php");
    session_start();
    $points = $_POST['puntos'];
    $update = "UPDATE `user_data` SET `points_vg` = `points_vg` - $points WHERE user =  '$_SESSION[user]'";
    $con = mysqli_query($conex,$update);
    $sql = "SELECT `points_vg` FROM `user_data` WHERE `user` =  '$_SESSION[user]'";
    $con2 = mysqli_query($conex,$sql);
    if($con2->num_rows > 0){
        while($row = $con2 ->fetch_assoc()){
            if($row['points_vg'] <= 0){
                $update2 = "UPDATE `user_data` SET `points_vg` = '0' WHERE `user` =  '$_SESSION[user]'";
                $con3 = mysqli_query($conex,$update2);
            }
        }
    }
?>