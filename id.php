<?php
$uploadDir = 'images/';
$response = array(
    'status' => 0,
    'message' => 'Form submission failed, please try again.'
);

if(isset($_POST['name']) || isset($_POST['email'])|| isset($_POST['regdate'])|| isset($_POST['exdate']) || isset($_POST['file'])){

    $name = $_POST['name'];
    $email = $_POST['email'];
    $regdate = $_POST['regdate'];
    $exdate = $_POST['exdate'];

    if(!empty($name) && !empty($email)){

        if(filter_var($email, FILTER_VALIDATE_EMAIL) === false){
            $response['message'] = 'Please enter a valid email.';
        }else{
            $uploadStatus = 1;


            $uploadedFile = '';
            if(!empty($_FILES["file"]["name"])){


                $fileName = basename($_FILES["file"]["name"]);
                $targetFilePath = $uploadDir . $fileName;
                $fileType = pathinfo($targetFilePath, PATHINFO_EXTENSION);


                $allowTypes = array('jpg', 'png', 'jpeg');
                if(in_array($fileType, $allowTypes)){

                    if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
                        $uploadedFile = $fileName;
                    }else{
                        $uploadStatus = 0;
                        $response['message'] = 'Sorry, there was an error uploading your file.';
                    }
                }else{
                    $uploadStatus = 0;
                    $response['message'] = 'Sorry, only JPG, JPEG, & PNG files are allowed to upload.';
                }
            }

            if($uploadStatus == 1){

                include_once 'dbConfig.php';


                $insert = $db->query("INSERT INTO form_data (name,email,file_name,registration_date,expiry_date	) VALUES ('".$name."','".$email."','".$uploadedFile."','".$regdate."','".$exdate."')");

                if($insert){
                    $response['status'] = 1;
                    $response['message'] = 'Form data submitted successfully!';
                }
            }
        }
    }else{
         $response['message'] = 'Please fill all the mandatory fields (name and email).';
    }
}


echo json_encode($response);
