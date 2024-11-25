
const lastnameHeaderLabel = 'Vezeteknev'
const firstnameHeaderLabel = 'Keresztnev'

const firstRowLastNameValue = 'Dienes';
const firstRowFirstNameValue = 'Zoltán';
const firstRowFirstName2Value = 'Pál';
const secondRowLastNameValue = 'Obádovics';
const secondRowFirstNameValue = 'Gyula';
const thirdRowLastNameValue = 'Dávid';
const thirdRowFirstNameValue = 'Gyula';


const menuContainer = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(menuContainer) // Hozzateszem bodyhoz

const menuHeader = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatom fejlecet fogja tartalmazni
menuContainer.appendChild(menuHeader); // Hozzafuzom a letrehozott elemet a tablazatomhoz

const lastName = document.createElement('span'); // Letrehozok egy span elemet ami a fejlecem egy cellaja lesz
lastName.innerHTML = lastnameHeaderLabel; // A tagek kozott erteknek megadom a vezeteknev stringet (html nyelven: <span>Vezeteknev</span>)
menuHeader.appendChild(lastName); // Hozzafuzom a fejlechez a letrehozott elemet

const firstName = document.createElement('span'); // Letrehozok egy ujabb span elemet, ami a fejlecem egy masik cellaja lesz
firstName.innerHTML = firstnameHeaderLabel; // a span tagek kozott erteknek megadom a Keresztnevet
menuHeader.appendChild(firstName); // A letrehozott spant hozzafuzom a fejlechez

const menuFirstRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom elso soranak
menuContainer.appendChild(menuFirstRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuFirstRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowLastName.innerHTML = firstRowLastNameValue; // Megadom a tagek kozott erteket, értéke a kiszervezett változó értékével lesz egyenlő
menuFirstRow.appendChild(menuFirstRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName.innerHTML = firstRowFirstNameValue; // Megadom a tagek kozott erteket, értéke a kiszervezett változó értékével lesz egyenlő
menuFirstRow.appendChild(menuFirstRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName2 =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName2.innerHTML = firstRowFirstName2Value; // Megadom a tagek kozott erteket, értéke a kiszervezett változó értékével lesz egyenlő
menuFirstRow.appendChild(menuFirstRowFirstName2); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuSecondRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuSecondRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuSecondRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowLastName.innerHTML = secondRowLastNameValue; // Megadom a tagek kozott erteket, értéke a kiszervezett változó értékével lesz egyenlő
menuSecondRow.appendChild(menuSecondRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuSecondRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowFirstName.innerHTML = secondRowFirstNameValue; // Megadom a tagek kozott erteket, értéke a kiszervezett változó értékével lesz egyenlő
menuSecondRow.appendChild(menuSecondRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuThirdRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuThirdRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuThirdRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowLastName.innerHTML = thirdRowLastNameValue; // Megadom a tagek kozott erteket, értéke a kiszervezett változó értékével lesz egyenlő
menuThirdRow.appendChild(menuThirdRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz

const menuThirdRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowFirstName.innerHTML = thirdRowFirstNameValue; // Megadom a tagek kozott erteket, értéke a kiszervezett változó értékével lesz egyenlő
menuThirdRow.appendChild(menuThirdRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz
// a valtozok lehet constok, mert csak egyszer adunk erteket neki, kesobb csak a letrehozott objektum tulajdonsagait modositjuk