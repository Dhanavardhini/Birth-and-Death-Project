<?php
// Allow requests from any origin (Replace * with your frontend domain for security)
header("Access-Control-Allow-Origin: *");

// Allow specific HTTP methods
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

// Allow specific headers
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Define paths to required files
$modelsPath = '../../../../models/post.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist and include them
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleError(500, 'Required files are missing');
}

// Require the necessary files
require_once $modelsPath;
require_once $headersPath;

// Decode the incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Function to handle errors and send response
function handleError($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

// Validate input data
if (empty($data->name) || empty($data->email) || empty($data->date_of_death) || empty($data->place_of_death) || empty($data->cause_of_death)) {
    handleError(400, 'All fields are required.');
}

// Set default status as 'pending'
$status = "pending";

// Create an instance of the Post class
$obj = new Post();

// Insert data
$result = $obj->deathcertificate($data->name, $data->email, $data->date_of_death, $data->place_of_death, $data->cause_of_death, $status);

// Handle errors
if ($result === false) {
    handleError(500, 'Internal server error');
}

// Send success response
echo json_encode(["message" => "Application submitted successfully", "status" => $status]);

?>
