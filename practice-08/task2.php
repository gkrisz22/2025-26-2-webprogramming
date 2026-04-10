<?php 
define('APPLE', 1);

//echo APPLE;

$errors = [];
if($_GET) {
    //print_r($_GET);
    $a = $_GET["a"];
    $b = $_GET['b'];


    if(filter_var($a, FILTER_VALIDATE_FLOAT) === false) {
        $errors["a"] = "a must be a number!";
    }
    if(filter_var($b, FILTER_VALIDATE_FLOAT) === false) {
        $errors["b"] = "b must be a number!";
    }
    if($b == 0) {
        $errors["b"] = "b cannot be 0!";
    }

    /*echo "<br> a = ".$a; // IN JS: "a = " + a
    echo "<br> b = ".$b;

    if(filter_var($a, FILTER_VALIDATE_FLOAT) === false) {
        echo "a is not a valid number<br>";
        exit("a had validation errors");
    }
    if(filter_var($b, FILTER_VALIDATE_FLOAT) === false) {
        echo "b is not a valid number<br>";
        exit("b had validation errors");
    }

    if($b == 0) {
        echo "b is 0<br>";
        exit("b 0");
    }

    echo "<br> <strong>Result is: ". $a / $b . "</strong>";*/

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
   
    <form method="GET" action="task2.php"> <!-- GET Request -->
        a = <input type="text" name="a" />
        <?= $errors["a"] ?? "" ?>
        <br>
        b = <input type="text" name="b" />
        <?php echo $errors["b"] ?? "" ?>
        <br>
        <button type="submit">Divide</button>
    </form>

    <?php 
    if($a && $b && count($errors) === 0) {
        echo "<p> ". $a / $b ."</p>";
    }
    ?>
</body>
</html>

<!--
http://127.0.0.1:8080/task2.php    ?a=8&b=2 - GET query: a=8, b=2
-->