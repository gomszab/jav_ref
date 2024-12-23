
# [technikai cikkek, példák (ha átismételnéd, akkor kattints ide!)](./technical.md)

| Commit szám | Commit        | Mit használhatok?           | Hogy néz ki?  | példa commit url |
|:------------|:------:|:-------------:| -----:|----:|
| 1. | linearis utasitas vegrehajtas | semmit | megjelenik a táblázat | [link](https://github.com/gomszab/jav_ref/tree/8d74e376e0a6fca23edb716e438778dfd27c86ac)
| 2. |valtozok bevezetese| változókat |  megjelenik a táblázat | [link](https://github.com/gomszab/jav_ref/tree/a5158154ff96daef407d34a87eac7387471e464f)
| 3. |osszetett objektum bevezetese | objektumot |  megjelenik a táblázat |  [link](https://github.com/gomszab/jav_ref/tree/c4b0b026639411a87ad9f050694058d7ebd81d34)
| 4.| tomb bevezetese | tömböt, és az elemeket konkrét számokkal szeded ki, a header nem kell benne legyen a tömbben |  megjelenik a táblázat |  [link](https://github.com/gomszab/jav_ref/tree/26925f3fefaf84534eb5e2f42e82808ec108410d)
| 5. |ciklus bevezetese | ciklust | elágazás nélkül a dupla sorok / dupla oszlopok üresek/undefined írással rendelkeznek |  [link](https://github.com/gomszab/jav_ref/tree/e63a1571ac3ad9443cbbe819a2bf23834efc19e4)
| 6. |elagazas bevezetese | elágazást | a táblázat újra megjelenik rendesen |  [link](https://github.com/gomszab/jav_ref/tree/8879919906e60d8e7deb4fc34871bab02cc21f9e)
| 7. |fuggveny bevezetese | függvényt paraméter nélkül | a táblázat megjelenik |  [link](https://github.com/gomszab/jav_ref/tree/94c21d78b721c44b9866c4f46d290d73714b0e87)
| 8. |esemenykezelo bevezetese | az eseménykezelőben nincs validáció | az ürlapnál minden esetben hozzáfűzzük az új elemet |  [link](https://github.com/gomszab/jav_ref/tree/389c6fb9d1d164403636b037d99fcd5d3882feae)
| 9. |egyszeru validacio vegrehajtasa linearisan | nem lehet kiszervezve függvénybe a validáció | működik az egyszerű validáció B/3 |  [link](https://github.com/gomszab/jav_ref/tree/51888253cbc096bb618ffafc134a6e19bdafa2a4)
| 10. |egyszeru validacio fuggvenybe szervezese, parameterek bevezetese | függvényt paraméterrel | működik az egyszerű validáció B/3 |  [link](https://github.com/gomszab/jav_ref/tree/78392152e36f3defb4f73ea799ec4d8423ceeed5)
| 11.| osszetett validacio vegrehajtasa linearisan | nem lehet kiszervezve függvénybe az összetett validáció | működik az összetett validáció B/4 |  [link](https://github.com/gomszab/jav_ref/tree/ea5677ae512331c2c9064460e6ea7ba2e1f0e470)
| 12. |osszetett validacio fuggvenybe szervezese | összetett validáció függvénybe szervezve |    |  [link](https://github.com/gomszab/jav_ref/tree/17ea7a3735fbc3b4bc7574464d343606e611d537)
| 13. |tabla fejlec generalas bevezetese | függvényben generáljuk a tabla fejlécét, és ciklust is használunk hozzá |  |  
| 14. |tablageneralas fuggvenyenek bevezetese | paraméter a táblagenerálásban |  |  
| 15. |form generalas fuggveny bevezetese | akármit (tömb objektum segédfüggvények...) | a form megjelenik | 
| 16. |fuggvenydokumentacio letrehozasa | a /** */ | a típusok és leírások megjelennek a függvények felett |  
| 17. |fuggvenyek kiszervezese uj fajlba | functions.js-t létrehozhatod |     |

| repónév        | pdf           |
| ------------- |:-------------:|
| uralkodok | [uralkodok](./uralkodok.pdf) |
| irodalom | [irodalom](./Irodalom.pdf) |
| groteszk | [groteszk](./groteszk.pdf) |
| harcok | [harcok](./harcok.pdf) |
| fizikusok | [fizikusok](./Fizikusok.pdf) |
| szerzok | [szerzok](./szerzok.pdf) |
| evszamok | [evszamok](./evszamok.pdf) |

Javaslom, hogy ne az evszamokkal kezdj. MINDEN KÓDSOR (kiv kapcsos zárójeles) KOMMENTEZVE LEGYEN!!! Nem összefoglaló comment, hanem a sorok végén //-el

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
### A commit 8 tartalmaz validációt?
Nem. A commit 8 esetén összesen 1 if van a kódodban: a táblázat generálásához tartozó.
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