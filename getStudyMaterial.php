<?php
include "config.php"; 

$sql = "SELECT subject, topic, description, file_path FROM study_material ORDER BY id DESC";
$result = $con->query($sql);

$data = [];

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}

header('Content-Type: application/json');
echo json_encode($data);

$con->close();
?>
