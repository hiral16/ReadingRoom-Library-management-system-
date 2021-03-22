<?php
session_start();
include('includes/config.php');
error_reporting(0);
if(isset($_POST['signup']))
{
//code for captach verification
//Code for student ID
$count_my_page = ("studentid.txt");
$hits = file($count_my_page);
$hits[0] ++;
$fp = fopen($count_my_page , "w");
fputs($fp , "$hits[0]");
fclose($fp);
$StudentId= $hits[0];
$fname=$_POST['firstname'];
$lname=$_POST['lastname'];
$mobileno=$_POST['mobileno'];
$email=$_POST['email'];
$address=$_POST['address'];
$password=$_POST['password'];
$status=1;
$sql="INSERT INTO  tblstudents(StudentId,FirstName,LastName,MobileNumber,EmailId,Address,Password,Status) VALUES(:StudentId,:fname,:lname,:mobileno,:email,:address,:password,:status)";
$query = $dbh->prepare($sql);
$query->bindParam(':StudentId',$StudentId,PDO::PARAM_STR);
$query->bindParam(':fname',$fname,PDO::PARAM_STR);
$query->bindParam(':lname',$lname,PDO::PARAM_STR);
$query->bindParam(':mobileno',$mobileno,PDO::PARAM_STR);
$query->bindParam(':email',$email,PDO::PARAM_STR);
$query->bindParam(':address',$address,PDO::PARAM_STR);
$query->bindParam(':password',$password,PDO::PARAM_STR);
$query->bindParam(':status',$status,PDO::PARAM_STR);
$query->execute();
$lastInsertId = $dbh->lastInsertId();
echo '<script>alert("Your Registration successfull and your registration id is  "+"'.$StudentId.'")</script>';
}
?>

<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content="" />
    <meta name="author" content="" />
    <!--[if IE]>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <![endif]-->
    <title>Signup</title>
    <!-- BOOTSTRAP CORE STYLE  -->
    <link href="assets/css/bootstrap.css" rel="stylesheet" />
    <!-- FONT AWESOME STYLE  -->
    <link href="assets/css/font-awesome.css" rel="stylesheet" />
    <link href="signup1.css" rel="stylesheet" />
    <!-- CUSTOM STYLE  -->
    <!-- GOOGLE FONT -->
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css' />
    <script src="signup.js" charset="utf-8"></script>
<script type="text/javascript">
function valid()
{
if(document.signup.password.value!= document.signup.confirmpassword.value)
{
alert("Password and Confirm Password Field do not match  !!");
document.signup.confirmpassword.focus();
return false;
}
return true;
}
</script>
<script>
function checkAvailability() {
$("#loaderIcon").show();
jQuery.ajax({
url: "check_availability.php",
data:'emailid='+$("#emailid").val(),
type: "POST",
success:function(data){
$("#user-availability-status").html(data);
$("#loaderIcon").hide();
},
error:function (){}
});
}
</script>

</head>
<body>
    <!---MENU SECTION START-->
    <div class="topnav"><a href="home.html">Home</a><a><img src="assets/img/logolib.png" style="width: 250 px; height: 60px"></a>
    <a href="index.php">LogIn</a><a href="find.html"id="digi">Digital Collection</a></div>
    <div class="container">
    <form name="signup" method="post" onSubmit="return valid();">
      <p align="center">
        <img src="a.gif" width="200" height="150" >
          </p>
       <p align="center" id="logtext"><b>SIGN UP</b></p>

    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label for="firstname">First name</label>
        <input type="text" class="form-control" id="firstname" name="firstname" placeholder="First name" required>
         <span id="messagef"></span>
      </div>
      <div class="col-md-6 mb-3">
        <label for="LN">Last name</label>
        <input type="text" class="form-control" id="lastname" name="lastname" placeholder="Last name" required>
        <span id="messagel"></span>
      </div>
    </div>

    <div class="form-row">
      <div class=" col-md-6 mb-3">
        <label class="" for="birthday">Date of Birth</label>
        <div class="">
          <input class="form-control" type="date" id="birthday" name="birthday" required >
          <span id="messagedob"></span>
        </div>
      </div>
      <div class="col-md-6 mb-3">
        <label class="" for="">Mobile Number </label>
        <div class="">
          <input class="form-control" type="tel" id="phone" name="mobileno" placeholder="Mobile Number"required>
        <span id="messagemob"></span>
        </div>
      </div>
    </div>

    <div class="form1">
    <div class="col-md-15 mb-3">
      <label for="EM">Email</label>
      <input type="email" class="form-control" name ="email" id="emailid" placeholder="Email ID" required>
    </div>
    <span id="messagee"></span>
    </div>

      <div class="form1">
    <div class="col-md-15 mb-3">
      <label for="addr">Address</label>
      <input type="text" class="form-control" id="addr" name="address" placeholder="Address" required>
      <span id="messageaddr"></span>
    </div>
    </div>

    <div class="form-row">
      <div class="col-md-6 mb-3">
        <label class="" for="pwd">Password </label>
        <div class="">
          <input  class="form-control" type="password" id="pwd" name="password" placeholder="Password"required>
          <span id="messagepwd"></span>
        </div>
      </div>

      <div class="col-md-6 mb-3">
        <label  class="" for="cpwd">Confirm Password </label>
        <div class="">
          <input class="form-control" type="password" id="cpwd" name="confirmpassword"placeholder="Confirm Password"required>
          <span id="messagecpwd"></span>
        </div>
      </div>
      </div>
      <br>
      <br>
    <div id="container1">
    <button type="submit" name="signup" id="btnt">Register</button>
    </div>
    </form>
    </div>
    </div>     <!-- CONTENT-WRAPPER SECTION END-->
    <script src="assets/js/jquery-1.10.2.js"></script>
    <!-- BOOTSTRAP SCRIPTS  -->
    <script src="assets/js/bootstrap.js"></script>
      <!-- CUSTOM SCRIPTS  -->
    <script src="assets/js/custom.js"></script>
</body>
</html>
