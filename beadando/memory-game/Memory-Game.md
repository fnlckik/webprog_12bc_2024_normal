# Memory-Game

Készítsetek egy memória játékot az alábbi leírás szerint!

A memória játék lényege, hogy képeket tartalmazó kártyákat kell párba rendezni a játékosnak. A kártyák kezdetben lefordított állapotban vannak, és egyszerre egy párt nézhet meg a felhasználó.

## Funkcionalitás (frontend - JS)

1. A játék indításakor képeket tartalmazó kártyák jelennek meg, melyek tartalma kezdetben csak 3-5 másodpercig látható. Minden kártyának pontosan egy párja van. A kártyák sorrendje véletlenszerű. - **3p**

2. Egy kártyára kattintáskor felfedjük azt (megmutatjuk a játékosnak a hozzá tartozó képet). - **1p**

3. Ha kiválasztott a játékos egy kártyát, tudjon hozzá párt is választani! Fedjük fel a második kiválasztott kártyát is, és ellenőrizzük, hogy talált-e párt a játékos. Ha egyeznek a képek, tüntessük el a kártyákat. Más esetben csak fordítsuk vissza őket. - **3p**

4. Figyeljük a játék során az időt, és számoljuk a hibákat is. (Hibának tekintjük ha rossz párt választ a játékos.) - **2p**

5. A játékos tudjon kezdetben szintet választani. Nehezebb szinten több kártyával dolgozzunk. - **2p**

6. Kapjon a játékos egy egyszer használható képességet is. Aktiválásakor egy véletlenszerűen választott kártyapár felfedésre kerül. - **2p**

7. Szintén egyszer használható képessége a játékosnak, hogy rövid időre (pl.: 3-5 másodperc) felfedjük a teljes játékteret. - **2p**

8. A kártyák kiválasztását delegálás segítségével oldd meg! (Ne tartozzon minden kártyához külön eseménykezelő, hanem a szülő elemre kattintást kezeld le.) - **1p**

9. A játékot végig tudjuk játszani, nem tartalmaz egyéb hibákat. - **2p**

10. Törekedj a kód tisztaságára! - **2p**
    - beszédes változónevek
    - hosszabb és ismétlődő kódrészek kiszervezése függvényekbe

Összesen: **20 pont**

## Adattárolás és kinézet (AJAX, CSS)

1. A felhasználó még a játék kezdete előtt adja meg az email címét és az életkorát. A játék végét követően tárold el `localstorage`-ban a játék statisztikáit! - **2 pont**
    - Ki játszott? (azonosító: email cím)
    - Mennyi a játékos életkora?
    - Milyen szintű volt a játék? (könnyű, normál, nehéz)
    - Mennyi idő alatt fejtette meg?
    - Hányszor hibázott?
    - Melyik napon játszott? (aktuális dátum)

2. Tartozzon a webalkalmazáshoz egy második weboldal is, amelyen statisztikákat láthatunk a korábbi játékokból (`localstorage`-ból lekérve). Az adatokat táblázatos formában jelenítsd meg! Legyen lehetőség email cím alapján szűrni is! A két weboldal között menüvel tudjunk közlekedni! - **3 pont**

3. Szintén a játék végét követően küldd el az alkalmazáshoz tartozó szervernek az aktuális játék adatait `POST` kéréssel. - **3 pont**

4. A statisztikák oldalon legyen egy szint választó menü. Egy szint kiválasztásakor `GET` kéréssel kérd le a szervertől az adott szinthez tartozó toplistát. Az adatokat idő szerint növekvő, azon belül hiba szerint növekvő sorrendben jelenítsd meg! - **4 pont**

5. A weboldalak mindegyike legyen szép kinézetű, reszponzív! - **8 pont**
    - A játék oldalán keskeny kijelző esetén a kártyák több sorba törve, reszponzívan jelenjenek meg!
    - Használj legalább 3 különböző animációt, áttűnést az oldalakon! (Pl.: kártyák felfordítása, képességek használata, navigációs menü, idő kijelző, ...)
    - Alkalmazz árnyék effektust, lekerekített sarkokat, színátmenetet!
    - Az oldalak kinézete általánosságban véve igényes!

Összesen: **20 pont**