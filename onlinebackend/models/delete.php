<?php
include_once '../../../../config/database.php';

class Delete
{
    public $conn;
    public $response;

    function __construct()
    {
        $db = new Database();
        $this->conn = $db->connect();
    }
 
    public function birth($id)
    {
        $deleteQuery = "DELETE FROM birth WHERE id=?";    
        $stmt = mysqli_prepare($this->conn, $deleteQuery);
        mysqli_stmt_bind_param($stmt, 'i', $id);
        mysqli_stmt_execute($stmt);
         
        if (mysqli_stmt_affected_rows($stmt) > 0) {
            return ['message' => 'success'];
        } else {
            return ['message' => 'not success'];
        }
    }
    public function death($id)
    {
        $deleteQuery = "DELETE FROM death WHERE id=?";    
        $stmt = mysqli_prepare($this->conn, $deleteQuery);
        mysqli_stmt_bind_param($stmt, 'i', $id);
        mysqli_stmt_execute($stmt);
         
        if (mysqli_stmt_affected_rows($stmt) > 0) {
            return ['message' => 'success'];
        } else {
            return ['message' => 'not success'];
        }
    }
   
    

}
?>