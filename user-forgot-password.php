<?php
session_start();
error_reporting(0);
include('includes/config.php');
if(isset($_POST['change']))
{
  //code for captach verification
if ($_POST["vercode"] != $_SESSION["vercode"] OR $_SESSION["vercode"]=='')  {
        echo "<script>alert('Incorrect verification code');</script>" ;
    }
        else {
$email=$_POST['email'];
$mobile=$_POST['mobile'];
$newpassword=$_POST['newpassword'];
  $sql ="SELECT EmailId FROM tblstudents WHERE EmailId=:email and MobileNumber=:mobile";
$query= $dbh -> prepare($sql);
$query-> bindParam(':email', $email, PDO::PARAM_STR);
$query-> bindParam(':mobile', $mobile, PDO::PARAM_STR);
$query-> execute();
$results = $query -> fetchAll(PDO::FETCH_OBJ);
if($query -> rowCount() > 0)
{
$con="update tblstudents set Password=:newpassword where EmailId=:email and MobileNumber=:mobile";
$chngpwd1 = $dbh->prepare($con);
$chngpwd1-> bindParam(':email', $email, PDO::PARAM_STR);
$chngpwd1-> bindParam(':mobile', $mobile, PDO::PARAM_STR);
$chngpwd1-> bindParam(':newpassword', $newpassword, PDO::PARAM_STR);
$chngpwd1->execute();
echo "<script>alert('Your Password succesfully changed');</script>";
}
else {
echo "<script>alert('Email id or Mobile no is invalid');</script>";
}
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
    <title>Online Library Management System | Password Recovery </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link href="forgotstyle.css" rel="stylesheet" />
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
     <script type="text/javascript">
function valid()
{
if(document.chngpwd.newpassword.value!= document.chngpwd.confirmpassword.value)
{
alert("New Password and Confirm Password Field do not match  !!");
document.chngpwd.confirmpassword.focus();
return false;
}
return true;
}
</script>

</head>
<body>
	<!---MENU SECTION START-->
<!-- MENU SECTION END-->
<div class="content-wrapper" >
<div class="container" >
	<!--Navbar-->
<div class="topnav"><a href="index.php">Go Back To LogIn</a><a><img src="assets/img/logolib.png" style="width: 250 px; height: 60px"></a></div>

<!--LOGIN PANEL START-->
<form role="form" name="chngpwd" method="post" onSubmit="return valid();">
<h3 class="header-line" align="center" style="color: white">User Password Recovery</h3><br>
<div class="form-group">
<label>Enter Reg Email id : </label>
<input class="form-control" type="email" name="email" required autocomplete="off" />
</div>

<div class="form-group">
<label>Enter Reg Mobile No : </label>
<input class="form-control" type="text" name="mobile" required autocomplete="off" />
</div>

<div class="form-group">
<label>Password : </label>
<input class="form-control" type="password" name="newpassword" required autocomplete="off"  />
</div>

<div class="form-group">
<label>ConfirmPassword : </label>
<input class="form-control" type="password" name="confirmpassword" required autocomplete="off"  />
</div>

<br>
 <div class="form-group" align="center">
 <button type="submit" name="change" class="btn btn-info">Change Password</button> | <a href="index.php">Login</a>
</div>
</form>

<!---LOGIN PABNEL END-->


    </div>
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
