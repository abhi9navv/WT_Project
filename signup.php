<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smart_dhopa";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $email = $_POST['email'];
  $pass = $_POST['password'];

  $sql = "INSERT INTO users (email, password) VALUES ('$email', '$pass')";
  if ($conn->query($sql) === TRUE) {
    echo "Signup successful!";
  } else {
    echo "Error: " . $conn->error;
  }
}
$conn->close();
?>
