
const array = [
    { // array tomb elso elemenek letrehozasa
        lastName: "Vezeteknev", // // array tomb elso elem lastname tulajdonsaganak ertekadas
        firstName: "Keresztnev" // // array tomb elso elem firstName tulajdonsaganak ertekadas
    },
    { // array tomb masodik elemenek letrehozasa
        lastName : 'Dienes', // array tomb masodik elem lastname tulajdonsaganak ertekadas
        firstName: 'Zoltán', // array tomb masodik elem firstName tulajdonsaganak ertekadas
        firstName2: 'Pál' // array tomb masodik elem firstName2 tulajdonsaganak ertekadas
    },
    { // array tomb harmadik elemenek letrehozasa
        lastName : 'Obádovics', // array tomb harmadik elem lastname tulajdonsaganak ertekadas
        firstName: 'Gyula', // array tomb harmadik elem firstName tulajdonsaganak ertekadas
    },
    { // array tomb negyedik elemenek letrehozasa
        lastName : 'Dávid', // array tomb negyedik elem lastname tulajdonsaganak ertekadas
        firstName: 'Gyula', // array tomb negyedik elem firstName tulajdonsaganak ertekadas
    }
]



const menuContainer = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(menuContainer) // Hozzateszem bodyhoz

function renderMenu(){ // definialom a renderMenu fuggvenyt
    for(const currentElement of array){ // vegigiteralok a cikluson a ciklusvaltozo az aktualis elem
        const row = document.createElement('div'); // Letrehozok egy div elemet
        menuContainer.appendChild(row); // Hozzafuzom ezt a sort a tablazatomhoz
        
        const rowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
        rowLastName.innerHTML = currentElement.lastName; // a cella tartalma az aktualis elem lastname tulajdonsaga
        row.appendChild(rowLastName); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
        
        const rowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
        rowFirstName.innerHTML = currentElement.firstName; // a cella tartalma az aktualis elem firstname tulajdonsaga
        row.appendChild(rowFirstName); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
        if(currentElement.firstName2 !== undefined){ // vizsgalom a firstName2 erteket a ciklusvaltozo objektumanak, ha az nem egyenlo undefineddel, akkor vegrehajtja az elagazason beluli utasitasokat
            const rowFirstName2 =document.createElement('span'); // Letrehozok egy uj span elemet
            rowFirstName2.innerHTML = currentElement.firstName2; // a cella tartalma az aktualis elem firstname2 tulajdonsaga
            row.appendChild(rowFirstName2); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
        } 
    }
}

renderMenu(); // meghivom a renderMenu fuggvenyt

const form = document.getElementById('urlap'); // elkerem a htmlelementet, amely az urlap id-val van definialva

form.addEventListener('submit', function(e){
    e.preventDefault(); // megakadalyozom, hogy a bongeszo alapertelmezett mukodese lefusson submit eseten
    const lastNameHtmlElement = document.getElementById('vezeteknev') // elkerem a htmlelementet, amely az vezeteknev id-val van definialva
    const firstNameHtmlElement = document.getElementById('keresztnev') // elkerem a htmlelementet, amely az keresztnev id-val van definialva
    const firstName2HtmlElement = document.getElementById('keresztnev2') // elkerem a htmlelementet, amely az keresztnev2 id-val van definialva

    const lastNameValue = lastNameHtmlElement.value; // a lastNameHtmlElement value erteket beleteszem egy lokalis valtozoba
    const firstNameValue = firstNameHtmlElement.value; // a firstNameHtmlElement value erteket beleteszem egy lokalis valtozoba
    const firstName2Value = firstName2HtmlElement.value === "" ? undefined : firstName2HtmlElement.value; // a firstNameHtmlElement2 value erteket beleteszem egy lokalis valtozoba
    // az ertekadas soran vizsgalom, hogy a firstName2HtmlElement.value ures string-e, amennyiben ez fennall, a valtozonak undefined erteket adok, mivel a render logikat a tablazatnal ugy irtuk meg, hogy undefined eseten ne hozzon letre uj span-t
    // ures string eseten letrehozna egy ures span taget a html-re ami felesleges.
    const newElement = { // definialok egy uj elementet
        lastName: lastNameValue, // az uj objektum lastName erteke a lastNameValue lesz
        firstName: firstNameValue, // az uj objektum firstName erteke a firstNameValue lesz
        firstName2: firstName2Value // az uj objektum firstName2 erteke a firstName2Value lesz
    }
    array.push(newElement); // hozzaadom az arrayhez az uj objektumot
    menuContainer.innerHTML = ''; // A tablazatom tartalmat ures stringel teszem egyenlove, ami azt eredmenyezi hogy torlodik a tabla
    renderMenu() // ujra renderelem a fuggveny
})