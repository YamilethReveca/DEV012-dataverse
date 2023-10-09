import { filterData , sortData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';


//console.log(example, renderItems(data), data);


// accedemos al dom del elemento padre, la sección por su id


let section= document.querySelector("#root");

section.appendChild(renderItems(data));




// accedemos al dom con el querySelector a traves de su atributo.
const clearButton = document.querySelector('[data-testid="button-clear"]');
const selectFilter = document.querySelector('[data-testid="select-filter"]');
const selectSort = document.querySelector('[data-testid="select-sort"]')



//el evento addEventListener para el boton, limpia el filtro,ordenamiento y los input radios.
clearButton.addEventListener("click", function (event) {
    event.preventDefault();// // Evita el comportamiento predeterminado del botón
    selectFilter.selectedIndex = -1; // Establece la selección del select en ninguna opción (-1)
    selectSort.selectedIndex = -1;
    
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
    console.log("filtrado", filteredData)


     //ordenamiento

   selectSort.addEventListener("change", function () {
      const selectedValue = selectSort.value;
      const arraySort= selectedValue.split("-");
      const sortedData = sortData(filteredData, arraySort[0], arraySort[1]);
        
      
        // Actualiza la página visualmente con los datos ordenados
        section.innerHTML = "";
        section.appendChild(renderItems(sortedData));

       

        console.log("data ordenamiento" , data) 
        console.log("seleccion ordenamiento", selectedValue)
        console.log("data asc o desc", sortedData)
      
    });
  });









// eventos listener 
//querySelector y document.getElementById si es necesario.
//click para el boton
//change para el select y radio.