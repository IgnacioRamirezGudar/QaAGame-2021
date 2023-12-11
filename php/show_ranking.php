<?php
    include ("../bdd/bdd.php");
    session_start();
    $consulta = mysqli_query($conex, "SELECT points_tec,points_art,points_sport,points_nc,points_vg FROM user_data WHERE user =  '$_SESSION[user]'");
    $insert2 = "UPDATE `user_data` SET `total` = `points_art` + `points_nc` + `points_vg` + `points_tec` WHERE user =  '$_SESSION[user]'";
    $result2 = mysqli_query($conex,$insert2);
    $query = "SELECT `user`,`total` FROM `user_data` ORDER BY `total` DESC ";
    $result = mysqli_query($conex,$query);
    $datas = mysqli_fetch_all($result,MYSQLI_ASSOC);
    if(!empty($datas)){
        echo json_encode($datas);
    }else{
        echo json_encode([]);
    }
?>