export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites


const ul = document.createElement("ul");// creamos el ul


for(let i= 0; i<data.length; i++){  // ciclo for para recorrer los arreglos 



let pokemon= data[i]; // guardamos en una variable el objeto pokémon de todos los pokemones


let li= document.createElement("li");  // creamos en li

li.innerHTML= "";  // inicializamos el li vacio.

li.innerHTML=li.innerHTML + `<dl><img src="${pokemon.imgUrl}" alt="${pokemon.id}">
<dt>Nombre:</dt><dd itemprop="name"><strong>${pokemon.name}</strong></dd>
<dt>Corta descripción:</dt><dd itemprop="shortDescription">${pokemon.shortDescription}</dd>
<dt>Descripción:</dt><dd itemprop="description">${pokemon.description}</dd></dl>`


// Accede a los valores dentro del objeto 'fact'
let fact = pokemon.fact;
if (fact) {
  li.innerHTML += `<dl><dt>Campo principal:</dt><dd itemprop="mainField">${fact.mainField}</dd>
  <dt>Habilidades:</dt><dd itemprop="habilities">${fact.habilities}</dd>
  <dt>Peso:</dt><dd itemprop="weight">${fact.weight}</dd></dl>`;
}

ul.appendChild(li)                       
}


  return ul;
};



//renderItems(data)
//aqui debemos usar el createElement
//innerHTML
//appenchild
//itemscope e itemprop