<?php 

echo "Hello World!<br />"; // \n = <br />

$x = 5;
echo $x; // 5
echo "<br />";
echo($x); // 5

echo "<br />";
print $x; // 5
print($x."<br />"); // In JS: console.log(x + "<br />); // IN JS we are using '+' for concatenation, meanwhile in PHP we use '.'

$y = 10;
echo "The value of y ".$y.". ok <br>"; // in: console.log(`${y}`);
echo 'I am a <strong>string</strong><br /><br />';

// Arrays
$a = [1, 2, 3, 4, 5, 6]; // length of Array: count($a);
echo "<pre>";
print_r($a);
echo "</pre>";
echo $a[0]. "<br />";

// Loops in PHP
for($i = 0; $i < count($a); $i++) {
    echo "This is the ". $i. "-th element: ".$a[$i] . "<br />";
}

foreach($a as $item) { // In traditional for loop, $item = $a[$i]
    echo "This is: ".$item . "<br />";
}

foreach($a as $index => $value) { 
    echo "This is the ". $index. "-th element: ".$value . "<br />";
}

$dict = [
    "first" => "Első",
    "0" => 1
];

// Associative Array
$car = [
    "year" => 2026,
    "model" => "Tesla",
    "broken" => false
];

// In JS: [1, 2, 3].join(",") -> "1,2,3"
echo implode(", ", $a);

// In JS: "1,2,3".split(",") -> [1, 2, 3]
echo "<pre>";
print_r(explode(", ", "1, 2, 3, 4, 5, 6"));
echo "</pre>";

?>