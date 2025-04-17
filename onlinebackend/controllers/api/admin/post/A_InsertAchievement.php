<?php

include_once '../../../../models/post.php';
include_once '../../../../config/header.php';


define('SITE_ROOT', "../upload/");  

// Function to handle errors and send response
function handleResponse($statusCode, $message)
{
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}
                // Check if the 'file' key exists in the $_FILES array
                if (isset($_FILES['file'])) {
                    $file = $_FILES["file"];
                    $error = $file["error"];

                    if ($error > 0) {
                        handleResponse(400, 'error uploading the file!');
                    }
                    // Check file type
                    $allowedTypes = ['image/webp', 'image/png','image/jpeg'];
                    $fileType = mime_content_type($file["tmp_name"]);
                    if (!in_array($fileType, $allowedTypes)) {
                        handleResponse(400, 'invalid file type. supported types are: webp, png.');
                    }
                   

                    // Check file size
                    $maxFileSize = 300 * 1024; // 200 KB
                    if ($file["size"] > $maxFileSize) {
                        handleResponse(400, 'file size exceeds the maximum allowed size (200 KB).');
                    }
                    // Ensure the upload folder exists
                    if (!file_exists(SITE_ROOT)) {
                        mkdir(SITE_ROOT, 0777, true); // Recursive directory creation
                    }



                    $file_name = $file["name"];
                    $random_name = rand(1000, 1000000) . "-" . $file_name;
                    $upload_name = SITE_ROOT . strtolower($random_name);

                } else {
                    // Handle the case when no file is uploaded (optional)
                    $upload_name = null; // Set to null or handle differently based on your requirements
                }
                $obj = new Post();

                
                    if (($upload_name == null || move_uploaded_file($file["tmp_name"], $upload_name))) {

                        $result = $obj->A_InsertAchievement($_POST['admin_id'], $_POST['content'],$upload_name);

                        $response = [
                            "message" => $result
                        ];
                    } else {
                        handleResponse(400, 'Error moving the file: ' . error_get_last()['message']);
                    } 
               

                echo json_encode($response);
            

?>