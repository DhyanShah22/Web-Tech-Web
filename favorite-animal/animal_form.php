<?php
session_start();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action"animal_message.php" method="POST">
        <label for="animal">Choose an animal:</label>
        <select id="animal" name="animal" required>
            <option value="Cat">Cat</option>
            <option value="Dog">Dog</option>
        </select>
        <button type="submit">Submit</button>
    </form>

    <?php if (isset($_SESSION['animal'])): ?>
        <p>Your selected animal is: <?php echo $_SESSION['animal'] ?></p>
    <?php endif; ?>

</body>
</html>