<?php
// Include your database connection script
include '../../Contact Us/db_connect.php';

// Include PHPMailer classes to the global namespace
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// Manually include PHPMailer files
require  '../../../PHPMailer-master/src/Exception.php';
require  '../../../PHPMailer-master/src/PHPMailer.php';
require  '../../../PHPMailer-master/src/SMTP.php';

// Check if the form was submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Capture form data and sanitize it
    $name = $conn->real_escape_string($_POST['name']);
    $phone_number = $conn->real_escape_string($_POST['phone_number']);
    $email = $conn->real_escape_string($_POST['email']);
    $message = $conn->real_escape_string($_POST['message']);
    $property_name = $conn->real_escape_string($_POST['property_name']); // Capture property name dynamically

    // Prepare the SQL statement to avoid SQL injection
    $sql = "INSERT INTO property_inquiries (property_name, name, phone_number, email, message) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssss", $property_name, $name, $phone_number, $email, $message);

    // Execute the statement and check if successful
    if ($stmt->execute()) {
        echo "Thank you for your inquiry, we will get back to you soon!";
        
        // Send email after successful database insertion
        $mail = new PHPMailer(true);
        try {
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';
            $mail->SMTPAuth = true;
            $mail->Username = 'support@privatebroker.com.ph'; // Use your real email
            $mail->Password = 'amdf uekz skdr jxoc'; // Use your real password
            $mail->SMTPSecure = 'tls';
            $mail->Port = 587;
        
            $mail->setFrom('support@privatebroker.com.ph', 'Newman Homes');
            $mail->addAddress('web@privatebroker.com.ph', 'Admin'); // Update recipient
        
            $mail->isHTML(true);
            $mail->Subject = 'New Property Inquiry Submission';
            $mail->Body    = "You have received a new property inquiry for <b>$property_name</b> from $name.<br>Email: $email<br>Phone: $phone_number<br>Message: $message";

            $mail->send();
            echo ' Email has been sent';
        } catch (Exception $e) {
            echo ' Email could not be sent. Mailer Error: ' . $mail->ErrorInfo;
        }
    } else {
        echo "Error: " . $stmt->error;
    }

    // Close statement and connection
    $stmt->close();
    $conn->close();
} else {
    echo "Invalid request.";
}
?>