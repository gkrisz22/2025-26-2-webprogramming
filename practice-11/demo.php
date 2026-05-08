<?php 

// Sessions 
session_start();

$counter = $_SESSION["counter"] ?? 0;
$counter++;

$_SESSION["counter"] = $counter;

echo $counter . "<br />"; // \n printf("Hello\n");


// Hash
$password = "test123";
$hash = password_hash($password, PASSWORD_DEFAULT);
echo "Password (plain): ". $password. "<br>";
echo "Password hashed: ". $hash. "<br>";

// Verify
// Compare plain password to hashed password


if(password_verify("test1234", $hash)) {
    echo "Correct password";
}
else {
    echo "Incorrect password";
}