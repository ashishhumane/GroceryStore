<?php
session_start();
if (!isset($_SESSION["user_id"])) {
    header("Location: ../index.html"); // Redirect to login if not logged in
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dashboard</title>
    <link rel="stylesheet" href="../css/dashboard.css">
    <script src="../js/dashboard.js" defer></script>
</head>
<body>
    <div class="sidebar">
        <h2>Dashboard</h2>
        <ul>
            <li><a href="../index.html">🏠 Home</a></li>
            <li><a href="#">👤 Profile</a></li>
            <li><a href="logout.php">🚪 Logout</a></li>
        </ul>
    </div>

    <div class="main-content">
        <div class="header">
            <button id="toggle-btn">☰</button>
            <h1>Welcome, <?php echo $_SESSION["username"]; ?>!</h1>
        </div>
        <div class="content">
            <p>This is your dashboard. Here, you can add widgets, graphs, and data.</p>
        </div>
    </div>
</body>
</html>
