<?php
include_once '../../../../config/database.php';

class Get
{ 
    public $conn;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }

    // Function to handle errors and send response
    private function handleResponse($statusCode, $message) 
    {
        http_response_code($statusCode);
        echo json_encode(['error' => $message]);
        exit();
    }

    

    public function register($email, $password)  
    {
        // Query to fetch the hashed password for the given email
        $query = "SELECT password FROM user WHERE email = ?"; 
    
        $stmt = mysqli_prepare($this->conn, $query);
    
        if (!$stmt) {
            return ['error' => 'Failed to prepare statement'];
        }
    
        mysqli_stmt_bind_param($stmt, 's', $email);
        mysqli_stmt_execute($stmt);
    
        if (mysqli_stmt_errno($stmt)) {
            return ['error' => 'Internal server error'];
        }
    
        $result = mysqli_stmt_get_result($stmt);
    
        if ($row = mysqli_fetch_assoc($result)) {
            // Verify the entered password with the hashed password
            if (password_verify($password, $row['password'])) {
                mysqli_free_result($result);
                mysqli_stmt_close($stmt);
                return ['success' => 'Login successful'];
            }
        }
    
        // If email not found or password is incorrect
        mysqli_stmt_close($stmt);
        return ['error' => 'Invalid email or password'];
    }
    

   
    public function birth() 
    {
        
        $query = "SELECT * FROM birth";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        
       
        // mysqli_stmt_bind_param($stmt, 'i', $id);
        
     
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
    
        
        $result = mysqli_stmt_get_result($stmt);
    
        // Process the result
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    }
    
    public function death() 
    {
        
        $query = "SELECT * FROM death";
        
     
        $stmt = mysqli_prepare($this->conn, $query);
        
        if (!$stmt) {
            $this->handleResponse(500, 'Failed to prepare statement');
            return;
        }
        
       
        // mysqli_stmt_bind_param($stmt, 'i', $id);
        
     
        mysqli_stmt_execute($stmt);
        
        if (mysqli_stmt_errno($stmt)) {
            $this->handleResponse(500, 'Internal server error');
            return;
        }
    
        
        $result = mysqli_stmt_get_result($stmt);
    
        
        if (mysqli_num_rows($result) > 0) {
            $achievementContent = mysqli_fetch_all($result, MYSQLI_ASSOC);
            mysqli_free_result($result);
            mysqli_stmt_close($stmt);
            return $achievementContent;
        } else {
            mysqli_stmt_close($stmt);
            return ['error' => 'No Details Found'];
        }
    }
    
    public function getdeathEmail($email) 
{
    $query = "SELECT * FROM death WHERE email = ?";
    $stmt = mysqli_prepare($this->conn, $query);

    if (!$stmt) {
        return ['error' => 'Failed to prepare statement'];
    }

    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);

    if (mysqli_stmt_errno($stmt)) {
        return ['error' => 'Internal server error'];
    }

    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        $userDetails = mysqli_fetch_assoc($result);
        mysqli_free_result($result);
        mysqli_stmt_close($stmt);
        return $userDetails;
    } else {
        mysqli_stmt_close($stmt);
        return ['error' => 'No user found with this email'];
    }
}

public function getbirthEmail($email) 
{
    $query = "SELECT * FROM birth WHERE email = ?";
    $stmt = mysqli_prepare($this->conn, $query);

    if (!$stmt) {
        return ['error' => 'Failed to prepare statement'];
    }

    mysqli_stmt_bind_param($stmt, "s", $email);
    mysqli_stmt_execute($stmt);

    if (mysqli_stmt_errno($stmt)) {
        return ['error' => 'Internal server error'];
    }

    $result = mysqli_stmt_get_result($stmt);

    if (mysqli_num_rows($result) > 0) {
        $userDetails = mysqli_fetch_assoc($result);
        mysqli_free_result($result);
        mysqli_stmt_close($stmt);
        return $userDetails;
    } else {
        mysqli_stmt_close($stmt);
        return ['error' => 'No user found with this email'];
    }
}










  
    

}
    
?>

