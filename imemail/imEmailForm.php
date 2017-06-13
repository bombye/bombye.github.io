<?php
if(substr(basename($_SERVER['PHP_SELF']), 0, 11) == "imEmailForm") {
	include '../res/x5engine.php';
	$form = new ImForm();
	$form->setField('dein Name', $_POST['imObjectForm_15_1'], '', false);
	$form->setField('deine Emailadresse', $_POST['imObjectForm_15_2'], '', false);
	$form->setField('Projektname', $_POST['imObjectForm_15_3'], '', false);
	$form->setField('Telefon', $_POST['imObjectForm_15_4'], '', false);
	$form->setField('PLZ', $_POST['imObjectForm_15_5'], '', false);
	$form->setField('Ort', $_POST['imObjectForm_15_6'], '', false);
	$form->setField('Größe der Fläche', $_POST['imObjectForm_15_7'], '', false);
	$form->setField('Projektdetails', $_POST['imObjectForm_15_8'], '', false);
	$fileResult = $form->setFile('dein Anhang', $_FILES['imObjectForm_15_9'], $imSettings['general']['public_folder'], '', '');
	if ($fileResult == -1) { die(imPrintError('Cannot send file: dein Anhang')); }
	if ($fileResult < -1) { die(imPrintError('"dein Anhang" falsches Format.')); }

	if(@$_POST['action'] != 'check_answer') {
		if(!isset($_POST['imJsCheck']) || $_POST['imJsCheck'] != 'jsactive' || (isset($_POST['imSpProt']) && $_POST['imSpProt'] != ""))
			die(imPrintJsError());
		$form->mailToOwner('anfrage@bombye.de', 'anfrage@bombye.de', '', '', false);
		$form->mailToCustomer('anfrage@bombye.de', $_POST['imObjectForm_15_2'], '', 'Vielen Dank für Ihre Anfrage!
Ich werde mich in kürze bei Ihnen melden. Bitte 
haben Sie noch ein bisschen Geduld!
Viele bunte Grüße,
Matthias Furch', false);
		@header('Location: ../contact-bestaetigung.html');
		exit();
	} else {
		echo $form->checkAnswer(@$_POST['id'], @$_POST['answer']) ? 1 : 0;
	}
}

// End of file