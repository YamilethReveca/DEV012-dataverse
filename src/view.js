export const renderItems = (data) => {
  console.log(data);

  const ul = document.createElement("ul");

  for (let i = 0; i < data.length; i++) {
    let pokemon = data[i];

    let li = document.createElement("li");

    li.innerHTML = `
      <dl>
        <img src="${pokemon.imgUrl}" alt="${pokemon.id}">
        <br>
        <dt>Nombre:</dt>
        <dd itemprop="name"><strong>${pokemon.name}</strong></dd>
        <br>
        <dt>Corta descripción:</dt>
        <dd itemprop="shortDescription">${pokemon.shortDescription}</dd>
        <br>
        <dt>Descripción:</dt>
        <dd itemprop="description">${pokemon.description}</dd>
      </dl>`;

    let fact = pokemon.fact;
    if (fact) {
      li.innerHTML += `
        <dl>
          <dt>Campo principal:</dt>
          <dd itemprop="mainField">${fact.mainField}</dd>
          <br></br>
          <dt>Habilidades:</dt>
          <dd itemprop="habilities">${fact.habilities}</dd>
          <br></br>
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

