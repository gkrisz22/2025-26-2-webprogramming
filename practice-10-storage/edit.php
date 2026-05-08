<?php 

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



$errors = [];

if($_POST) {
    $title = trim($_POST["title"]);
    if($title == '') {
        $errors["title"] = "Title is required";
    }

    $author = trim($_POST["author"]);
    if($author == '') {
        $errors["author"] = "Author is required";
    }

    $year = trim($_POST["year"]);
    if(filter_var($year, FILTER_VALIDATE_INT) == false || $year < 1000 || $year > 2026) {
        $errors["year"] = "Year must be an integer AND it should be between 1000 and 2026";
    }

    $read = isset($_POST['read']);

    if(count($errors) == 0) {
        //$books = json_decode(file_get_contents("data.json"), true);

        $storage = new Storage(new JsonIO("data.json"));
        $storage->update($id ,[
            "title" => $title,
            "author" => $author,
            "year" => intval($year), // In JS: Number(year)
            "read" => $read
        ]);

        header("location: index.php");
        exit();
    }


}

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit book: <?= $book["title"] ?></title>
</head>
<body>
    
    <h1>Edit your book here</h1>

    <form action="edit.php?id=<?= $id ?>" method="POST">
        <label>
            Title:
            <input type="text" name="title" value="<?=  $title ?? $book["title"] ?>" />
            <?= $errors['title'] ?? '' ?>
        </label>
        <br>
        <label>
            Author:
            <input type="text" name="author" value="<?=  $author ?? $book["author"] ?>" />
            <?= $errors['author'] ?? '' ?>
        </label>
        <br>
        <label>
            Year:
            <input type="number" name="year" value="<?=  $year ?? $book["year"] ?>" />
            <?= $errors['year'] ?? '' ?>
        </label>
        <br>
        <label>
            <input type="checkbox" name="read" 
                <?=  isset($read) ? ($read === true ? 'checked' : '') : ($book['read'] ? 'checked' : '') ?> 
            />
            Already read
        </label>
        <br>
        <button type="submit">Edit book</button>
    </form>

    <a href="index.php">Back to list</a>
</body>
</html>