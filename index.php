<?php
session_start();
error_reporting(0);
include('includes/config.php');
if($_SESSION['login']!=''){
$_SESSION['login']='';
}
if(isset($_POST['login']))
{
$email=$_POST['emailid'];
$password=$_POST['password'];
$sql ="SELECT EmailId,Password,StudentId,Status FROM tblstudents WHERE EmailId=:email and Password=:password";
$query= $dbh -> prepare($sql);
$query-> bindParam(':email', $email, PDO::PARAM_STR);
$query-> bindParam(':password', $password, PDO::PARAM_STR);
$query-> execute();
$results=$query->fetchAll(PDO::FETCH_OBJ);

if($query->rowCount() >= 1)
{
 foreach ($results as $result) {
 $_SESSION['stdid']=$result->StudentId;
if($result->Status==1)
{
$_SESSION['login']=$_POST['emailid'];
echo "<script type='text/javascript'> document.location ='dashboard.php'; </script>";
} else {
echo "<script>alert('Your Account Has been blocked .Please contact admin');</script>";

}
}

}

else{
echo "<script>alert('Invalid Details');</script>";
}
}
?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <title>Online Library Management System | </title>
    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONT AWESOME STYLE  -->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
    <!-- CUSTOM STYLE  -->
    <link href="login.css" rel="stylesheet" />
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <style media="screen">
    #exampleInputEmail1{

      position: left;
      padding-left: 30px;
      background-size: 35px;
      background-repeat: no-repeat;
      border-radius: 8px;
      border: 2px solid white;
      height: 50px;
      width: 320px;
      color:black;
    }
    .topnav {
      overflow: hidden;
      background-color:white;
      font-family: serif;
      width: 100%;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 1.5rem;
    }

    .topnav a {
      float: left;
      color: black;
      text-align: center;
      width: 15%;
      text-decoration: none;
      font-weight: bold;
      font-size: 25px;
    }

    .topnav a:hover, .dropdown:hover,  {
      background-color: #ddd;
      color: black;
    }

    .dropdown {
      float: left;
      overflow: hidden;
    }

    .dropdown .dropbtn {
      font-size: 19px;
      border: none;
      outline: none;
      color: rgba(255,255,255,1);
      padding: 14px 30px;
      background-color: inherit;
      font-family: inherit;
    }

    .dropdown-content {
      display: none;
      position: absolute;
      background-color: rgba(0,0,0,0.7);
      min-width: 160px;
      box-shadow: 0px 8px 16px 0px rgba(255,255,255,1);
      z-index: 1;
    }

    .dropdown-content a {
      float: none;
      color: white;
      padding: 12px 30px;
      text-decoration: none;
      display: block;
      text-align: left;
    }


    .dropdown:hover .dropdown-content {
      display: block;
    }

    #exampleInputPassword1{
    ]
      background-position: left;
      padding-left: 30px;
      background-size: 22px;
      background-repeat: no-repeat;
      border-radius: 8px;
      border: 2px solid white;
      height: 50px;
      width: 320px;
      color:black;
    }


    </style>
</head>
<body>
    <!---MENU SECTION START-->
<!-- MENU SECTION END-->
<div class="topnav"><a href="home.html">Home</a><a><img src="assets/img/logolib.png" style="width: 250 px; height: 60px"></a>
  <a href="find.html"id="digi">Digital Collection</a></div>
<div class="container" id ="container1" align="center">
  <form id="LibForm" enctype="multipart/form-data" role="form" method="post">
      <div class="form" align="center">
        <p>
        <img src="assets/img/icon.png" width="150" height="150">
      </p>
        <br>
  <p align="center" id="logtext"><b>LOG IN</b></p>
   <br>
  <div class="form-group">
    <input type="email" class="form-control" id="exampleInputEmail1" name="emailid" aria-describedby="emailHelp" placeholder="Email">
  </div>
          <br>
  <div class="form-group">
    <input type="password" class="form-control" id="exampleInputPassword1" name="password" placeholder="Password">
  </div>
          <br>
  <button type="submit" name="login" id="login">Login</button>
  <p></p>
  <br>
  <div class="text-center ">
    <span class="txt1">
      Don’t have an account?
    </span>
    <a class="txt2" href="signup1.php">
      Sign Up
    </a>
  </div>
  <p class="help-block"><a href="user-forgot-password.php">Forgot Password</a></p>
</div>
  </form>
</div>
     <!-- CONTENT-WRAPPER SECTION END-->
      <!-- FOOTER SECTION END-->
    <script src="assets/js/jquery-1.10.2.js"></script>
    <!-- BOOTSTRAP SCRIPTS  -->
    <script src="assets/js/bootstrap.js"></script>
      <!-- CUSTOM SCRIPTS  -->
    <script src="assets/js/custom.js"></script>

</body>
</html>
