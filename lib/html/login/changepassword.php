<?php

    include("connect.php");
    include("functions.php");

    $error = "";

    if(isset($_POST['savepass'])){
        
        $password = $_POST['password'];
        $confirmPassword = $_POST['passwordConfirm'];
        
        if(strlen($password) < 8){
            
            $error = "Password must be greater than 8 chatacters";
            
        } else if($password !== $confirmPassword){
            
            $error = "Passwords do not match";
            
        } else {
            
            $password = password_hash($password, PASSWORD_DEFAULT);
            
            $email = $_SESSION['email'];
            if(mysqli_query($con, "UPDATE users SET password='$password' WHERE email='$email'")){
                
                $error = "Password changed successfully, <a href='profile.php'>Profile</a>";
                
            }
            
        }
        
    }


    if(logged_in()){
        
     
    ?>

        <?php echo $error;?>

 <?php
        
    } else {
        
        header("location: profile.php");
        
    }

?>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="http://nikitasherbakov.com/v/grid/flexboxgrid.css">
  <link rel="stylesheet" href="http://nikitasherbakov.com/v/css/styles.css">
  <title>Restore password - Vivid Ciphers</title>
</head>
  <body>
      
      <div id="error" style=" <?php  if($error !=""){ ?>  display:block; <?php } ?> "><?php echo $error; ?></div>
      
    <div class="wrap-max1140px">
      <header class='wrap-height100px row middle-xs end-sm center-xs'>
        <a class='col-xs-12 t-red' href="#">Profile</a>
      </header>
    </div>
      
    <div class="wrap-max340px">
      <div class="row center-xs">
        <div class="logo">
          <span class="vivid">Vivid</span>
          <span class="ciphers">Ciphers</span>
          <span class="tag">/></span>
        </div>
      </div>
      <div class="row center-xs">
          <p class="p-intro">Change password to have an access to your account</p>
      </div>
      <form method="POST" action="login.php" >
          
        <input type="text" placeholder="Password" required>
        <input type="password" placeholder="Confirm Password" required>
          
        <div class="row middle-xs between-xs wrap-height100px">
          
            <button class="b-green">
            Change password
            </button>
            
         
            
        </div>
      </form>
        
      <footer class="wrap-height100px row middle-xs center-xs">
        <a class="t-gray" href="#">Return to previous page</a>
      </footer>
    </div>
  </body>
</html>
    
   
