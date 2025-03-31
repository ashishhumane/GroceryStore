<?php
include 'config.php'; // Include database connection

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['textarea'];

    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        echo "All fields are required!";
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO query (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    if ($stmt->execute()) {
        echo "Form submitted successfully!";
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request!";
}
?>
