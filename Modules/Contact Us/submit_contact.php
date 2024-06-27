<?php
include './db_connect.php'; // Direct include since it's in the same directory

// Include PHPMailer classes to the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Manually include PHPMailer files
require '../../PHPMailer-master/src/Exception.php';
require '../../PHPMailer-master/src/PHPMailer.php';
require '../../PHPMailer-master/src/SMTP.php';

function submitContactForm($conn) {
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $phone_number = trim($_POST['phone_number']);
        $topic = trim($_POST['topic']);
        $message = trim($_POST['message']);

        // Check if connection is valid
        if ($conn) {
            $stmt = $conn->prepare("INSERT INTO contact_us (name, email, phone_number, topic, message) VALUES (?, ?, ?, ?, ?)");
            $stmt->bind_param("sssss", $name, $email, $phone_number, $topic, $message);

            if ($stmt->execute()) {
                echo "Thank you for contacting us, $name! Your message has been sent.";

                // Send email after successful database insertion
                $mail = new PHPMailer(true);
                try {
                    $mail->isSMTP();
                    $mail->Host = 'smtp.gmail.com';
                    $mail->SMTPAuth = true;
                    $mail->Username = 'support@privatebroker.com.ph';
                    $mail->Password = 'amdf uekz skdr jxoc'; // The app-specific password here
                    $mail->SMTPSecure = 'tls';
                    $mail->Port = 587;
                
                    $mail->setFrom('support@privatebroker.com.ph', 'Newman Homes');
                    $mail->addAddress('web@privatebroker.com.ph', 'Admin');
                
                    $mail->isHTML(true);
                    $mail->Subject = 'New Contact Form Submission';
                    $mail->Body = "You have received a new message from $name.<br>Email: $email<br>Phone: $phone_number<br>Topic: $topic<br>Message: $message";
                
                    $mail->send();
                    echo ' Please wait 24 hours for the response';
                } catch (Exception $e) {
                    echo 'Email could not be sent. Mailer Error: ', $mail->ErrorInfo;
                }
            } else {
                echo "Error submitting your form: " . $stmt->error;
            }

            $stmt->close();
        } else {
            echo "Database connection is not established.";
        }
    } else {
        echo "Form submission failed, please try again.";
    }

    // Close the database connection if it's open
    if ($conn) {
        $conn->close();
    }
}

// Call the function with the database connection
submitContactForm($conn);
?>
