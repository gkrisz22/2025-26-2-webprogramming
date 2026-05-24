<?php
require_once "nations.php";
require_once "videos.php";

// c: handle delete
if (isset($_GET['delete'])) {
    foreach ($videos as $video) {
        if ($video->id === $_GET['delete']) {
            $video->nation = '';
            break;
        }
    }
}

// b: handle assign
if ($_POST) {
    $targetId = $_POST['id']     ?? '';
    $nation   = $_POST['nation'] ?? '';
    foreach ($videos as $video) {
        if ($video->id === $targetId) {
            $video->nation = $nation;
            break;
        }
    }
}

// a + e: split and sort
$noNation  = array_values(array_filter($videos, fn($v) => $v->nation === ''));
$hasNation = array_values(array_filter($videos, fn($v) => $v->nation !== ''));
usort($noNation,  fn($a, $b) => strcmp($a->title,  $b->title));
usort($hasNation, fn($a, $b) => strcmp($a->nation, $b->nation));
?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Task 6.</title><link rel="stylesheet" href="index.css"></head>
<body>
    <h1>6. Nations</h1>
    <div id="main">
        <div id="form">
            <form method="post">
                <!-- d: nations dropdown -->
                <select name="nation">
                    <?php foreach ($nations as $nation): ?>
                        <option value="<?= htmlspecialchars($nation) ?>"><?= htmlspecialchars($nation) ?></option>
                    <?php endforeach; ?>
                </select>
                <!-- videos dropdown -->
                <select name="id">
                    <?php foreach ($videos as $video): ?>
                        <option value="<?= $video->id ?>"><?= htmlspecialchars($video->title) ?></option>
                    <?php endforeach; ?>
                </select>
                <input type="submit">
            </form>
        </div>
        <div id="videos">
            <!-- a: left column — no nation -->
            <div id="left">
                <h2>No nation</h2>
                <?php foreach ($noNation as $video): ?>
                    <div><?= htmlspecialchars($video->title) ?></div>
                <?php endforeach; ?>
            </div>
            <!-- a: right column — has nation, with delete link -->
            <div id="right">
                <h2>Has nation</h2>
                <?php foreach ($hasNation as $video): ?>
                    <div>
                        <a href="?delete=<?= urlencode($video->id) ?>">🚯</a>
                        <?= htmlspecialchars($video->title) ?> | <?= htmlspecialchars($video->nation) ?>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</body>
</html>
