<?php 

session_start();
if(isset($_SESSION["user_id"])) {
    header("location: index.php");
    exit();
}
$username = mb_strtolower($_POST['username'] ?? "");
$password = $_POST["password"] ?? "";

$errors = [];

if($_POST) {
    $users = json_decode(file_get_contents(__DIR__."/data/users.json"), true) ?? [];
    //$existingUser = array_find($users, fn($u) => $u["username"] === $username); // ONLY WORKS FROM PHP 8.4 version
    $found = array_filter($users, fn($u) => $u["username"] === $username);
    $user = count($found) > 0 ? array_values($found)[0] : null;

    if($user === null) {
        $errors["username"] = "User not found";
    }
    else {
        if(!password_verify($password, $user["password"])) {
            $errors["password"] = "Wrong password";
        }
    }

    if(count($errors) === 0) {
        $_SESSION["user_id"] = $user["id"];
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
    <title>Document</title>
</head>
<body>

    <form action="login.php" method="POST">
         Username: <input type="text" name="username" value="<?= $username ?>" />
        <?= $errors["username"] ?? "" ?>
        <br>

        Password: <input type="password" name="password" value="<?= $password ?>" />
        <?= $errors["password"] ?? "" ?>
        <br>

        <button type="submit">Login</button>
    </form>
    
</body>
</html>