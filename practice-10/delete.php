<?php

$books =  json_decode(file_get_contents('data.json'), true);
$id = $_GET['id'] ?? null;

// localhost:8181/show.php?id=0
// $books[0]

if(!isset($books[$id])) // In localhost:8181/show.php - the ?id= parameter is missing
{
    // 404 - Not found
    header('location: index.php');
    exit();
}

unset($books[$id]);
file_put_contents("data.json", json_encode($books, JSON_PRETTY_PRINT));
header("location: index.php");
exit();