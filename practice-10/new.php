<?php 

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
        $books = json_decode(file_get_contents("data.json"), true);

        $books[] = [
            "title" => $title,
            "author" => $author,
            "year" => intval($year), // In JS: Number(year)
            "read" => $read
        ];

        file_put_contents('data.json', json_encode($books, JSON_PRETTY_PRINT));
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
    <title>Add a new book</title>
</head>
<body>
    
    <h1>Add your book here</h1>

    <form action="new.php" method="POST">
        <label>
            Title:
            <input type="text" name="title" value="<?=  $title ?? '' ?>" />
            <?= $errors['title'] ?? '' ?>
        </label>
        <br>
        <label>
            Author:
            <input type="text" name="author" value="<?=  $author ?? '' ?>" />
            <?= $errors['author'] ?? '' ?>
        </label>
        <br>
        <label>
            Year:
            <input type="number" name="year" value="<?=  $year ?? '' ?>" />
            <?= $errors['year'] ?? '' ?>
        </label>
        <br>
        <label>
            <input type="checkbox" name="read" <?=  isset($read) ? "checked" : "" ?> />
            Already read
        </label>
        <br>
        <button type="submit">Add book</button>
    </form>

    <a href="index.php">Back to list</a>
</body>
</html>