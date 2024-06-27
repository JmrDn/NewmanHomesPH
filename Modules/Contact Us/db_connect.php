<?php
$servername = "localhost:3307";
$username = "root";
$password = ""; // Leave this blank if you haven't set a password
$dbname = "hangseng";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
