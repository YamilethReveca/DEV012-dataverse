import { filterData , sortData , computeStats } from './dataFunctions.js';
import { renderItems, renderStats } from './view.js';
import data from './data/dataset.js';


// accedemos al dom del elemento padre, la sección por su id
const section= document.querySelector("#root");
section.appendChild(renderItems(data));

//mostrar la estadistica
const pokemonStats = computeStats(data);
const mostarEstadistica= document.querySelector("#mostarEstadistica");
mostarEstadistica.appendChild(renderStats(pokemonStats));


// accedemos al dom con el querySelector a traves de su atributo.
const clearButton = document.querySelector('[data-testid="button-clear"]');
const selectFilter = document.querySelector('[data-testid="select-filter"]');
const selectSort = document.querySelector('[data-testid="select-sort"]');

//el evento addEventListener para el boton, limpia el filtro y rdenamiento 
clearButton.addEventListener("click", function (event) {
  event.preventDefault();// // Evita el comportamiento predeterminado del botón
  selectFilter.selectedIndex = 0; // 
  selectSort.selectedIndex = 0;     
  section.innerHTML="";    
  section.appendChild(renderItems(data));
  mostarEstadistica.innerHTML="";
  mostarEstadistica.appendChild(renderStats(pokemonStats));
});

// funcionamiento del filtro.
let filteredData; 
selectFilter.addEventListener("change", function (event) {
  const selectedValue = event.target.value;
  filteredData = filterData(data, "mainField", selectedValue);
  section.innerHTML="";
  section.appendChild(renderItems(filteredData));
  mostarEstadistica.innerHTML="";
  const pokemonStats = computeStats(filteredData);
  mostarEstadistica.appendChild(renderStats(pokemonStats));  
});

//ordenamiento
selectSort.addEventListener("change", function (event) {
  const selectedValue = event.target.value;
  const arraySort= selectedValue.split("-");
  const sortedData = sortData(filteredData, arraySort[0], arraySort[1]);  
  section.innerHTML = "";
  section.appendChild(renderItems(sortedData));
});

