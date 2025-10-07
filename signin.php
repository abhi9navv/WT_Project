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

  $sql = "SELECT * FROM users WHERE email='$email' AND password='$pass'";
  $result = $conn->query($sql);

  if ($result->num_rows > 0) {
    echo "Login successful!";
  } else {
    echo "Invalid credentials!";
  }
}
$conn->close();
?>
