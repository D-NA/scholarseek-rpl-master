<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">
  <title>Scholarseek Logo Upload</title>
</head>
<body>
<h1>Logo Upload</h1>
  <?php
  $scan = scandir('uploads');
  foreach($scan as $file)
  {
    if (!is_dir($file))
    {
        echo '<h3>'.$file.'</h3>';
      echo '<img src="uploads/'.$file.'" style=""/><br />';
    }
  }
  ?>
</body>
</html>