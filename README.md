# Movie Search App

Prosta aplikacja React do wyszukiwania filmów za pomocą API OMDb.  
Umożliwia przeglądanie wyników, paginację oraz dodawanie filmów do ulubionych, które są zapisywane lokalnie.

---

## Funkcjonalności

- Wyszukiwanie filmów po tytule
- Wyświetlanie plakatów i podstawowych informacji o filmach(tytuł, rok)
- Paginacja wyników wyszukiwania
- Dodawanie/usuwanie filmów z ulubionych (zapis w localStorage)

---

## Instalacja i uruchomienie

1. Sklonuj repozytorium:
   ```bash
   git clone https://github.com/ZamrokJulita/Movie-Explorer.git
   cd Movie-Explorer
2. Zainstaluj zależności
   ```bash
   npm install
3. Uruchom aplikację
   ```bash
   npm start
4. Otwórz w przeglądarce
   http://localhost:3000

---

## Dostępne skrypty

- `npm start` — uruchamia aplikację w trybie deweloperskim (z automatycznym odświeżaniem)
- `npm test` — uruchamia testy w trybie obserwacji
- `npm run build` — buduje aplikację do produkcji w folderze `build`
- `npm run eject` — wyodrębnia konfigurację builda (operacja nieodwracalna)

---

## API OMDb

Aplikacja korzysta z API OMDb do pobierania danych o filmach.  
Klucz API jest przechowywany w pliku z kodem jako `API_KEY`.  
Jeśli chcesz użyć własnego klucza, zamień wartość zmiennej `API_KEY` w `MovieSearch.js`.

---

## Uwagi końcowe

- Aplikacja wymaga połączenia z internetem do działania API.

## Autor

Julita
