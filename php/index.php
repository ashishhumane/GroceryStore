<?php
session_start();
require "config.php"; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = trim($_POST["name"]);
    $username = trim($_POST["username"]);
    $email = filter_var($_POST["email"], FILTER_SANITIZE_EMAIL);
    $password = $_POST["password"];
    $confirm_password = $_POST["con-pass"];

    // ✅ 1. Basic Validation
    if (empty($name) || empty($username) || empty($email) || empty($password) || empty($confirm_password)) {
        die("All fields are required!");
    }

    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        die("Invalid email format!");
    }

    if (strlen($password) < 6) {
        die("Password must be at least 6 characters long!");
    }

    if ($password !== $confirm_password) {
        die("Passwords do not match!");
    }

    // ✅ 2. Hash Password for Security
    $hashed_password = password_hash($password, PASSWORD_DEFAULT);

    // ✅ 3. Check if the User Already Exists
    $stmt = $conn->prepare("SELECT id FROM users WHERE email = ? OR username = ?");
    $stmt->bind_param("ss", $email, $username);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        die("User already exists! Try a different email or username.");
    }
    $stmt->close();

    // ✅ 4. Insert New User
    $stmt = $conn->prepare("INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $username, $email, $hashed_password);

    if ($stmt->execute()) {
        echo "Signup successful! <a href='../index.html'>Login here</a>";
    } else {
        echo "Error: " . $conn->error;
    }

    $stmt->close();
    $conn->close();

    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
?>
