import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

console.log(example, renderItems(data), data);





let section= document.querySelector("#root");

section.appendChild(renderItems(data));



// eventos listener 
//querySelector y document.getElementById si es necesario.
//click para el boton
//change para el select y radio.