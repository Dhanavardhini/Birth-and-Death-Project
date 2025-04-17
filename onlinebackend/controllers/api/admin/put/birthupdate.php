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

// Validate required fields
if (!isset($data->id, $data->name, $data->email, $data->date_of_birth, $data->place_of_birth, $data->parents_name, $data->status)) {
    handleResponse(400, 'All fields (id, name, email, date_of_birth, place_of_birth, parents_name, status) are required');
}

// Sanitize and validate ID
$id = (int)$data->id;
if ($id <= 0) {
    handleResponse(400, 'Invalid ID');
}

// Validate email
$email = trim($data->email);
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    handleResponse(400, 'Invalid email format');
}

// Remove spaces from Gmail ID if provided
$cleanedGmail = isset($data->gmailId) ? str_replace(' ', '', $data->gmailId) : null;
if ($cleanedGmail && !filter_var($cleanedGmail, FILTER_VALIDATE_EMAIL)) {
    handleResponse(400, 'Invalid Gmail ID format');
}

// Sanitize status
$status = trim($data->status);

// Create an instance of the Put class
$obj = new Put();

// Call the useredit method
$result = $obj->useredit($id, $data->name, $email, $data->date_of_birth, $data->place_of_birth, $data->parents_name, $status);

// Handle errors
if ($result === false) {
    handleResponse(500, 'Internal server error');
}

// Send the result
echo json_encode($result);

?>