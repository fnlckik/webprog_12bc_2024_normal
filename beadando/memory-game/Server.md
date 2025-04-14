# Memory-Game szerver 🖥

## Adatok kérése

A `http://localhost/memory/` végpontnak `GET` kérést küldve a következő válaszokat kaphatjuk.

**1. Hiányzó paraméter:** `http://localhost/memory/`

``` json
{
  "error": "Hiányzik a szint!"
}
```

Válaszban kapott státuszkód: `400`.

**2. Nem létező szint:** `http://localhost/memory/?level=alma`

```json
{
  "error": "Nincs ilyen szint!"
}
```

Válaszban kapott státuszkód: `404`.

**3. Sikeres kérés:** `http://localhost/memory/?level=nehéz`

```json
[
  {
    "email": "hajdu.emese@gmail.com",
    "age": 20,
    "chosen_level": "nehéz",
    "playtime": 310,
    "mistakes": 22,
    "created_at": "2025-03-28"
  },
  {
    "email": "kiss.maria@gmail.com",
    "age": 40,
    "chosen_level": "nehéz",
    "playtime": 305,
    "mistakes": 26,
    "created_at": "2025-04-05"
  },
  {
    "email": "kovacs.laszlo@yahoo.com",
    "age": 31,
    "chosen_level": "nehéz",
    "playtime": 280,
    "mistakes": 21,
    "created_at": "2025-03-29"
  },
  ...
]
```

Válaszban kapott státuszkód: `200`. A sikeres kéréshez a szint *könnyű*, *normál* vagy *nehéz* lehet.

---

## Adatok küldése

A `http://localhost/memory/create/` végpont `POST` kérést fogad. A kérés törzse a következő adattagokkal kell rendelkezzen:

```json
{
  "email": "farkas.norbert@ckik.hu",
  "age": 28,
  "level": "nehéz",
  "time": 241,
  "mistakes": 37
}
```

**1. Hiányzó adat:**

```json
{
  "email": "farkas.norbert@ckik.hu",
  "age": 28
}
```

Válaszban kapott státuszkód: `400`. A válasz törzse:

```json
{
  "error": "Hiányzó adat(ok)!"
}
```

**2. Korábbinál rosszabb eredmény:**

```json
{
  "email": "farkas.norbert@ckik.hu",
  "age": 28,
  "level": "könnyű",
  "time": 73,
  "mistakes": 23
}
```

Válaszban kapott státuszkód: `200`. A válasz törzse:

```json
{
  "message": "Korábbi eredmény már jobb volt!",
  "result": {
    "email": "farkas.norbert@ckik.hu",
    "age": 28,
    "chosen_level": "könnyű",
    "playtime": 52,
    "mistakes": 19,
    "created_at": "2025-04-13"
  }
}
```

**3. Új eredmény (vagy korábbinál nem rosszabb):**

```json
{
  "email": "farkas.norbert@ckik.hu",
  "age": 28,
  "level": "könnyű",
  "time": 52,
  "mistakes": 23
}
```

Válaszban kapott státuszkód: `201`. A válasz törzse:

```json
{
  "email": "farkas.norbert@ckik.hu",
  "age": 28,
  "level": "könnyű",
  "time": 52,
  "mistakes": 23,
  "date": "2025-04-14"
}
```

Dátumként a szerver automatikusan az aktuális napot tárolja el.