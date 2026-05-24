<?php
require_once 'nations.php';
require '../data/data_array_of_objects.php';

$errors  = [];
$success = false;
$title = $year = $views = $id = $manualid = '';

if ($_POST) {
    $title    = trim($_POST['title'] ?? '');
    $year     = trim($_POST['year']  ?? '');
    $views    = trim($_POST['views'] ?? '');
    $manualid = $_POST['manualid']   ?? '';

    // a: required fields
    if ($title === '') $errors[] = 'Title is required.';
    if ($year  === '') $errors[] = 'Year is required.';
    if ($views === '') $errors[] = 'Views is required.';

    // b: title length
    if (strlen($title) < 5) $errors[] = 'Title must be at least 5 characters.';

    // c: title format
    if (strpos($title, ' - ') === false) $errors[] = 'Title must contain " - ".';

    // d: year integer
    if (filter_var($year, FILTER_VALIDATE_INT) === false) $errors[] = 'Year must be a whole number.';

    // e: views numeric
    if (!is_numeric($views)) $errors[] = 'Views must be a number.';

    // f-i: manual ID
    if ($manualid === 'yes') {
        $id = trim($_POST['id'] ?? '');
        if ($id === '') {
            $errors[] = 'ID is required when entering manually.';
        } else {
            // h: uniqueness
            $existing = array_filter($data, fn($v) => $v->id === $id);
            if (count($existing) > 0) $errors[] = 'A video with this ID already exists.';
            // i: format
            if (!preg_match('/^[0-9a-f]{8}$/', $id)) $errors[] = 'ID must be 8 lowercase hex characters.';
        }
    }

    // k: set success
    if (count($errors) === 0) $success = true;
}
?>
<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><title>Task 5.</title><link rel="stylesheet" href="index.css"></head>
<body>
    <h1>5. New music</h1>
    <div id="main">

        <?php if ($success): ?>
            <div id="success">New song added!</div>
        <?php elseif (!empty($errors)): ?>
            <div id="errors">
                Error!
                <ul>
                    <?php foreach ($errors as $err): ?>
                        <li><?= htmlspecialchars($err) ?></li>
                    <?php endforeach; ?>
                </ul>
            </div>
        <?php endif; ?>

        <form method="post">
            <label>Title        <input name="title" value="<?= htmlspecialchars($title) ?>"></label>
            <label>Release year <input name="year"  value="<?= htmlspecialchars($year)  ?>"></label>
            <label>Views        <input name="views" value="<?= htmlspecialchars($views) ?>"></label>
            <div>
                Manual ID
                <label><input type="radio" name="manualid" value="yes" <?= $manualid === 'yes' ? 'checked' : '' ?>> Yes</label>
                <label><input type="radio" name="manualid" value="no"  <?= $manualid === 'no'  ? 'checked' : '' ?>> No</label>
            </div>
            <label>ID <input name="id" value="<?= htmlspecialchars($id) ?>"></label>
            <input type="submit">
        </form>

    </div>
</body>
</html>
