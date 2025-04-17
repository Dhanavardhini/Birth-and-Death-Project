<?php
include_once '../../../../config/database.php';

class Post
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
    
   
    public function birthuser($user_name, $email, $password)
    {
        // Hash the password before storing it
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
    
        // Insert query
        $insert = "INSERT INTO user (user_name, email, password) VALUES (?, ?, ?)";
        
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        // Bind parameters (hashed password instead of plain text)
        mysqli_stmt_bind_param($stmt, "sss", $user_name, $email, $hashedPassword);
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "User registered successfully"];
        } else {
            return ["message" => "User registration failed: " . mysqli_error($this->conn)];
        }
    }
    
    // public function deathuser($user_name, $email, $password)
    // {
    //     // Fix: Ensure the number of placeholders matches the number of columns
    //     $insert = "INSERT INTO user(user_name, email, password) VALUES (?, ?, ?)";
        
    //     $stmt = mysqli_prepare($this->conn, $insert);
    
    //     if (!$stmt) {
    //         return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
    //     }
    
    //     mysqli_stmt_bind_param($stmt, "sss", $user_name, $email, $password);
    //     $result = mysqli_stmt_execute($stmt);
    
    //     if ($result) {
    //         return ["message" => "Plan Added successful"];
    //     } else {
    //         return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
    //     }
    // }
    
    public function admin($username,$password)
    {
        $insert = "INSERT INTO admin(username, password) VALUES ( ?, ?)";
        $stmt = mysqli_prepare($this->conn, $insert);
    
        if (!$stmt) {
            return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
        }
    
        mysqli_stmt_bind_param($stmt, "ss", $username,$password);
        $result = mysqli_stmt_execute($stmt);
    
        if ($result) {
            return ["message" => "Plan Added successful"];
        } else {
            return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
        }
    }
 public function birthcertificate($name, $email, $date_of_birth, $place_of_birth, $parents_name)
{
    $status = "pending"; 

    $insert = "INSERT INTO birth (name, email, date_of_birth, place_of_birth, parents_name, status) 
               VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = mysqli_prepare($this->conn, $insert);

    if (!$stmt) {
        return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
    }

    mysqli_stmt_bind_param($stmt, "ssssss", $name, $email, $date_of_birth, $place_of_birth, $parents_name, $status);
    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        return ["message" => "Application submitted successfully", "status" => $status];
    } else {
        return ["message" => "Application submission failed: " . mysqli_error($this->conn)];
    }
}
public function deathcertificate($name,$email, $date_of_death, $place_of_death, $cause_of_death)
{
    $status = "pending"; 
    $insert = "INSERT INTO death (name,email, date_of_death,place_of_death,cause_of_death,status) VALUES (?, ?,?, ?,?,?)";
    $stmt = mysqli_prepare($this->conn, $insert);

    if (!$stmt) {
        return ["message" => "Query preparation error: " . mysqli_error($this->conn)];
    }

    // Correcting type specifiers based on expected data types
    mysqli_stmt_bind_param($stmt, "ssssss", $name,$email, $date_of_death, $place_of_death, $cause_of_death,$status);
    $result = mysqli_stmt_execute($stmt);

    if ($result) {
        return ["message" => "Plan Added successfully"];
    } else {
        return ["message" => "Plan Added failed: " . mysqli_error($this->conn)];
    }
}

public function images($name, $price, $brand, $image)
{
    if (empty($imagePath)) {
        return "File not uploaded.";
    }

    $advertisementQuery = "INSERT INTO image (name, price, brand, image) VALUES (?, ?, ?, ?)";
    $stmtadvertisement = mysqli_prepare($this->conn, $advertisementQuery);
    if (!$stmtadvertisement) {
        return "Failed to prepare SQL statement.";
    }

    mysqli_stmt_bind_param($stmtadvertisement, 'ssss', $name, $price, $brand, $image);
    $advertisementExec = mysqli_stmt_execute($stmtadvertisement);

    if ($advertisementExec) {
        $this->response = "Achievement Added successfully";
    } else {
        $this->response = "Failed to insert data into database.";
    }

    return $this->response;
}


























}
?> 
