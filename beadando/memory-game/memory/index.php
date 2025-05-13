<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");

    function get_level() {
        $level = $_GET["level"] ?? "";
        if ($level === "") {
            http_response_code(400);
            echo json_encode(["error" => "Hiányzik a szint!"], JSON_UNESCAPED_UNICODE);
            exit();
        }
        return $level;
    }

    function connect_db() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "memory_game";
        $mysql = new mysqli($servername, $username, $password, $database);
        return $mysql;
    }

    function get_data($mysql, $level) {
        $query = $mysql->prepare("SELECT * FROM statistics WHERE chosen_level = ?");
        $query->bind_param("s", $level);
        $query->execute();
        $data = $query->get_result();
        $query->close();
        $mysql->close();
        return $data;
    }

    function get_result($data) {
        $result = [];
        while ($row = $data->fetch_assoc()) {
            $result[] = $row;
        }
        return $result;
    }

    function send_response($result) {
        if (count($result) > 0) {
            http_response_code(200);
            echo json_encode($result, JSON_UNESCAPED_UNICODE);
        } else {
            http_response_code(404);
            echo json_encode(["error" => "Nincs ilyen szint!"]);
        }
    }

    $level = get_level();
    $mysql = connect_db();
    $data = get_data($mysql, $level);
    $result = get_result($data);
    send_response($result);
?>