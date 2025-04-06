<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET");
    
    $data = file_get_contents("books.json");
    $data = json_decode($data);
    $title = $_GET["title"] ?? null;
    
    if ($title === null) {
        $response = $data;
        http_response_code(200);
    } else {
        $i = 0;
        while ($i < count($data) && !($data[$i]->title === $title)) {
            $i++;
        }
        if ($i < count($data)) {
            $response = $data[$i];
            http_response_code(200);
        } else {
            $response = ["hiba" => "Nincs ilyen konyv!"];
            http_response_code(404);
        }
    }
    header("Content-Type: application/json");
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
?>