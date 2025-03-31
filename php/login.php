<?php
session_start();
require "config.php"; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = trim($_POST["username"]); 
    $password = $_POST["password"];

    if (empty($username) || empty($password)) {
        die("❌ Please fill in both fields.");
    }

    // Check if user exists
    $stmt = $conn->prepare("SELECT id, password FROM users WHERE username = ?");
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($user_id, $hashed_password);
        $stmt->fetch();

        // Verify password
        if (password_verify($password, $hashed_password)) {
            session_regenerate_id(true); // Prevent session fixation
            $_SESSION["user_id"] = $user_id;
            $_SESSION["username"] = $username;
            header("Location: dashboard.php"); // Redirect after login
            exit();
        }
    }

    // Generic error message for both cases
    echo "❌ Invalid username or password!";
    $stmt->close();
}
?>