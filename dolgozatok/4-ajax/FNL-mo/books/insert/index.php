<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: *");
    header("Access-Control-Allow-Methods: POST, OPTIONS");

    header("Content-Type: application/json");
    if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        return 0;
    } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
        http_response_code(400);
        echo json_encode(["hiba" => "Nem fogadok GET kerest!"]);
        return -1;
    }
    
    $data = file_get_contents("../books.json");
    $data = json_decode($data);
    
    $post = file_get_contents("php://input");
    $post = json_decode($post);
    
    $record["author"] = $post->author ?? "";
    $record["title"] = $post->title ?? "";
    $record["lang"] = [];
    
    if ($record["author"] === "" || $record["title"] === "") {
        echo json_encode(["hiba" => "Hianyzo cim vagy szerzo!"]);
        http_response_code(400);
        return -1;
    }

    $i = 0;
    while ($i < count($data) && !($data[$i]->title === $record["title"])) {
        $i++;
    }
    if ($i < count($data)) {
        http_response_code(400);
        echo json_encode(["hiba" => "Van már ilyen cimu konyv!"]);
    } else {
        $data[] = $record;
        file_put_contents("../books.json", json_encode($data, JSON_PRETTY_PRINT));
        echo json_encode($record);
        http_response_code(201);
    }
?>