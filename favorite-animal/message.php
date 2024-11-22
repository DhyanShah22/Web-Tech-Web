<?php
if (isset($_COOKIE['animal'])) {
    $animal = $_COOKIE['animal'];
} else {
    header("Location: form_animal.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animal Message</title>
</head>
<body>
    <h1>Your Favorite Animal</h1>
    <p>Your favorite animal is <strong><?= htmlspecialchars($animal) ?></strong>.</p>

    <?php if ($animal === 'Cat'): ?>
        <p>Cats are independent and curious creatures. You must be a calm and intelligent person!</p>
    <?php elseif ($animal === 'Dog'): ?>
        <p>Dogs are loyal and friendly. You must love making new friends!</p>
    <?php elseif ($animal === 'Elephant'): ?>
        <p>Elephants are wise and powerful. You must have a strong and caring nature!</p>
    <?php elseif ($animal === 'Tiger'): ?>
        <p>Tigers are fierce and confident. You must be bold and fearless!</p>
    <?php endif; ?>

    <a href="form_animal.php">Go Back</a>
</body>
</html>
