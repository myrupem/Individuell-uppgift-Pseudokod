// G-Version - Split the Nota
// Skriv din pseudokod innanför nedanstående kommentarsblock
/*

FUNCTION SplitNota
    SET summa = 0
    Användaren fyller in summan
    KOllA om input från användaren är en siffra
    IF summa = nummer THEN true
    ELSE false

    SET antPers = 0
    Användaren fyller i antal personer
    KOllA om input från användaren är en siffra
    IF summa = nummer THEN true
    ELSE false

    SET dricks = 0
    Användaren fyller i hur mycket dricks
    KOllA om input från användaren är en decimalsiffra
    IF summa = decimalnummer THEN true
    ELSE false

    FUNCTION calculateTotal ()
        Räkna ut dricks * summa
        SET totalDricks = dricks * summa
        SET splitSum = totalDricks + summa / antPers
        RETURN splitSum
    END FUNCTION

    PRINT splitSum
*/

// VG-Version - Lewis Carroll Word Puzzle
// Skriv din pseudokod innanför nedanstående kommentarsblock
// Startkoden är 100% frivillig och kan tas bort eller skrivas om
/*

play();

function play()
    SET variabel ordbok = [FOUR, FOUL, FOOL, FOOT, FORT, FORE, FIRE, FIVE]; // Innehåller ALLA ord i det engelska språket
    SET variabel startOrd till "FOUR";
    SET variabel slutordOrd till "FIVE";

    SET variabel wordOne = Till en början ordet "FOUR" men sedan INPUT från användaren
    SET variabel wordTwo = Till en tom string ( kommer komma INPUT från användaren som sparas i denna variabeln)

    PRINT Startordet är "FOUR"
    PRINT Slutordet är "FIVE"
    PRINT Skriv in ett ord:
    
    
    WHILE wordTwo !== slutOrd // Loopa denna funktionen så länge användarens ord inte är slutordet
        Användaren skriver in ett ord i wordTwo
        Kör funtionen isOneLetterApart(wordOne, wordTwo)
        Kör funtionen wordExistsInOrdbok(wordTwo)

        IF isOneLetterApart === true &&& wordExistsInOrdbok === true THEN // Om det bara är en bokstav som ändrats och ordet finns med i ordboken
            PRINT Du skrev in wordTwo, snyggt! Fortsätt spela
        ELSE IF isOneLetterApart === false &&& wordExistsInOrdbok === true THEN // Om mer eller mindre än en bokstav har ändrats men ordet finns med i ordboken
            PRINT Du skrev in wordTwo, bara en bokstav får ändras åt gången, skriv in ett annat ord
        ELSE IF isOneLetterApart === true &&& wordExistsInOrdbok === false THEN // Om en bokstav ändrats men ordet finns inte med i ordboken
            PRINT Du skrev in wordTwo, ditt ord finns inte med i ordboken, skriv in ett nytt ord
        ELSE
            PRINT Ditt ord finns inte med i ordlistan och du får bara ändra en bokstav åt gången, försök igen.
        END IF

        wordOne = wordTwo // Flytta över ordet i wordTwo till wordOne
        wordTwo = INPUT från användaren // Skriv över gamla värdet i wordTwo med nya INPUTet från användaren
    END WHILE

PRINT Grattis du vann!

end function


function wordExistsInOrdbok(ordbok, wordTwo)
    FOR varje ord i ordbok, räkna med index 'i'
        IF i === wordTwo // Om ordet i ordboken stämmer överrens med wordTwo
            return true; // returnerar sant direkt om ordet finns med i ordboken
        END IF
    END FOR
        return false; // returnerar falskt om ordet inte finns med
END FUNCTION

function isOneLetterApart(wordOne, wordTwo)
    SET variabel diffCount till 0;

    FOR varje tecken i wordOne, räkna med index 'i'
        IF wordOne plats i !== wordTwo plats i // Om bokstaven i wordOne inte stämmer överrens med bokstaven i wordTwo 
            diffCount ++ //lägg till 1 i diffCount
        END IF
    END FOR

    return diffCount === 1; // returnerar sant om endast en bokstav ändrats, annars falskt
end function

*/
