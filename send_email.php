<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);
    $subscribe = isset($_POST['subscribe']) ? 'Sí' : 'No';

    $mail = new PHPMailer(true);
    try {
        // Configuración del servidor SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com';  // Ajusta el host SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'user@gmail.com';  // Tu correo electrónico
        $mail->Password = 'password';  // Tu contraseña de aplicación de Gmail
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Remitente y destinatario
        $mail->setFrom($email, $name);
        $mail->addAddress('user@gmail.com');  // Destinatario

        // Contenido del correo
        $mail->isHTML(false);
        $mail->Subject = "Nuevo mensaje de $name";
        $mail->Body    = "Nombre: $name\nEmail: $email\nMensaje: $message\nSuscripción: $subscribe\n";

        $mail->send();
        echo "<script>window.location.href = 'contact.html';</script>";
    } catch (Exception $e) {
        echo "Hubo un error enviando el correo: {$mail->ErrorInfo}";
    }
} else {
    echo "Método de solicitud no válido.";
}
?>