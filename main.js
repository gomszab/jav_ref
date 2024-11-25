
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

const menuHeader = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatom fejlecet fogja tartalmazni
menuContainer.appendChild(menuHeader); // Hozzafuzom a letrehozott elemet a tablazatomhoz

const lastName = document.createElement('span'); // Letrehozok egy span elemet ami a fejlecem egy cellaja lesz
lastName.innerHTML = array[0].lastName; // a cella tartalma az array elso elem lastname tulajdonsaganak erteke lesz
menuHeader.appendChild(lastName); // Hozzafuzom a fejlechez a letrehozott elemet

const firstName = document.createElement('span'); // Letrehozok egy ujabb span elemet, ami a fejlecem egy masik cellaja lesz
firstName.innerHTML = array[0].firstName; // a cella tartalma az array elso elem firstName tulajdonsaganak erteke lesz
menuHeader.appendChild(firstName); // A letrehozott spant hozzafuzom a fejlechez

const menuFirstRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom elso soranak
menuContainer.appendChild(menuFirstRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuFirstRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowLastName.innerHTML = array[1].lastName; // a cella tartalma az array masodik elem lastname erteke lesz
menuFirstRow.appendChild(menuFirstRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName.innerHTML = array[1].firstName; // a cella tartalma az array masodik elem  firstName erteke lesz
menuFirstRow.appendChild(menuFirstRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName2 =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName2.innerHTML = array[1].firstName2; // a cella tartalma az array masodik elem firstName2 erteke lesz
menuFirstRow.appendChild(menuFirstRowFirstName2); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuSecondRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuSecondRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuSecondRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowLastName.innerHTML = array[2].lastName; // a cella tartalma az array harmadik elem lastName erteke lesz
menuSecondRow.appendChild(menuSecondRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuSecondRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowFirstName.innerHTML = array[2].firstName; // a cella tartalma az array harmadik elem firstName erteke lesz
menuSecondRow.appendChild(menuSecondRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuThirdRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuThirdRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuThirdRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowLastName.innerHTML = array[3].lastName; // a cella tartalma az array negyedik elem lastName erteke lesz
menuThirdRow.appendChild(menuThirdRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz

const menuThirdRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowFirstName.innerHTML = array[3].firstName; // a cella tartalma az array negyedik elem firstName erteke lesz
menuThirdRow.appendChild(menuThirdRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz
// a valtozok lehet constok, mert csak egyszer adunk erteket neki, kesobb csak a letrehozott objektum tulajdonsagait modositjuk