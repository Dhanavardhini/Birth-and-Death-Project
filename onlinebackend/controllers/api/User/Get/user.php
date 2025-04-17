<?php

// Define paths to required files
$modelsPath = '../../../../models/get.php';
$headersPath = '../../../../config/header.php';

// Check if required files exist
if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    respondWithError(500, 'Required files are missing');
}


require_once $modelsPath;
require_once $headersPath;


$data = json_decode(file_get_contents('php://input'));


if (!isset($data->email) || !isset($data->password)) {
    respondWithError(400, 'Email and password are required');
}


$email = $data->email;
$password = $data->password;


$obj = new Get();


$result = $obj->register($email, $password);


if (isset($result['error'])) {
    respondWithError(401, $result['error']);
}


echo json_encode($result);

/**

 *
 * @param int    $statusCode HTTP status code
 * @param string $message    Error message
 */
function respondWithError($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}
?>
