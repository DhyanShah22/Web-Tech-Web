<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "mydb";

$conn = new mysqli($servername, $username, $password, $dbname);

if($conn->connect_error){
    die("Cannot connect" . $conn->connect_error);
}

$sql = "SELECT name, type, price FROM dishes ORDER BY price ASC";
$result = $conn->query($sql);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Dish Details</title>
    <style>
        table {
            width: 50%;
            border-collapse: collapse;
            margin: 20px auto;
        }
        th, td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
    <h1 style="text-align: center;">Dish Details Sorted by Price</h1>
    <table>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Price (₹)</th>
        </tr>
        <?php
        if ($result->num_rows > 0) {
            while ($row = $result->fetch_assoc()) {
                echo "<tr>
                        <td>" . htmlspecialchars($row['name']) . "</td>
                        <td>" . htmlspecialchars($row['type']) . "</td>
                        <td>" . htmlspecialchars($row['price']) . "</td>
                      </tr>";
            }
        } else {
            echo "<tr><td colspan='3'>No dishes found</td></tr>";
        }
        $conn->close();
        ?>
    </table>
</body>
</html>