<?php

$modelsPath = '../../../../models/put.php';
$headersPath = '../../../../config/header.php';


if (!file_exists($modelsPath) || !file_exists($headersPath)) {
    handleResponse(500, 'Required files are missing');
}

require_once $modelsPath;
require_once $headersPath;


function handleResponse($statusCode, $message) {
    http_response_code($statusCode);
    echo json_encode(['error' => $message]);
    exit();
}


$data = json_decode(file_get_contents('php://input'));


if (!isset($data->id, $data->status)) {
    handleResponse(400, 'ID and status are required');
}

$id = (int)$data->id;
if ($id <= 0) {
    handleResponse(400, 'Invalid ID');
}

$status = trim($data->status);
if (!in_array($status, ['approved', 'canceled'])) {
    handleResponse(400, 'Invalid status value. Allowed values are "approved" or "cancelled".');
}


$obj = new Put();


$result = $obj->updateDeathStatus($id, $status);

if (isset($result['error'])) {
    handleResponse(500, $result['error']);
} else {
    http_response_code(200);
    echo json_encode(['message' => 'Death user status updated successfully']);
}
?>
