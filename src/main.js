
import { filterData } from './dataFunctions.js';
import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';



import data from './data/dataset.js';


//console.log(example, renderItems(data), data);




// accedemos al dom del elemento padre, la sección por su id
// creamos el 

let section= document.querySelector("#root");

section.appendChild(renderItems(data));




// accedemos al dom con el querySelector a traves de su atributo.
const clearButton = document.querySelector('[data-testid="button-clear"]');
const selectFilter = document.querySelector('[data-testid="select-filter"]')
const selectSort  = document.querySelector('[data-testid="select-sort"]')
const inputRadios = document.querySelectorAll('input[type="radio"][name="sort-order"]');

// input tipo radio
const radioAsc = document.querySelector('input[type="radio"][value="asc"]');
const radioDesc = document.querySelector('input[type="radio"][value="desc"]');




//el evento addEventListener para el boton, limpia el filtro,ordenamiento y los input radios.
clearButton.addEventListener("click", function (event) {
    event.preventDefault();
    selectFilter.selectedIndex = -1;
    selectSort.selectedIndex = -1;
    inputRadios.forEach(function (radio) {
        radio.checked = false;
    });

    section.innerHTML="";

   section.appendChild(renderItems(data));

});


// funcionamiento del filtro. 
selectFilter.addEventListener("change", function () {
    const selectedValue = selectFilter.value;

    const filteredData = filterData(data, "mainField", selectedValue);

    section.innerHTML="";
    section.appendChild(renderItems(filteredData));




console.log("data" , data) 
console.log("seleccion", selectedValue)
console.log(filteredData)

});



// ordenamiento 




selectSort.addEventListener("change", function () {
    const selectedValue = selectSort.value;

    const sortOrder = radioAsc.checked ? "asc" : radioDesc.checked ? "desc" : "";

    const sortedData = sortData(data, selectedValue, sortOrder);

    section.innerHTML="";
    section.appendChild(renderItems(sortedData));
    

   


console.log("data" , data) 
console.log("seleccion", selectedValue)
console.log(sortOrder)

});









// eventos listener 
//querySelector y document.getElementById si es necesario.
//click para el boton
//change para el select y radio.