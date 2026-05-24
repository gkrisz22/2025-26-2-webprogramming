<?php
require '../data/data_array_of_objects.php';

function getPopularityClass($views) {
    if ($views >= 100) return 'very-popular';
    if ($views >= 10)  return 'slightly-popular';
    return 'partially-popular';
}

usort($data, fn($a, $b) => $b->views - $a->views);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Task 4.</title>
    <link rel="stylesheet" href="index.css" />
</head>
<body>
    <h1>4. Videos</h1>
    <div id="main">
        <?php foreach ($data as $video): ?>
            <a class="card <?= getPopularityClass($video->views) ?>"
               href="https://www.youtube.com/watch?v=<?= $video->yt ?>"
               target="_blank">
                <img src="img/<?= $video->id ?>.jpg"
                     alt="<?= htmlspecialchars($video->title) ?>">
                <h2><?= htmlspecialchars($video->title) ?></h2>
                <span class="year"><?= $video->year ?></span>
                <span class="views"><?= $video->views ?> million</span>
            </a>
        <?php endforeach; ?>
    </div>
</body>
</html>
