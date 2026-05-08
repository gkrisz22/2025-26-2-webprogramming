<?php 
//$books =  json_decode(file_get_contents('data.json'), true);
require_once("Storage.php");
$storage = new Storage(new JsonIO("data.json"));
$id = $_GET['id'] ?? null;

$book = $storage->findById($id);

if(!$book) // In localhost:8181/show.php - the ?id= parameter is missing
{
    // 404 - Not found
    header('location: index.php');
    exit();
}



?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>
        <?= $book["title"] ?>
    </h1>
    <p><strong>Author:</strong> <?= $book["author"] ?> </p>
    <p><strong>Year:</strong> <?= $book["year"] ?> </p>

    <hr>
    <a href="edit.php?id=<?= $id ?>">Edit</a>
    <a href="delete.php?id=<?= $id ?>">Delete</a>
    <a href="index.php">Back to list</a>
</body>
</html>