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
const selectSortAsc_Desc = document.querySelector('[name="sort-order"]');

//el evento addEventListener para el boton, limpia el filtro y rdenamiento 
clearButton.addEventListener("click", function (event) {
  event.preventDefault();// // Evita el comportamiento predeterminado del botón
  selectFilter.selectedIndex = 0;
  selectSort.selectedIndex = 0; 
  selectSortAsc_Desc.selectedIndex= 0;
  section.innerHTML="";
  filteredData=data;    
  section.appendChild(renderItems(data));
  mostarEstadistica.innerHTML="";
  mostarEstadistica.appendChild(renderStats(pokemonStats));
});

// funcionamiento del filtro.
let filteredData= data; 
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
selectSortAsc_Desc.addEventListener("change", function (event){
  const selectedValue = event.target.value;
  
  const sortOrder = selectSort.value;
  const sortedData = sortData(filteredData, sortOrder, selectedValue);  
  section.innerHTML = "";
  section.appendChild(renderItems(sortedData));
});

selectSort.addEventListener("change", function (event){
  const selectedValue = event.target.value;
  
  const sortValue = selectSortAsc_Desc.value;
  const sortedData = sortData(filteredData, selectedValue, sortValue);  
  section.innerHTML = "";
  section.appendChild(renderItems(sortedData));
});

