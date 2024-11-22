<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['animal'])) {
    setcookie('animal', $_POST['animal'], time() + 3600, '/');
    header('Location: message.php');
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Favorite Animal</title>
</head>
<body>
    <h1>Select Your Favorite Animal</h1>
    <form action="animal_form.php" method="POST">
        <label for="animal">Choose an animal:</label>
        <select name="animal" id="animal" required>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
            <option value="Elephant">Elephant</option>
            <option value="Tiger">Tiger</option>
        </select>
        <button type="submit">Submit</button>
    </form>

    <?php if (isset($_COOKIE['animal'])): ?>
        <p>Your previously selected favorite animal is: <strong><?= htmlspecialchars($_COOKIE['animal']) ?></strong>.</p>
    <?php endif; ?>
</body>
</html>
