<?php

	include("connect.php");
	include("functions.php");

	if(logged_in()){

		header("location: index.php");
		exit();

	}

	$error = "";

	if(isset($_POST['submit'])){

	    $email = mysqli_real_escape_string($con, $_POST['email']);
	    $password = mysqli_real_escape_string($con, $_POST['password']);
		$checkBox = isset($_POST['keep']);

		if(email_exists($email,$con)){

			$result = mysqli_query($con, "SELECT password FROM vc_users WHERE email='$email'");
			$retrievepassword = mysqli_fetch_assoc($result);

			if(!password_verify($password, $retrievepassword['password'])){

				$error = "Password is incorrect";

			} else {

				$_SESSION['email'] = $email;

				if($checkBox == "on"){

					setcookie("email",$email, time()+3600);
				}

				header("location: index.php");
			}


		} else {

			$error = "Email Does not exist";

		}


	}

?>


<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="http://vividciphers.com/grid/flexboxgrid.css">
  <link rel="stylesheet" href="http://vividciphers.com/css/styles.css">
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
          <p class="p-intro" style="margin-top:-5px;">Log in to have an access to your account</p>
      </div>
      <form method="POST" action="login.php" >

        <input type="text" placeholder="Your email" class="inputFields" name="email" required>
        <input type="password" placeholder="Your password" class="inputFields" name="password" required>

        <div class="row middle-xs between-xs wrap-height100px">

            <button type="submit" class="b-green" value="Login">Login</button>



          <a href="#">Forgot password?</a>

        </div>
      </form>

      <footer class="wrap-height100px row middle-xs center-xs">
        <a class="t-gray" href="#">Return to previous page</a>
      </footer>
    </div>
  </body>
</html>
