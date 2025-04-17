<?php
// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleError(500, 'Required files are missing');
}

require_once $modelsPath;
require_once $headersPath;

// Decode JSON request
$data = json_decode(file_get_contents('php://input'));

// Function to handle errors
function handleError($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

// Validate required fields
if (empty($data->name) || empty($data->email) || empty($data->date_of_birth) || empty($data->place_of_birth) || empty($data->parents_name)) {
    handleError(400, 'All fields are required.');
}

// Set default status as 'pending'
$status = "pending";

// Create an instance of the Post class
$obj = new Post();

// Insert data
$result = $obj->birthcertificate($data->name, $data->email, $data->date_of_birth, $data->place_of_birth, $data->parents_name, $status);

// Handle response
if ($result === false) {
    handleError(500, 'Internal server error');
}

echo json_encode(["message" => "Application submitted successfully", "status" => $status]);

?>
