const menuContainer = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatomat fogja tartalmazni
document.body.appendChild(menuContainer) // Hozzateszem bodyhoz

const menuHeader = document.createElement('div'); // Letrehozok egy div elemet, ami a tablazatom fejlecet fogja tartalmazni
menuContainer.appendChild(menuHeader); // Hozzafuzom a letrehozott elemet a tablazatomhoz

const lastName = document.createElement('span'); // Letrehozok egy span elemet ami a fejlecem egy cellaja lesz
lastName.innerHTML = 'Vezeteknev'; // A tagek kozott erteknek megadom a vezeteknev stringet (html nyelven: <span>Vezeteknev</span>)
menuHeader.appendChild(lastName); // Hozzafuzom a fejlechez a letrehozott elemet

const firstName = document.createElement('span'); // Letrehozok egy ujabb span elemet, ami a fejlecem egy masik cellaja lesz
firstName.innerHTML = 'Keresztnev'; // a span tagek kozott erteknek megadom a Keresztnevet
menuHeader.appendChild(firstName); // A letrehozott spant hozzafuzom a fejlechez

const menuFirstRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom elso soranak
menuContainer.appendChild(menuFirstRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuFirstRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowLastName.innerHTML = 'Dienes'; // Megadom a tagek kozott erteket
menuFirstRow.appendChild(menuFirstRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName.innerHTML = 'Zoltán'; // Megadom a tagek kozott erteket
menuFirstRow.appendChild(menuFirstRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuFirstRowFirstName2 =document.createElement('span'); // Letrehozok egy uj span elemet
menuFirstRowFirstName2.innerHTML = 'Pál'; // Megadom a tagek kozott erteket
menuFirstRow.appendChild(menuFirstRowFirstName2); // Hozzafuzom a most letrehozott spant, a tablazatom elso sorahoz

const menuSecondRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuSecondRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuSecondRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowLastName.innerHTML = 'Obádovics'; // Megadom a tagek kozott erteket
menuSecondRow.appendChild(menuSecondRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuSecondRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuSecondRowFirstName.innerHTML = 'Gyula'; // Megadom a tagek kozott erteket
menuSecondRow.appendChild(menuSecondRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom masodik sorahoz

const menuThirdRow = document.createElement('div'); // Letrehozok egy div elemet a tablazatom masodik soranak
menuContainer.appendChild(menuThirdRow); // Hozzafuzom ezt a sort a tablazatomhoz

const menuThirdRowLastName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowLastName.innerHTML = 'Obádovics'; // Megadom a tagek kozott erteket
menuThirdRow.appendChild(menuThirdRowLastName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz

const menuThirdRowFirstName =document.createElement('span'); // Letrehozok egy uj span elemet
menuThirdRowFirstName.innerHTML = 'Gyula'; // Megadom a tagek kozott erteket
menuThirdRow.appendChild(menuThirdRowFirstName); // Hozzafuzom a most letrehozott spant, a tablazatom harmadik sorahoz
// a valtozok lehet constok, mert csak egyszer adunk erteket neki, kesobb csak a letrehozott objektum tulajdonsagait modositjuk