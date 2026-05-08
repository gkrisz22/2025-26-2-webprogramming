<?php

require_once("Storage.php");
$storage = new Storage(new JsonIO("data.json"));
$id = $_GET['id'] ?? null;
$storage->delete($id);

header("location: index.php");
exit();