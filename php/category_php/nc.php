<?php
include "../../bdd/bdd.php";
$query = "SELECT `user`,`points_nc` FROM `user_data` ORDER BY `points_nc` DESC";
$result = mysqli_query($conex,$query);
$datas = mysqli_fetch_all($result,MYSQLI_ASSOC);
if(!empty($datas)){
    echo json_encode($datas);
}else{
    echo json_encode([]);
}
?>