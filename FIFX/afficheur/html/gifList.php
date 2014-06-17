<?php
$files = array();

$dir = opendir('img/');
while ($file = readdir($dir)) {
    if ($file == '.' || $file == '..') {
        continue;
    }

    $files[] = $file;
}

header('Content-type: application/json');
echo json_encode($files);
