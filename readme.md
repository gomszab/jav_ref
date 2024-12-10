
| Commit        | Mit használhatok?           | Hogy néz ki?  |
| ------------- |:-------------:| -----:|
| 1. linearis utasitas vegrehajtas | semmit | megjelenik a táblázat |
| 2. valtozok bevezetese| változókat |  megjelenik a táblázat |
| 3. osszetett objektum bevezetese | objektumot |  megjelenik a táblázat | 
| 4. tomb bevezetese | tömböt, és az elemeket konkrét számokkal szeded ki, a header nem kell benne legyen a tömbben |  megjelenik a táblázat | 
| 5. ciklus bevezetese | ciklust | elágazás nélkül a dupla sorok / dupla oszlopok üresek/undefined írással rendelkeznek | 
| 6. elagazas bevezetese | elágazást | a táblázat újra megjelenik rendesen | 
| 7. fuggveny bevezetese | függvényt paraméter nélkül | a táblázat megjelenik | 
| 8. esemenykezelo bevezetese | az eseménykezelőben nincs validáció | az ürlapnál minden esetben hozzáfűzzük az új elemet | 
| 9. egyszeru validacio vegrehajtasa linearisan | nem lehet kiszervezve függvénybe a validáció | működik az egyszerű validáció B/3 | 
| 10. egyszeru validacio fuggvenybe szervezese, parameterek bevezetese | függvényt paraméterrel | működik az egyszerű validáció B/3 | 
| 11. osszetett validacio vegrehajtasa linearisan | nem lehet kiszervezve függvénybe az összetett validáció | működik az összetett validáció B/4 | 
| 12. osszetett validacio fuggvenybe szervezese | összetett validáció függvénybe szervezve |    $1 | 
| 13. tabla fejlec generalas bevezetese | függvényben generáljuk a tabla fejlécét, és ciklust is használunk hozzá |  | 
| 14. tablageneralas fuggvenyenek bevezetese | paraméter a táblagenerálásban |  | 
| 15. form generalas fuggveny bevezetese | akármit (tömb objektum segédfüggvények...) | a form megjelenik | 
| 16. fuggvenydokumentacio letrehozasa | a /** */ | a típusok és leírások megjelennek a függvények felett | 
| 17. fuggvenyek kiszervezese uj fajlba | functions.js-t létrehozhatod |     | 

| repónév        | pdf           |
| ------------- |:-------------:|
| minta | uralkodok |
| irodalom | irodalom |
| groteszk | groteszk |
| harcok | harcok |
| fizikusok | fizikusok |
| szerzok | szerzok |
| evszamok | evszamok |

Javaslom, hogy ne az evszamokkal kezdj.

# Gyakran ismételt kérdések

## General
### Commitolhatok többet?
Felőlem igen. A felsorolt commit messageket ellenőrzöm, hogy megvan-e. Ha többször van ugyanaz, akkor az utolsót nézem. 
### Kifelejtettem valamit a commitból, de még nem álltam neki a következőnek. Mit tegyek?
Fejezd be, és commitolj újra ugyanazzal az üzenettel.
### Kimaradt valami ezer éve. Mit tegyek?
Szólj nekem.
### Nincs itt a kérdésem. Mi legyen?
Szólj nekem.
### Mik legyenek a változóneveim?
Ami segít a kódod megértésében
### Mit írjak commentbe?
Nekem mindegy. Amiből érteni fogod a kódot. például: mi a függvény visszatérési értéke, milyen típusú az adott változó, miért hozzuk hívjuk meg a metódust, mi jön létre etc. Ha nem tudod miből érted meg, akkor kérdezz.
### Írjak-e readme-t?
Nekem mindegy.
### Lehet-e private repo?
Lehet. Feltéve, ha meghívsz.
### Azt a sort is kommenteznem kell, amit a Tanár Úr nem?
Igen. A lényeg, hogy tudjad mit csinál az adott sor.
### Írhatom ugyanazokat a commenteket, amiket a Tanár Úr írt?
Nem.
### Beleírhatom commentekbe a változóknál a változók típusát is?
Hát ha nem tudod őket, akkor erősen javasolt.
### A B/4es validációt mikor kell megírnom?
A commit 11-ben
### A commit 9 tartalmaz validációt?
Nem. A commit 9 esetén összesen 1 if van a kódodban: a táblázat generálásához tartozó.
### A ciklus bevezetésekor kell elágazást is használnom hogy jól nézzen ki a táblázat?
Nem. Sőt tilos. A ciklus bevezetésekor nem kell elágazást használnod.
### Máshogy csináltam meg a feladatot, de működik akkor az érvénytelen és kezdhetem előlről?
Amíg betartod a szabályokat, és nem használsz addig a pontig vezérlési szerkezeteket, amíg a commit nem utal rá, megcsinálhatod máshogyan is. Értsd: 3. commit előtt nincs objektum, 4 előtt nincs tömb, 5. előtt nincs ciklus, 6 előtt nincs elágazás, 10 előtt nincs a validáció függvénybe szervezve, 11. előtt nincs B/4es validáció.

## Commit 1
### Úgy kell-e megcsinálni, ahogy órán vettük?
Nem, hasonlóan kell elemi műveletekre bontani, mint ahogy ezen a repón találod.
### Diveket meg spanokat kell létrehoznom nekem is?
Nem, értelemszerűen a html kód alapján kell megcsinálnod a js oldalt.
### Css meg html mennyire fontos, amit a dolgozatban meg kellett csinálni?
A css nem érdekel, a html-ben az utolsó lépésre amúgy sem marad semmi. Csak a js kódot ellenörzöm, és a kommenteket fogom összevetni a többi potló emberével, hogy ne legyen egyezés.
### Használhatok tömböt és ciklust?
Az első commitnál semmiképpen sem

## Commit 2 
### Constot vagy letet használjak?
Én a constot javaslom, a referenciában is az van
### Kell írnom kommentet a változó deklarációkhoz? a referencia repón kimaradt.
Ahhoz is kell, elfelejtődött nálam.
### Használhatok tömböt?
Nem.
### Használhatok ciklust?
Nem.

## Commit 3
### Lehetnek-e ugyanazok az objektumok tulajdonságai?
Felőlem igen.

## Commit 4
### Minden objektumot bele kell-e tenni a tömbbe?
A header objektumát nem muszáj.

## Commit 5
### Szétcsúszik a táblázat, elágazás nélkül. Mit tegyek?
Minden sorban függetlenül, hogy van-e értéke az adott elemnek vagy nincs, be kell itt állítani a colspan/rowspant 2-re.
### A ciklusban kell-e kiraknom a headert is?
Nem, igazából a tömbben nem is muszáj benne lennie.

## Commit 11
### Mi az az összetett validáció?
A feladatsorok B/4-es feladatát neveztem el így.

### Commit 17
## Egy g vel vagy 2 g-vel kell írnom a commit üzenetet?
2-vel, de az 1-et is elfogadom, mert elírtam. Örülnék ha 2g-vel írnád