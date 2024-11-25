
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

for(let i = 0; i< array.length; i++){ // vegigiteralok az arrayen egy novekmenyes ciklus segitsegevel
    const currentElement = array[i]; // block szinten definialok egy valtozot, amibe beleteszem az array aktualis ciklusvaltozo szamu elemet
    const row = document.createElement('div'); // Letrehozok egy div elemet
    menuContainer.appendChild(row); // Hozzafuzom ezt a sort a tablazatomhoz
    
    const rowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
    rowLastName.innerHTML = currentElement.lastName; // a cella tartalma az aktualis elem lastname tulajdonsaga
    row.appendChild(rowLastName); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
    
    const rowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
    rowFirstName.innerHTML = currentElement.firstName; // a cella tartalma az aktualis elem firstname tulajdonsaga
    row.appendChild(rowFirstName); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
    
    const rowFirstName2 =document.createElement('span'); // Letrehozok egy uj span elemet
    rowFirstName2.innerHTML = currentElement.firstName2; // a cella tartalma az aktualis elem firstname2 tulajdonsaga
    row.appendChild(rowFirstName2); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
}

/**
 * Ennel a lepesnel a feluleten megjelenhet undefined
 * alternativa lehet
for(const currentElement of array){
    const row = document.createElement('div'); // Letrehozok egy div elemet
    menuContainer.appendChild(row); // Hozzafuzom ezt a sort a tablazatomhoz
    
    const rowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
    rowLastName.innerHTML = currentElement.lastName; // a cella tartalma az aktualis elem lastname tulajdonsaga
    row.appendChild(rowLastName); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
    
    const rowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
    rowFirstName.innerHTML = currentElement.firstName; // a cella tartalma az aktualis elem firstname tulajdonsaga
    row.appendChild(rowFirstName); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
    
    const rowFirstName2 =document.createElement('span'); // Letrehozok egy uj span elemet
    rowFirstName2.innerHTML = currentElement.firstName2; // a cella tartalma az aktualis elem firstname2 tulajdonsaga
    row.appendChild(rowFirstName2); // Hozzafuzom a most letrehozott spant a korabban letrehozott sorhoz
}
 */
