<?php
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
        echo "<h3>Form submitted successfully!</h3>";
        // Process form (e.g., save to database)
    } else {
        foreach ($errors as $error) {
            echo "<p>Error: $error</p>";
        }
    }
}
?>
