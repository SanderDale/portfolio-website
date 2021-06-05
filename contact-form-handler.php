<?php
    $name = $_POST["name"];
    $visitor_email = $_POST["email"];
    $message = $_POST["message"];

    $email_from = "post@sanderdale.no";

    $email_subject = "Email from Website";

    $email_body = "Name: $name.\n".
                    "Email: $visitor_email.\n".
                    "Message: $message.\n";

    $to = "sanderdale1995@hotmail.com";

    $headers = "From: $email_from \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: contact.html");

?>