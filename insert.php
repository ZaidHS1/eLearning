<?php

if (!empty($_POST)) {
    $name = $_POST['name'];
    $id = $_POST['idNo'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    $subject = $_POST['subject'];

    $name = str_replace("'", "''", $name);
    $id = str_replace("'", "''", $id);
    $email = str_replace("'", "''", $email);
    $message = str_replace("'", "''", $message);
    $subject = str_replace("'", "''", $subject);


    if (!empty($name) && !empty($id) && !empty($email) && !empty($message) && !empty($subject)) {

        $host = "localhost";
        $dbUsername = "root";
        $dbPassword = "";
        $dbName = "Tickets";

        //Connection to Database
        $conn = new mysqli($host, $dbUsername, $dbPassword, $dbName);

        if (mysqli_connect_error()) {
            die('Connect error (' . mysqli_connect_error() . ')' . mysqli_connect_error());
        } else {

            $sql = "INSERT INTO Requests (Title, CreatedBy, email, idNo, TicketStatus, TheMessage) values('$subject', '$name', '$email', '$id', 'Under Processing', '$message')";

            if ($conn->query($sql)) {
                echo "Data Added";
            } else {
                echo "Error: " . $sql . "<br>" . $conn->error;
            }
            $conn->close();
        }
    } else {
        echo "Please fill all fields";
        die();
    }
}else {
    echo "<h1>Please Go Back To The Website</h1>";
    die();
}


?>