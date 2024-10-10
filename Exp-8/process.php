<?php
// Start session at the beginning of the script

// Set session timeout to 10 seconds
ini_set('session.gc_maxlifetime', 10);  // Time for session data to remain valid (in seconds)
ini_set('session.cookie_lifetime', 10); // Time for session cookie to expire in the browser (in seconds)

session_start(); // Start or resume the session

echo "<pre>";
print_r($_SESSION);
echo "</pre>";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST['name']));
    $email = htmlspecialchars(trim($_POST['email']));
    $phone = htmlspecialchars(trim($_POST['phone']));
    $password = htmlspecialchars(trim($_POST['password']));
    $confirmPassword = htmlspecialchars(trim($_POST['confirm-password']));
    $address = htmlspecialchars(trim($_POST['address']));

    // Server-side validation
    $errors = [];

    if (empty($name) || !preg_match("/^[A-Za-z\s]+$/", $name)) {
        $errors[] = "Invalid name.";
    }
    if (empty($email) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $errors[] = "Invalid email.";
    }
    if (empty($phone) || !preg_match("/^\d{10,15}$/", $phone)) {
        $errors[] = "Invalid phone number.";
    }
    if (empty($password) || !preg_match("/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/", $password)) {
        $errors[] = "Invalid password.";
    }
    if ($password !== $confirmPassword) {
        $errors[] = "Passwords do not match.";
    }
    if (empty($address)) {
        $errors[] = "Address cannot be empty.";
    }

    if (empty($errors)) {
        // Form submission success
        echo "<h3>Form submitted successfully!</h3>";

        // Store data in session variables
        $_SESSION['name'] = $name;
        $_SESSION['email'] = $email;
        $_SESSION['phone'] = $phone;

        // Set a cookie for the name and email (expires in 1 hour)
        setcookie("name", $name, time() + 3600, "/"); // 3600 = 1 hour
        setcookie("email", $email, time() + 3600, "/");

        echo "<p>Welcome, " . $_SESSION['name'] . "! We have saved your session and cookies.</p>";

        // Redirect to another page (e.g., welcome.php)
        // header("Location: welcome.php");
        // exit;
    } else {
        // Display errors
        foreach ($errors as $error) {
            echo "<p>Error: $error</p>";
        }
    }
}
?>
