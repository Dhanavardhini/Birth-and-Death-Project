<?php
// echo "test1";
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
// if (empty($data->name) || empty($data->email)) {
//     handleError(400, 'Both name and email are required.');
// }

// Validate email ID format
// if (!filter_var($data->email, FILTER_VALIDATE_EMAIL) || !strpos($data->email, '@gmail.com')) {
//     handleError(400, 'Invalid email format. It should be a valid email address and contain "@gmail.com".');
// }

// Create an instance of the Post class
$obj = new Post();

// Insert achievement data
$result = $obj->admin($data->username, $data->password);

// Handle errors
if ($result === false) {
    handleError(500, 'Internal server error');
}

// Send the result
echo json_encode($result);

?>
