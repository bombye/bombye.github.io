<?php
include("../res/x5engine.php");
$nameList = array("kdc","m3e","dsv","w48","dkt","vgn","asp","58l","6at","m7y");
$charList = array("S","T","3","X","N","7","K","G","N","E");
$cpt = new X5Captcha($nameList, $charList);
//Check Captcha
if ($_GET["action"] == "check")
	echo $cpt->check($_GET["code"], $_GET["ans"]);
//Show Captcha chars
else if ($_GET["action"] == "show")
	echo $cpt->show($_GET['code']);
// End of file x5captcha.php
