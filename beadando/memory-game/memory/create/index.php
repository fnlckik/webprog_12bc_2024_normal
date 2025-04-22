<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
    header("Access-Control-Allow-Methods: GET");
    header("Content-Type: application/json; charset=UTF-8");

    function check_request() {
        if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
            http_response_code(200);
            exit();
        } else if ($_SERVER['REQUEST_METHOD'] === 'GET') {
            http_response_code(400);
            echo json_encode(["error" => "Nem fogadok GET kérést!"], JSON_UNESCAPED_UNICODE);
            exit();
        }
    }

    function get_game() {
        $post = file_get_contents("php://input");
        $post = json_decode($post);
        return [
            "email" => $post->email ?? "",
            "age" => $post->age ?? "",
            "level" => $post->level ?? "",
            "time" => $post->time ?? "",
            "mistakes" => $post->mistakes ?? "",
            "date" => date('Y-m-d')
        ];
    }

    function check_data($data) {
        foreach (['email', 'age', 'level', 'time', 'mistakes'] as $key) {
            if ($data[$key] === "") {
                http_response_code(400);
                echo json_encode(["error" => "Hiányzó adat(ok)!"], JSON_UNESCAPED_UNICODE);
                exit();
            }
        }
    }

    function connect_db() {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $database = "memory_game";
        $mysql = new mysqli($servername, $username, $password, $database);
        return $mysql;
    }

    function get_last_game($mysql, $email, $level) {
        $query = $mysql->prepare("SELECT * FROM statistics WHERE email = ? AND chosen_level = ?");
        $query->bind_param("ss", $email, $level);
        $query->execute();
        $result = $query->get_result();
        $query->close();
        return $result;
    }

    function del_last_game($mysql, $email, $level) {
        $query = $mysql->prepare("DELETE FROM statistics WHERE email = ? AND chosen_level = ?");
        $query->bind_param("ss", $email, $level);
        $query->execute();
        $query->close();
    }

    function create_new_game($mysql, $d) {
        $query = $mysql->prepare("INSERT INTO statistics (email, age, chosen_level, playtime, mistakes, created_at) VALUES (?, ?, ?, ?, ?, ?)");
        $query->bind_param("sissds", $d["email"], $d["age"], $d["level"], $d["time"], $d["mistakes"], $d["date"]);
        $query->execute();
        $query->close();
    }

    function send_response_success($data) {
        http_response_code(201);
        echo json_encode([
            "email" => $data["email"],
            "age" => $data["age"],
            "level" => $data["level"],
            "time" => $data["time"],
            "mistakes" => $data["mistakes"],
            "date" => $data["date"]
        ], JSON_UNESCAPED_UNICODE);
    }

    function update_player_stats($mysql, $data) {
        del_last_game($mysql, $data["email"], $data["level"]);
        create_new_game($mysql, $data);
        send_response_success($data);
    }

    function send_response_ok($row) {
        http_response_code(200);
        echo json_encode([
            "message" => "Korábbi eredmény már jobb volt!",
            "result" => $row
        ], JSON_UNESCAPED_UNICODE);
    }

    function save_game($mysql, $data) {
        $result = get_last_game($mysql, $data["email"], $data["level"]);
        if ($row = $result->fetch_assoc()) {
            if ($data["time"] <= floatval($row["playtime"])) {
                update_player_stats($mysql, $data);
            } else {
                send_response_ok($row);
            }
        } else {
            create_new_game($mysql, $data);
            send_response_success($data);
        }
    }

    check_request();
    $data = get_game();
    check_data($data);
    $mysql = connect_db();
    save_game($mysql, $data);
    $mysql->close();
?>