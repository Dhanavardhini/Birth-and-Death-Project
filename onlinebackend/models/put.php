<?php
include_once '../../../../config/database.php';

class Put
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

    public function useredit($id, $name, $email, $date_of_birth, $place_of_birth, $parents_name, $status)
    {
        $id = (int)$id;
    
        if (!$this->conn) {
            return ["error" => "Database connection error: " . mysqli_connect_error()];
        }
    
        // Check if user exists
        $checkUserQuery = "SELECT * FROM birth WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        
        if (!$checkUserStmt) {
            return ["error" => "Query preparation failed: " . mysqli_error($this->conn)];
        }
    
        mysqli_stmt_bind_param($checkUserStmt, "i", $id);
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        if (mysqli_num_rows($checkUserResult) == 1) {
            // Corrected UPDATE query with all fields
            $updateQuery = "UPDATE birth SET name = ?, email = ?, date_of_birth = ?, place_of_birth = ?, parents_name = ?, status = ? WHERE id = ?";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
            
            if (!$updateStmt) {
                return ["error" => "Update query preparation failed: " . mysqli_error($this->conn)];
            }
    
            error_log("Updating ID: $id"); // Debugging
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "ssssssi",  
                $name,
                $email,
                $date_of_birth,
                $place_of_birth,
                $parents_name,
                $status,
                $id 
            );
    
            if (!mysqli_stmt_execute($updateStmt)) {
                return ["error" => "Query failed: " . mysqli_error($this->conn)];
            }
    
            http_response_code(200);
            return ["message" => "User details updated successfully"];
        } else {
            http_response_code(404);
            return ["error" => "User not found"];
        }
    }

    public function userdeathedit($id, $name, $email, $cause_of_death, $date_of_death, $place_of_death, $status)
    {
        $id = (int)$id;
    
        if (!$this->conn) {
            die(json_encode(["error" => "Database connection error: " . mysqli_connect_error()]));
        }
    
        $checkUserQuery = "SELECT * FROM death WHERE id = ?";
        $checkUserStmt = mysqli_prepare($this->conn, $checkUserQuery);
        if (!$checkUserStmt) {
            die(json_encode(["error" => "Query preparation failed: " . mysqli_error($this->conn)]));
        }
    
        mysqli_stmt_bind_param($checkUserStmt, "i", $id);
        mysqli_stmt_execute($checkUserStmt);
        $checkUserResult = mysqli_stmt_get_result($checkUserStmt);
    
        if (mysqli_num_rows($checkUserResult) == 1) {
            // Corrected UPDATE query with WHERE clause
            $updateQuery = "UPDATE death SET name = ?, email = ?, cause_of_death = ?, date_of_death = ?, place_of_death = ?, status = ? WHERE id = ?";
            $updateStmt = mysqli_prepare($this->conn, $updateQuery);
            if (!$updateStmt) {
                die(json_encode(["error" => "Update query preparation failed: " . mysqli_error($this->conn)]));
            }
    
            error_log("Updating ID: $id"); // Debugging
    
            mysqli_stmt_bind_param(
                $updateStmt,
                "ssssssi",  
                $name,
                $email,
                $cause_of_death,
                $date_of_death,
                $place_of_death,
                $status,
                $id
            );
    
            if (!mysqli_stmt_execute($updateStmt)) {
                die(json_encode(["error" => "Query failed: " . mysqli_error($this->conn)]));
            }
    
            http_response_code(200);
            return ["message" => "User details updated successfully"];
        } else {
            http_response_code(404);
            return ["error" => "User not found"];
        }
    }

    public function updateBirthStatus($id, $status) {
        $query = "UPDATE birth SET status = ? WHERE id = ?";
        $stmt = mysqli_prepare($this->conn, $query);
        if (!$stmt) {
            return ["error" => "Query preparation failed: " . mysqli_error($this->conn)];
        }
        mysqli_stmt_bind_param($stmt, "si", $status, $id);
        if (!mysqli_stmt_execute($stmt)) {
            return ["error" => "Query execution failed: " . mysqli_error($this->conn)];
        }
        return ["message" => "Birth user status updated successfully"];
    }

    public function updateDeathStatus($id, $status) {
        $query = "UPDATE death SET status = ? WHERE id = ?";
        $stmt = mysqli_prepare($this->conn, $query);
        if (!$stmt) {
            return ["error" => "Query preparation failed: " . mysqli_error($this->conn)];
        }
        mysqli_stmt_bind_param($stmt, "si", $status, $id);
        if (!mysqli_stmt_execute($stmt)) {
            return ["error" => "Query execution failed: " . mysqli_error($this->conn)];
        }
        return ["message" => "Death user status updated successfully"];
    }

    

     
}
?>