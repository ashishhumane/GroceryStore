<?php
$servername = "localhost";
$username = "root"; 
$password = ""; 
$dbname = "vegetable_vendor_db"; // Make sure this matches your database name

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Database connection failed: " . $conn->connect_error);
} else {
    echo "Database connected successfully!";
}
?>

