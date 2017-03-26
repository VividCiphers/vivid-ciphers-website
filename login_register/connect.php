<?php
 
     $con = mysqli_connect("localhost","root","","registration");
     
     if(mysqli_connect_errno()){
         
         echo "Error occured while connecting with database ".mysqli_connect_errno();
         
     }

     session_start();

?>



/*

Shank you need to sort out the db and update this file, cheers ! :)

*/
