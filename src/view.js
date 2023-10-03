export const renderItems = (data) => {

  const ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    let objeto = data[i];

    let li = document.createElement("li");

    li.innerHTML = `
   <img src="${objeto.imgUrl}" alt="Imagen de ${objeto.name}">
      <dl>
        <img src="${pokemon.imgUrl}" alt="${pokemon.id}">
        <dt>Nombre:</dt>
        <dd itemprop="name"><strong>${pokemon.name}</strong></dd>
        <dt>Corta descripción:</dt>
        <dd itemprop="shortDescription">${pokemon.shortDescription}</dd>
        <dt>Descripción:</dt>
        <dd itemprop="description">${pokemon.description}</dd>
      </dl>`;

    let fact = pokemon.fact;
    if (fact) {
      li.innerHTML += `
        <dl>
          <dt>Campo principal:</dt>
          <dd itemprop="mainField">${fact.mainField}</dd>
          <dt>Habilidades:</dt>
          <dd itemprop="habilities">${fact.habilities}</dd>
          <dt>Peso:</dt>
          <dd itemprop="weight">${fact.weight}</dd>
        </dl>`;
    }

    ul.appendChild(li);
  }

  return ul;
};


//renderItems(data)
//aqui debemos usar el createElement
//innerHTML
//appenchild
//itemscope e itemprop

