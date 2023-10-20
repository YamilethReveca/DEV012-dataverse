export const renderItems = (data) => {

  const ul = document.createElement("ul");// creamos el ul

  data.forEach(pokemon => { // ciclo for para recorrer los arreglos 

  
    const li= document.createElement("li");  // creamos en li
    li.classList.add("tarjetas");
    const itemscope = document.createAttribute("itemscope");
    const itemtype = document.createAttribute("itemtype");
    itemtype.value="tarjetaPokemon";
    li.setAttributeNode(itemscope);
    li.setAttributeNode(itemtype);
  
    li.innerHTML= "";  // inicializamos el li vacio.
    let content =`<dl><img class="imgTarjeta" src="${pokemon.imgUrl}" alt="${pokemon.id}">
<dt><strong>Nombre:</dt><dd itemprop="name">${pokemon.name}</strong></dd>
<dt><strong>Corta descripción:</strong></dt><dd itemprop="shortDescription">${pokemon.shortDescription}</dd>
<dt><strong>Descripción:</strong></dt><dd class="estilo" itemprop="description">${pokemon.description}</dd>`;



    const fact = pokemon.fact;
    if (fact) {
      content += `<dt><strong>Campo principal:</strong></dt><dd itemprop="mainField">${fact.mainField}</dd>
  <dt><strong>Habilidades:</strong></dt><dd itemprop="habilities">${fact.habilities}</dd>
  <dt><strong>Peso:</strong></dt><dd itemprop="weight">${fact.weight} Kg</dd></dl>`;
    }

    li.innerHTML=content;

    ul.appendChild(li)                       
  });

  return ul;
};
// // desde aqui vamos a construir la estadistica
export const renderStats=(estadisticas)=>{

  const ulElement = document.createElement("ul");
  const li1 = document.createElement("li");
  li1.innerHTML = `Promedio de peso: ${estadisticas.averageWeight} Kg`;

  const li2 = document.createElement("li");
  li2.innerHTML = `Suma de peso: ${estadisticas.totalWeight} Kg` ;

  const li3 = document.createElement("li");
  li3.innerHTML = `Minimo peso: ${estadisticas.minWeight} Kg`;

  const li4 = document.createElement("li");
  li4.innerHTML = `Máximo peso: ${estadisticas.maxWeight} Kg`;


  ulElement.appendChild(li1);
  ulElement.appendChild(li2);
  ulElement.appendChild(li3);
  ulElement.appendChild(li4);

  return ulElement;
}

//renderItems(data)
//aqui debemos usar el createElement
//innerHTML
//appenchild
//itemscope e itemprop