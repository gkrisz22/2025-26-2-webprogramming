<?php
/*
$books = [
    ["title" => "Pride and Prejudice", "author" => "Jane Asten", "year" => 1813],
    ["title" => "To Kill a Mockingbird", "author" => "Harper Lee", "year" => 1960]
];*/


$books =  json_decode(file_get_contents('data.json'), true);

/*
data.json:

[
    {
        "title": "Pride and Prejudice",
        "author": "Jane Asten",
        "year": 1813
    },
    {
        "title": "To Kill a Mockingbird",
        "author": "Harper Lee",
        "year": 1960

    }
]

*/

/*
<?= $myVariable ?>

<?php
echo $myVariable;
?>
*/

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Wishlist</title>
</head>
<body>
    <h1>Book Wishlist</h1>
    <ul>
        <?php foreach($books as $id => $book): ?>
        <li>
            <a href="show.php?id=<?= $id ?>">
                <?= $book["title"]  ?> - <?= $book["author"] ?> (<?= $book['year'] ?>)
            </a>
        </li>
        <?php endforeach; ?>
    </ul>
</body>
</html>