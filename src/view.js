export const renderItems = (data) => {

  const ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    let objeto = data[i];

    let li = document.createElement("li");
  
   li.innerHTML = `
   <img src="${objeto.imgUrl}" alt="Imagen de ${objeto.name}">
   <dl>
     <dt>Nombre:</dt>
     <dd itemprop="name">${objeto.name}</dd>
     <dt>Corta descripción:</dt>
     <dd itemprop="shortDescription">${objeto.shortDescription}</dd>
     <dt>Descripción:</dt>
     <dd itemprop="description">${objeto.description}</dd>
     <dt>Campo principal</dt>
     <dd itemprop="mainField">${objeto.mainField}</dd>
     <dt>Habilidades:</dt>
     <dd itemprop="habilities">${objeto.habilities}</dd>
     <dt>Peso:</dt>
     <dd itemprop="wight">${objeto.wight}</dd>
   </dl>
 `;
     
 ul.appendChild(li);
}

  const pokemon = document.querySelector("ul");

  pokemon.appendChild(li);

  return 'example';
};


