<?php

	include("connect.php");
	include("functions.php");

	if(logged_in())
	{
		header("location: index.php");
		exit();
	}

	$error = "";

	if(isset($_POST['submit']))
	{
        $nickname = mysqli_real_escape_string($con, $_POST['nickname']);
	    $email = mysqli_real_escape_string($con, $_POST['email']);
	    $password = $_POST['password'];
	    $passwordConfirm = $_POST['passwordConfirm'];




        if(strlen($nickname) < 3)
		{
			$error = "Nickname is too short";
		}

		else if(!filter_var($email, FILTER_VALIDATE_EMAIL))
		{
			$error = "Please enter valid email address";
		}
		else if(email_exists($email, $con))
		{
			$error = "Someone is already registered with this email";
		}
		else if(strlen($password) < 8)
		{
			$error = "Password must be greater than 8 characters";
		}
		else if($password !== $passwordConfirm)
		{
			$error = "Password does not match";
		}

		else
		{
				$password = password_hash($password, PASSWORD_DEFAULT);


					$insertQuery = "INSERT INTO users(nickname, email, password,) VALUES ('$nickname','$email','$password','$confirmPassword')";

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
  <title>Create an Account - Vivid Ciphers</title>
</head>
  <body>
      <div id="error" style=" <?php  if($error !=""){ ?>  display:block; <?php } ?> "><?php echo $error; ?></div>

    <div class="wrap-max1140px">
      <header class='wrap-height100px row middle-xs end-sm center-xs'>
        <div class='col-xs-12' >Already have an account? <a href="#">Log In</a></div>
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
          <p class="p-intro" style="margin-top:-5px;">Create an account</p>
      </div>
      <form method="POST" action="register.php" enctype="multipart/form-data">

        <input type="text" placeholder="Nickname" style="text-align: center" name="nickname" class="iputFields" required>
        <input type="email" placeholder="Email" style="text-align: center" name="email"  class="inputFields" required>
        <input type="password" placeholder="Password" style="text-align: center" name="password" class="inputFields"  required >
        <input type="password" placeholder="Password Confirm" style="text-align: center" name="passwordConfirm" class="inputFields"  required >




        <div class="row middle-xs between-xs wrap-height100px">
            <button  type="submit" class="b-green" value="Sign Up">Sign Up</button>


        </div>
      </form>
      <footer class="wrap-height100px row middle-xs center-xs">
        <a class="t-gray" href="#">Return to previous page</a>
      </footer>
    </div>
  </body>
</html>
