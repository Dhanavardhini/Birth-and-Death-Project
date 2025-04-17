<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Payment Status</title>
    <style>
        body {
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .main-wrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: transparent;
            border-radius: 5px;
            border: 2px solid #757575;
            box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
            height: 300px;
            width: 600px;
            padding: 2%;
        }
        .main-wrapper h2 {
            text-transform: capitalize;
            font-size: 1.3rem;
        }
        .main-wrapper span {
            color: green;
        }
    </style>
</head>
<body>

<?php
include_once '../config/database.php';
include_once '../config/header.php';

$db = new Database();
$conn = $db->connect();

include 'Instamojo.php';
$api = new Instamojo\Instamojo('6dc0f2a9c9d291c933a40809702f0f4c', '4552ad7a291ec759f94e59554a4c8619', 'https://www.instamojo.com/api/1.1/');

$id = $_GET['payment_request_id'];

try {
    $response = $api->paymentRequestStatus($id);
} catch (Exception $e) {
    print('Error: ' . $e->getMessage());
}

if ($response['status'] == "Completed") {
    // // Ensure $user_id is properly set with the email or identifier for the user
    // $user_id = mysqli_real_escape_string($conn, $_SESSION['email']); // Adjust this based on your session or authentication logic
    
    // // Update plan_category in the database
    // $query = "UPDATE student SET plan_category='premium' WHERE email='$user_id'";
    // $result = mysqli_query($conn, $query);

    if (!$result) {
        echo "<div class='main-wrapper'>
            <h2>Error updating plan category: " . mysqli_error($conn) . "</h2>
        </div>";
    } else {
        echo "<div class='main-wrapper'>
            <img src='./Loading.gif' width='25%' />
            <h2>
                <span>Payment success</span>, will redirect in 5 seconds, please wait.
            </h2>
        </div>";
        header("refresh:5;URL=https://nursingupdate.in");
        exit; // Ensure no further output interferes with header redirection
    }
} else {
    echo "<div class='main-wrapper'>
        <h2>Payment not completed or failed.</h2>
    </div>";
}

?>

</body>
</html>
