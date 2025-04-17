<?php
// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

// Function to handle errors and send response
function handleError($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

// Check if required files exist and include them
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleError(500, 'Required files are missing');
}

// Require the necessary files
require_once $modelsPath;
require_once $headersPath;

// Decode the incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Validate required fields
if (!isset($data->user_name) || !isset($data->email) || !isset($data->password)) {
    handleError(400, 'Missing required fields');
}

// Create Post object
$obj = new Post();

// Insert user data
$result = $obj->birthuser($data->user_name, $data->email, $data->password);

// Handle errors
if ($result === false) {
    handleError(500, 'Internal server error');
}

// Send success response
echo json_encode($result);
?>
