<?php
// Start session
session_start();

// Check if session exists
if (isset($_SESSION['name'])) {
    echo "<h2>Welcome back, " . $_SESSION['name'] . "!</h2>";
    echo "<p>Your email: " . $_SESSION['email'] . "</p>";
    echo "<p>Your phone: " . $_SESSION['phone'] . "</p>";
} else {
    echo "<p>No session data found.</p>";
}

// Check if cookies are set
if (isset($_COOKIE['name']) && isset($_COOKIE['email'])) {
    echo "<p>Cookie - Name: " . $_COOKIE['name'] . "</p>";
    echo "<p>Cookie - Email: " . $_COOKIE['email'] . "</p>";
} else {
    echo "<p>No cookies found.</p>";
}
?>
