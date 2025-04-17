<?php

// Define file paths
$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(500, 'Required files are missing');
}

// Include necessary files
require_once $modelsPath;
require_once $headersPath;

// Function to handle errors and send response
function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}

// Decode incoming JSON data
$data = json_decode(file_get_contents('php://input'));

// Debugging log (optional)
error_log(json_encode($data));

if (!$data) {
    handleResponse(400, 'Invalid JSON data');
}

// Validate required fields
if (!isset($data->id, $data->name, $data->email, $data->cause_of_death, $data->date_of_death, $data->place_of_death, $data->status)) {
    handleResponse(400, 'All fields (id, name, email, cause_of_death, date_of_death, place_of_death, status) are required');
}

// Sanitize and validate ID
$id = (int)$data->id;
if ($id <= 0) {
    handleResponse(400, 'Invalid ID');
}

// Validate email format
if (!filter_var($data->email, FILTER_VALIDATE_EMAIL)) {
    handleResponse(400, 'Invalid email format');
}

// Create an instance of Put class
$obj = new Put();

// Call the userdeathedit method with all required parameters
$result = $obj->userdeathedit($id, $data->name, $data->email, $data->cause_of_death, $data->date_of_death, $data->place_of_death, $data->status);

// Handle errors
if ($result === false) {
    handleResponse(500, 'Internal server error');
}

// Send the result
echo json_encode($result);

?>