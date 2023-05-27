<?php

$inputTeks = $_POST["teks"];
$inputAngka = $_POST["angka"];

$arrayTable = array();

for ($i = 0; $i < $inputAngka; $i++) {
    $arrayTable[$i] = $inputTeks . $i;
}

sleep(2);
header('Content-Type: application/json');
echo json_encode($arrayTable);
