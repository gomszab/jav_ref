
const headerObj = { // HeaderObj objektum letrehozasa
    lastName: "Vezeteknev", // headerobj lastname tulajdonsaganak ertekadas
    firstName: "Keresztnev" // headerobj firstName tulajdonsaganak ertekadas
};

const firstRowElement = { // firstRowElement objektum letrehozasa
    lastName : 'Dienes', // firstRowElement lastname tulajdonsaganak ertekadas
    firstName: 'Zoltán', // firstRowElement firstName tulajdonsaganak ertekadas
    firstName2: 'Pál' // firstRowElement firstName2 tulajdonsaganak ertekadas
}

const secondRowElement = { // secondRowElement objektum letrehozasa
    lastName : 'Obádovics', // secondRowElement lastname tulajdonsaganak ertekadas
    firstName: 'Gyula', // secondRowElement firstName tulajdonsaganak ertekadas
}

const thirdRowElement ={ // thirdRowElement objektum letrehozasa
    lastName : 'Dávid', // thirdRowElement lastname tulajdonsaganak ertekadas
    firstName: 'Gyula', // thirdRowElement firstName tulajdonsaganak ertekadas
}



const menuContainer = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(menuContainer) // Hozzateszem bodyhoz

const menuHeader = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatom fejlecet fogja tartalmazni
menuContainer.appendChild(menuHeader); // Hozzafuzom a letrehozott elemet a tablazatomhoz

const lastName = document.createElement('span'); // Letrehozok egy span elemet ami a fejlecem egy cellaja lesz
lastName.innerHTML = headerObj.lastName; // a cella tartalma a headerObj lastname tulajdonsaganak erteke lesz
menuHeader.appendChild(lastName); // Hozzafuzom a fejlechez a letrehozott elemet

const firstName = document.createElement('span'); // Letrehozok egy ujabb span elemet, ami a fejlecem egy masik cellaja lesz
firstName.innerHTML = headerObj.firstName; // a cella tartalma a headerObj firstName tulajdonsaganak erteke lesz
menuHeader.appendChild(firstName); // A letrehozott spant hozzafuzom a fejlechez

const menuFirstRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom elso soranak
menuContainer.appendChild(menuFirstRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuFirstRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowLastName.innerHTML = firstRowElement.lastName; // a cella tartalma a firstRowElement objektum lastname erteke lesz
menuFirstRow.appendChild(menuFirstRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName.innerHTML = firstRowElement.firstName; // a cella tartalma a firstRowElement objektum firstName erteke lesz
menuFirstRow.appendChild(menuFirstRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName2 =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName2.innerHTML = firstRowElement.firstName2; // a cella tartalma a firstRowElement objektum firstName2 erteke lesz
menuFirstRow.appendChild(menuFirstRowFirstName2); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuSecondRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuSecondRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuSecondRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowLastName.innerHTML = secondRowElement.lastName; // a cella tartalma a secondRowElement objektum lastName erteke lesz
menuSecondRow.appendChild(menuSecondRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuSecondRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowFirstName.innerHTML = secondRowElement.firstName; // a cella tartalma a secondRowElement objektum firstName erteke lesz
menuSecondRow.appendChild(menuSecondRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuThirdRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuThirdRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuThirdRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowLastName.innerHTML = thirdRowElement.lastName; // a cella tartalma a thirdRowElement objektum lastName erteke lesz
menuThirdRow.appendChild(menuThirdRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz

const menuThirdRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowFirstName.innerHTML = thirdRowElement.firstName; // a cella tartalma a thirdRowElement objektum firstName erteke lesz
menuThirdRow.appendChild(menuThirdRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz
// a valtozok lehet constok, mert csak egyszer adunk erteket neki, kesobb csak a letrehozott objektum tulajdonsagait modositjuk