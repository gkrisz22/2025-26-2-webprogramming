<?php 

$numbers = [2, 3, -5, 6, 8];

// 1. Filter the even numbers: array_filter



function isEven ($x) {
    return $x % 2 == 0;
}

$evenA = array_filter($numbers, function ($x) {
    return $x % 2  == 0;
});
$evenA2 = array_filter($numbers, "isEven");
$evenA3 = array_filter($numbers, fn($x) => $x % 2 == 0);


echo "<pre>";
print_r($numbers);
echo "</pre>";

echo "<pre>";
print_r($evenA);
echo "</pre>";

echo "<pre>";
print_r($evenA2);
echo "</pre>";

// "1" == 1 -> true      "1" === 1 -> false

if("1" == 1) { // Checks value
    echo "Two equal is true <br />";
}

if("1" === 1) { // Checks for type too!
    echo "True";
}
else {
    echo "False, because I've used 3 = ";
}

// Task 2: Filter all the negative numbers

$negatives = array_filter($numbers, function ($x) {
    return $x < 0;
});

echo "<br /><pre>";
print_r($negatives);
echo "</pre>";

// Task 3: Square all the numbers into an array
$squaredNumbers = array_map(fn($x) => $x * $x , $numbers);

echo "<br /><pre>";
print_r($squaredNumbers);
echo "</pre>";

// Task 4:

echo "<br /> Max & sum <br /> ";
echo max($numbers);
echo "<br>Sum is: ";
echo array_sum($numbers);


// Task 5: Write Hello world with increasing font size (8px - 20px)
for($i = 8; $i < 20; $i++) {
    echo "<br> <p style='font-size: {$i}px'>Hello world</p>";
}

//<p style="font-size: 8px">Hello world</p>