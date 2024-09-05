<?php
if ($_SERVER["REQUEST_METHOD"] == "GET" && !empty($_GET)) {
    // Handle GET request
    $name = htmlspecialchars($_GET['name']);
    $email = htmlspecialchars($_GET['email']);
    echo "<h2>Received via GET Request</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
} elseif ($_SERVER["REQUEST_METHOD"] == "POST" && !empty($_POST)) {
    // Handle POST request
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    echo "<h2>Received via POST Request</h2>";
    echo "<p>Name: $name</p>";
    echo "<p>Email: $email</p>";
} else {
    echo "<p>No data received</p>";
}
?>
