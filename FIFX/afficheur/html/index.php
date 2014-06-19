<?php
$files = array();

$dir = opendir('img/');
while ($file = readdir($dir)) {
    if ($file == '.' || $file == '..' || !strpos($file, '.gif')) {
        continue;
    }

    $files[] = $file;
}
if(isset($_GET['json'])) {
header('Content-type: application/json');
echo json_encode($files);
} else {
?>
<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>FIFX Afficheur</title>
  <meta name="viewport" content="width=device-width">
  <link rel="stylesheet" href="css/fifx.css">
</head>
<body>

  <div id="slide">
  </div>

  <script src="js/jquery.min.js"></script>
  <script src="js/fifx.js"></script>
</body>
</html>
<?php } ?>
