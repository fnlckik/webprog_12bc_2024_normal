<?php
    header("Access-Control-Allow-Origin: *");

    $username = $_GET["username"];
    if ($username === "farkas.norbert") {
        $name = "Farkas Norbert";
        $friends = 314;
    } else if ($username === "v.csaba") {
        $name = "Varga Csaba";
        $friends = 550;
    }

    // if (isset($name)) {
    //     echo $name . ";" . $friends;
    // } else {
    //     http_response_code(404);
    //     echo "Nincs ilyen felhasználó!";
    // }

    if (isset($name)) {
        echo json_encode(["name" => $name, "friends" => $friends]);
    } else {
        http_response_code(404);
        echo "Nincs ilyen felhasználó!";
    }
?>
