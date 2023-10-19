export const renderItems = (data) => {

  const ul = document.createElement("ul");// creamos el ul
  
  for(let i= 0; i<data.length; i++){  // ciclo for para recorrer los arreglos 
  
  let pokemon= data[i]; // guardamos en una variable el objeto pokémon de todos los pokemones
  
  let li= document.createElement("li");  // creamos en li
  li.classList.add("tarjetas");
  
  li.innerHTML= "";  // inicializamos el li vacio.
  let content =`<dl itemscope itemtype="tarjetaPokemon"><img class="imgTarjeta" src="${pokemon.imgUrl}" alt="${pokemon.id}">
  <dt><strong>Nombre:</dt><dd itemprop="name">${pokemon.name}</strong></dd>
  <dt><strong>Corta descripción:</strong></dt><dd itemprop="shortDescription">${pokemon.shortDescription}</dd>
  <dt><strong>Descripción:</strong></dt><dd class="estilo" itemprop="description">${pokemon.description}</dd>`;
  
  // Accede a los valores dentro del objeto 'fact'
  
  let fact = pokemon.fact;
  if (fact) {
    content += `<dt><strong>Campo principal:</strong></dt><dd itemprop="mainField">${fact.mainField}</dd>
    <dt><strong>Habilidades:</strong></dt><dd itemprop="habilities">${fact.habilities}</dd>
    <dt><strong>Peso:</strong></dt><dd itemprop="weight">${fact.weight} Kg</dd></dl>`;
  }
  
  li.innerHTML=content;
  
  ul.appendChild(li)                       
  }
  
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
  
  // Agregar los elementos de lista a la lista desordenada
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