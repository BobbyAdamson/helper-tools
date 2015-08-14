
<!DOCTYPE html>
<html>
<head>

<meta name="viewport" content="width=device-width, initial-scale=1">
<link href="css.css" rel="stylesheet" type="text/css" />
	</head>
	<body>

<form action="<?php $_SERVER['PHP_SELF']; ?>">
	<div class="inner">
		<label>Source URL for your script embed</label>
		<textarea name="code" id="code"></textarea>
		<button type="submit">Submit</button>
		<a href="#" class="closeForm">Close</a>
	</div>
</form>

<?php
$code = '';
if(isset($_GET['code'])) {
	$code = $_GET['code'];
}
if(isset($_POST['code'])) {
	$code = $_POST['code'];
	http_build_query(array_merge($_GET, array('code'=>$_GET['code'])));
}
if($code != '') {
	echo '<script src="' . $code . '"></script>';
}
?>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script src="js.js"></script>
	</body>
</html>