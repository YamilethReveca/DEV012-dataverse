// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//filterData(data, filterBy, value)

export const filterData=(data, filterBy, value)=>{
  if (!data || !Array.isArray(data)) {
    return [];
  }

   switch (filterBy) {
    case "mainField":
      return data.filter((pokemon) => pokemon.fact.mainField === value);

    default:
      return data;
  }

}

export const sortData = (data, sortBy, sortOrder) => {
  if (!data || !Array.isArray(data)) {
    return [];
  }

  switch (sortBy) {
    case "name":
      // Ordena por nombre
      data.sort((a, b) => (a.name > b.name ? 1 : -1));
      break;

    case "habilities":
      // Ordena por habilidades (puedes personalizar la lógica según tus datos)
      data.sort((a, b) => (a.fact.habilities > b.fact.habilities ? 1 : -1));
      break;

    case "shortDescription":
      // Ordena por corta descripción
      data.sort((a, b) => (a.shortDescription > b.shortDescription ? 1 : -1));
      break;

    default:
      // En caso de valor incorrecto, devuelve los datos sin cambios
      return data;
  }

  // Si el orden es descendente, invierte el arreglo
  if (sortOrder === "desc") {
    data.reverse();
  }

  return data;
};





export const anotherExample = () => {
  return [];
};



//filterData(data, filterBy, value)
//sortData(data, sortBy, sortOrder)
//computeStats(data)