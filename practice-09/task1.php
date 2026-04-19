<?php 
// Commenting in PHP:
/*
Multiple
lines
*/
# Single line comment, like //

$errors = [];
if($_POST) {
    echo "<pre>";
    print_r($_POST); // in JavaScript: console.log()
    echo "</pre>";
    

    $email = trim($_POST['email']); // email: " a@a.com " trim -> "a@a.com"
    if(filter_var($email, FILTER_VALIDATE_EMAIL) === false) {
        $errors["email"] = "The email you entered is not valid";
    }

    $twoWords = trim($_POST['two_words']);
    $words = explode(" ", $twoWords);
    //print_r($words);
    if(count($words) < 2) {
        $errors["two_words"] = "The input cannot consist of less than 2 words";
    }

    $password = trim($_POST['password']);
    if(strlen($password) < 7) {
        $errors["password"] = "Your password must be at least 7 characters.";
    }

    $nonNegativeNumber = trim($_POST['non-negative-number']);
    if(filter_var($nonNegativeNumber, FILTER_VALIDATE_INT) === false) {
        $errors["non-negative-number"] = "This is not a valid number";
    }
    else if($nonNegativeNumber < 0) {
        $errors["non-negative-number"] = "Must not be negative number";
    }

    // Checkbox
    $tickme = $_POST['tickme'] ?? false;
    if($tickme != "on") {
        $errors["tickme"] = "Must be checked";
    }
}

/*if(isset($errors['email'])) {
    echo $errors['email'];
}
else {
    echo "";
}
*/
//$defaultEmail = "asd@elte.hu";


echo ($tickme ?? false) == "on" ? "checked" : ""; // condition ? true : false

if( ($tickme ?? false) == "on" ) {
    echo "checked";
}
else {
    echo "";
}
?>

<?= $errors['email'] ?? $defaultEmail ?? "I cannot fallback to any emails"  ?> 


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Form: </h1>

    <form method="POST" action="task1.php">
        E-mail: <input type="text" name="email" value="<?= $email ?? ""  ?>" />
        <?= $errors['email'] ?? "" ?>
        <br>

        At least two words: <input type="text" name="two_words" value="<?= $twoWords ?? ""  ?>" />
        <?= $errors['two_words'] ?? "" ?>
        <br>

        Password <input type="password" name="password" />
         <?= $errors['password'] ?? "" ?>
        <br>

        Non-negative number <input type="text" name="non-negative-number" value="<?= $nonNegativeNumber ?? ""  ?>" />
        <?= $errors['non-negative-number'] ?? "" ?>
        <br>

        <input type="checkbox" name="tickme" <?= ($tickme ?? false) == "on" ? "checked" : ""  ?> /> Accept the terms & conditions
        <?= $errors['tickme'] ?? "" ?>


        <br>

        <button type="submit">Send form</button>
    </form>

</body>
</html>