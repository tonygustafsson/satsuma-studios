<?php
	if (isset($_POST) && isset($_POST['name']) && isset($_POST['email']) && isset($_POST['message']))
	{
		$to = "info@satsuma.se";
		$name = $_POST['name'];
		$subject = "Message from " . $name;
		$email = $_POST['email'];
		$message = $_POST['message'];
		$url = $_POST['url'];
		$headers .= 'From: ' . $name . ' <' . $email . '>' . "\r\n";
		$headers .= 'Reply-To: ' . $name . ' <' . $email . '>';
		
		if (strlen($url) > 0)
		{
			$error = "Felangivet meddelande.";
		}
		
		if (strlen($name) < 3 || strlen($name) > 80)
		{
			$error = "Felangivet namn.";
		}
		
		if (!filter_var($email, FILTER_VALIDATE_EMAIL))
		{
			$error = "Felangiven e-postadress.";
		}
		
		if (strlen($message) < 3) {
			$error = "Felangivet meddelande.";
		}
		
		if (! isset($error))
		{	
			mail($to, $subject, $message, $headers);

			header('Location: /thanks.html');
		}
	}
?>