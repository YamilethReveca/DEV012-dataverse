export const filterData=(data, filterBy, value)=>{
  if (!data || !Array.isArray(data)) {
    return [];
  }

  switch (filterBy) {
  case "mainField":
    return data.filter((pokemon) => pokemon.facts["mainField"] === value);

  default:
    return data;
  } 

}

export const sortData = (data, sortBy, sortOrder) => { 
  const sortedData = [...data]; // Clona el arreglo de datos para no modificar el original

  switch (sortBy) {
  case "name":
    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.name.localeCompare(b.name);
      } else if (sortOrder === "desc") {
        return b.name.localeCompare(a.name);
      }
    });
    break;
  case "pokemonHabilities":
    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.facts.pokemonHabilities.localeCompare(b.facts.pokemonHabilities);
      } else if (sortOrder === "desc") {
        return b.facts.pokemonHabilities.localeCompare(a.facts.pokemonHabilities);
      }
    });
    break;
  case "pokemonWeight":
    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return (a.facts.pokemonWeight) - (b.facts.pokemonWeight);
      } else if (sortOrder === "desc") {
        return (b.facts.pokemonWeight) - (a.facts.pokemonWeight);
      }
    });
    break;
  default:
    // Si no se proporciona un campo válido, devuelve los datos sin cambios
    return data;
  }
  return sortedData;

}
// estadistica
export const computeStats = (data, decimalPlaces = 2) => {
  const totalWeight = (data.reduce((sum, pokemon) => sum + parseFloat(pokemon.facts.pokemonWeight), 0)).toFixed(decimalPlaces); 
  const averageWeight = (totalWeight / data.length).toFixed(decimalPlaces); 
  const maxWeight = Math.max(...data.map(pokemon => parseFloat(pokemon.facts.pokemonWeight))).toFixed(decimalPlaces); 
  const minWeight = Math.min(...data.map(pokemon => parseFloat(pokemon.facts.pokemonWeight))).toFixed(decimalPlaces); 

  return {
    totalWeight, 
    averageWeight, 
    maxWeight, 
    minWeight, 
  };
}

// export const anotherExample = () => {
//  return [];
// };

//filterData(data, filterBy, value)
//sortData(data, sortBy, sortOrder)
//computeStats(data)
