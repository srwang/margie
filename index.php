<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />

<title>Coming Soon...</title>

<link href="http://www.machighway.com/cindexstyle.css" rel="stylesheet" type="text/css">
<META name="description" content="Mac Powered Web Hosting services. Providing the Macintosh community with unbeatable customer service and support since 1997. Host your site, store or blog for as little as $2.95 a month">
<META name="keywords" content="mac web hosting, macintosh web hosting, mac compatible web hosting, mac freindly web hosting, macintosh compatible, mac ecommerce, mac e-commerce, mac email, mac e-mail, mac shopping cart, webmail, ecommerce, e-commerce, shopping cart, webdav, php, perl, macintosh, Mac OS">
<meta name="distribution" content="Global">
<meta name="robots" content="all">
</head>
<body bgcolor="white" text="black">

<?php
function curPageURL() {
 $pageURL = 'http';
 if ($_SERVER["HTTPS"] == "on") {$pageURL .= "s";}
 $pageURL .= "://";
 if ($_SERVER["SERVER_PORT"] != "80") {
  $pageURL .= $_SERVER["SERVER_NAME"].":".$_SERVER["SERVER_PORT"].$_SERVER["REQUEST_URI"];
 } else {
  $pageURL .= $_SERVER["SERVER_NAME"].$_SERVER["REQUEST_URI"];
 }
 return $pageURL;
}
?>

<center>
<br>
<br>
<br>
<h1>Future home of</h1><br> 
<h5><?php
  echo curPageURL();
?></h5>
<br>
<h2>Proudly hosted by
<br>
<a href="http://www.machighway.com" target="_blank">
<img src="http://www.machighway.com/images/logo_big.gif "width="261" height="209" border= "0" align="center"></a>
<br>
<h2>Host your site with Machighway too.<br>
<a href="http://www.machighway.com/hostingplans.php" target="_blank">Click here</a> for details.</h2>
<!--
<img src="http://www.machighway.com/images/powered.jpg "width="210" height="265" border= "0" align="center">
-->
<p>
<p>
<h4>MacHighway is a web hosting service designed by Mac users for Mac users.<br> We understand there is a significant number of Mac users who need quality web hosting.<br> Too many web hosting companies believe the Mac platform is not worthy of support and<br>altogether disregard the Macintosh enthusiast. That's where we come in.<br>
Mac Powered Web Hosting services for the Macintosh community with unbeatable customer service<br> and support since 1997. Host your site, store or blog for as little as $2.49 a month!</h4>

</center>
 
</body> 
 
</html>
