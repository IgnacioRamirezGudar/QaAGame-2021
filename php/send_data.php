<?php
include "bdd/bdd.php";
session_start();
    if(isset($_POST['send'])){
        if(strlen($_POST['user']) >= 3 && strlen($_POST['password']) >= 5){
                $user = $_POST['user'];
                $password = sha1($_POST['password']);
                $_SESSION['user'] = $user;
                $validacion = "SELECT * FROM `user_data` WHERE user = '$user' AND password = '$password'";
                $con = mysqli_query($conex, $validacion);
                $user = mysqli_num_rows($con);
                if ($user){
                    header("Location:page/main.php");
                }else{
                    if(searchrep($user,$conex)==1){
                        session_destroy();
                        echo '<p class="alert" id="sendtext" style="display: block; text-align: center;">NOMBRE DE USUARIO YA REGISTRADO</p>
                        <script>
                        var timeout;
                        delayedAlert();
                        function delayedAlert() {
                            timeout = window.setTimeout(slowAlert, 3500);
                        }
                         function slowAlert() {
                            document.getElementById("sendtext").style.display = "none";
                            window.location= "../QaAGame/";
                         }
                        </script>';
                    }else{
                        $user = $_POST['user'];
                        $password = sha1($_POST['password']);
                        mysqli_free_result($con);
                        $query = "INSERT INTO `user_data`(`user`,`password`) VALUES ('$user','$password')";
                        $result = mysqli_query($conex,$query);
    
                        if($query){
                            $user= $_POST['user'];
                            $password = sha1($_POST['password']);
                            $_SESSION['user'] = $user;
                            $validacion = "SELECT * FROM `user_data` WHERE user = '$user' AND password = '$password'";
                            $con = mysqli_query($conex, $validacion);
                            $user = mysqli_num_rows($con);
                            if ($user){
                                header("Location:page/main.php");
                            }else{
                                echo ("Usuario no logueado");
                            }
                            mysqli_free_result($con);
                        }
                    }   
                }
        }else{
            session_destroy();
            echo '<p class="alert" id="sendtext" style="display: block; text-align: center;">DATOS NO INGRESADOS</p>
            <script>
            var timeout;
            delayedAlert();
            function delayedAlert() {
                timeout = window.setTimeout(slowAlert, 3000);
            }
            function slowAlert() {
                document.getElementById("sendtext").style.display = "none";
                window.location= "../QaAGame/";
            }
            </script>';
        }
    }

    function searchrep($user,$conex){
        $user = $_POST['user'];
        $sql = "SELECT * FROM `user_data` WHERE `user` = '$user'";
        $r = mysqli_query($conex,$sql);
        if(mysqli_num_rows($r) > 0){
            return 1;
        }else{
            return 0;
        }
    }
?>