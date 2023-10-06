import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);





let section= document.querySelector("#root");

section.appendChild(renderItems(data));

// eventos listener 
//querySelector y document.getElementById si es necesario.
//click para el boton
//change para el select 
const selectFilter = document.querySelector('[name="type"]');
selectFilter.addEventListener('change', function() {
  const selectedValue = selectFilter.value;
  
  // Filtra los Pokémon según el valor seleccionado (fact.mainField)
  const filteredData = data.filter(item => item.fact.mainField === selectedValue);
  
  section.innerHTML = '';
  section.appendChild(renderItems(filteredData));
});
