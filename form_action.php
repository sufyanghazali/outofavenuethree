<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST['message'];
    $firstName = $_POST['firstName'];
    $lastName = $_POST['lastName'];
    $email = $_POST['email'];

    $name = $firstName . ' ' . $lastName;

    $to = 'hello@outofavenuethree.com';
    $subject = 'New Contact Form Submission';
    $body = "Name: $name\nEmail: $email\nMessage: $message";

    if (mail($to, $subject, $body)) {
        echo 'Email sent successfully!';
    } else {
        echo 'Error sending email.';
    }
} else {
    echo 'Invalid request.';
}
?>
