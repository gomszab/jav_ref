
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
        if(currentElement.firstName2 !== undefined){ // vizsgalom a firstName erteket a ciklusvaltozo objektumanak, ha az nem egyenlo undefineddel, akkor vegrehajtja az elagazason beluli utasitasokat
            const rowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
            rowFirstName.innerHTML = currentElement.firstName; // a cella tartalma az aktualis elem firstname tulajdonsaga
            row.appendChild(rowFirstName); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
        }
        
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

    const thisForm = e.currentTarget; // Az event currentTarget tulajdonsaga a formunkat tartalmazza, ezt eltaroljuk egy lokalis valtozoba 
    const errorHtmlElements = thisForm.querySelectorAll('.error'); // A formon beluli osszes error classal rendelkezo html elementet elkerjuk
    for(const errorElement of errorHtmlElements){ // Vegigiteralunk a visszakapott errorhtmlelementeken
        errorElement.innerHTML = ''; // toroljuk az aktualis elem tartalmat
    }

    let nonemptyFirstNameHtmlElement = firstNameHtmlElement; // egy lokalis valtozoba eltaroljuk a firstHtmlElementet
    if(firstNameHtmlElement.value === '' && firstName2HtmlElement.value !== ''){ // Ha a firstHtmlElement ures, de a first2HtmlElement nem ures
        nonemptyFirstNameHtmlElement = firstName2HtmlElement; // A lokalis valtozoba belerakjuk a firstName2 HtmlElementet
    }

    if(simpleValidation(lastNameHtmlElement, nonemptyFirstNameHtmlElement)){  // ha a lastname es legalabb egy keresztnev mezo erteke meg van adva, akkor
        const lastNameValue = lastNameHtmlElement.value; // a lastNameHtmlElement value erteket beleteszem egy lokalis valtozoba
        const firstNameValue = firstNameHtmlElement.value === "" ? undefined : firstNameHtmlElement.value; // a firstNameHtmlElement2 value erteket vagy egy undefined-t beleteszek egy lokalis valtozoba
        const firstName2Value = firstName2HtmlElement.value === "" ? undefined : firstName2HtmlElement.value; // a firstNameHtmlElement2 value erteket vagy egy undefined-t beleteszek egy lokalis valtozoba
        const newElement = { // definialok egy uj elementet
            lastName: lastNameValue, // az uj objektum lastName erteke a lastNameValue lesz
            firstName: firstNameValue, // az uj objektum firstName erteke a firstNameValue lesz
            firstName2: firstName2Value // az uj objektum firstName2 erteke a firstName2Value lesz
        }
        array.push(newElement); // hozzaadom az arrayhez az uj objektumot
        menuContainer.innerHTML = ''; // A tablazatom tartalmat ures stringel teszem egyenlove, ami azt eredmenyezi hogy torlodik a tabla
        renderMenu() // ujra renderelem a fuggveny
        thisForm.reset(); // visszaallitjuk a formunkat az alapallapotba
    }
    
})

function simpleValidation(lastNameInput, firstNameInput) {
    let valid = true; // a valid valtozo erteke igaz

    if(!validateFormHtmlField(lastNameInput, "A vezeteknev megadasa kotelezo")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
        valid = false; // a valid valtozo erteket false-ra allitjuk
    }

    if(!validateFormHtmlField(firstNameInput, "A keresztnev megadasa kotelezo")){ // Ha a validateFormHtmlField fuggveny hamissal ter vissza a bementei lastName htmlElement eseten
        valid = false;  // a valid valtozo erteket false-ra allitjuk
    }

    return valid; // vissyaterek a lokalis valid valtozo ertekevel
}

function validateFormHtmlField(inputhtmlElement, errormessage){ // definialjuk a validateFormHtmlField fuggvenyt
    let valid = true; // definialjuk a valid lokalis valtozot true ertekkel
    if(inputhtmlElement.value === ''){ // ha a parameterben kapott beviteli mezo ures
        const parentElement = inputhtmlElement.parentElement; // eltaroljuk egy valtozoba a kapott htmlelementnek a parentelement propertyjet (jelenleg ez a htmlen:  <div class="field">)
        const errorplace = parentElement.querySelector('.error'); // A vezeteknev beviteli mezojenek a parentelement divjeben megkeressuk az elso olyan elemet, amin rajta van az error class
        if(errorplace != undefined) { // Ha talaltunk ilyen mezot, tehat nem undefined
            errorplace.innerHTML = errormessage; // Akkor beleirjuk a hibauzenetunket
        }
        valid = false; // a valid valtozo erteket hamisra csereljuk
    }

    return valid; // visszaterek a lokalis valid valtozoval, ami akkor hamis ha htmlelement nem ment at a validacion, egyebkent igazzal ter vissza
}