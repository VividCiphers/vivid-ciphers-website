<?php

    include("connect.php");
    include("functions.php");
    
    if(logged_in()){
        
        header("location:profile.php");
        exit();
        
    }

    $error = "";

    if(isset($_POST['submit'])){
        
        $email = mysqli_real_escape_string($con, $_POST['email']);
        $password = mysqli_real_escape_string($con, $_POST['password']);
        $checkBox = isset($_POST['keep']);
        
        if(email_exists($email,$con)){
            
            $result = mysqli_real_escape_string($con, "SELECT password FROM users WHERE email='$email'");
            $retrievepassword = mysqli_fetch_assoc($result);
            
            if(!password_verify($password,$retrievepassword['password'])){
                
                $error = "Password is incorrect";
                
            } else {
                
                $_SESSION['email'] = $email;
                if($checkBox == "on"){
                    
                    setcookie("email",$email, time()+3600);
                    
                }
                
                header("location: profile.php");
                
            }
            
        } else {
            
            $error = "Email doesn't exist";
            
        }
        
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
  <title>Log In - Vivid Ciphers</title>
</head>
  <body>
      
      <div id="error" style=" <?php  if($error !=""){ ?>  display:block; <?php } ?> "><?php echo $error; ?></div>
      
    <div class="wrap-max1140px">
      <header class='wrap-height100px row middle-xs end-sm center-xs'>
        <a class='col-xs-12 t-red' href="#">Sign up</a>
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
          <p class="p-intro">Log in to have an access to your account</p>
      </div>
      <form method="POST" action="login.php" >
          
        <input type="text" placeholder="Login" required>
        <input type="password" placeholder="Password" required>
          
        <div class="row middle-xs between-xs wrap-height100px">
          
            <button class="b-green">
            Log In
            </button>
            
          <a href="#">Forgot password?</a>
            
        </div>
      </form>
        
      <footer class="wrap-height100px row middle-xs center-xs">
        <a class="t-gray" href="#">Return to previous page</a>
      </footer>
    </div>
  </body>
</html>

