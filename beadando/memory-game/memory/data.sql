DROP DATABASE IF EXISTS memory_game;

CREATE DATABASE memory_game;
USE memory_game;

CREATE TABLE statistics (
    email VARCHAR(255),
    age INT NOT NULL,
    chosen_level VARCHAR(255) NOT NULL,
    playtime INT NOT NULL, -- másodpercben
    mistakes INT,
    created_at DATE NOT NULL,
    CONSTRAINT PK_Statistics PRIMARY KEY (email, chosen_level)
);

INSERT INTO statistics
VALUES
("farkas.norbert@ckik.hu", 28, "könnyű", 52, 19, "2025-4-13"),
("nagy.lajos@gmail.com", 31, "normál", 126, 11, "2025-4-10"),
("vago.orsolya@gmail.com", 19, "nehéz", 238, 24, "2025-4-12"),
("kiss.anna@hotmail.com", 25, "könnyű", 45, 12, '2025-04-01'),
("szabo.marton@yahoo.com", 34, "normál", 110, 8, '2025-04-02'),
("toth.gergo@gmail.com", 22, "nehéz", 275, 15, '2025-03-30'),
("kerekes.julia@freemail.hu", 30, "könnyű", 60, 14, '2025-04-03'),
("balogh.tamas@gmail.com", 27, "normál", 140, 17, '2025-04-05'),
("hajdu.emese@gmail.com", 20, "nehéz", 310, 22, '2025-03-28'),
("szilagyi.rudolf@outlook.com", 45, "könnyű", 55, 10, '2025-03-29'),
("illes.adrienn@yahoo.com", 18, "normál", 125, 9, '2025-04-06'),
("varga.david@gmail.com", 33, "nehéz", 290, 18, '2025-04-04'),
("molnar.lilla@freemail.hu", 24, "könnyű", 50, 13, '2025-04-07'),
("szanto.peter@gmail.com", 29, "normál", 135, 16, '2025-04-01'),
("liptak.eva@t-email.hu", 26, "nehéz", 260, 20, '2025-04-02'),
("fekete.nikolett@gmail.com", 21, "könnyű", 48, 11, '2025-03-31'),
("orosz.bence@citromail.hu", 38, "normál", 120, 10, '2025-04-06'),
("kiss.maria@gmail.com", 40, "nehéz", 305, 26, '2025-04-05'),
("feher.csaba@freemail.hu", 23, "könnyű", 43, 9, '2025-04-03'),
("nagy.zsuzsa@gmail.com", 36, "normál", 145, 14, '2025-04-04'),
("kovacs.laszlo@yahoo.com", 31, "nehéz", 280, 21, '2025-03-29'),
("takacs.krisztina@gmail.com", 19, "könnyű", 39, 7, '2025-04-02'),
("veres.zoltan@t-online.hu", 28, "normál", 130, 12, '2025-04-01');
