export const filterData=(data, filterBy, value)=>{
  if (!data || !Array.isArray(data)) {
    return [];
  }

  switch (filterBy) {
  case "mainField":
    return data.filter((pokemon) => pokemon.fact["mainField"] === value);

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
  case "habilities":
    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.fact.habilities.localeCompare(b.fact.habilities);
      } else if (sortOrder === "desc") {
        return b.fact.habilities.localeCompare(a.fact.habilities);
      }
    });
    break;
  case "weight":
    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        return (a.fact.weight) - (b.fact.weight);
      } else if (sortOrder === "desc") {
        return (b.fact.weight) - (a.fact.weight);
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
  const totalWeight = (data.reduce((sum, pokemon) => sum + parseFloat(pokemon.fact.weight), 0)).toFixed(decimalPlaces); 
  const averageWeight = (totalWeight / data.length).toFixed(decimalPlaces); 
  const maxWeight = Math.max(...data.map(pokemon => parseFloat(pokemon.fact.weight))).toFixed(decimalPlaces); 
  const minWeight = Math.min(...data.map(pokemon => parseFloat(pokemon.fact.weight))).toFixed(decimalPlaces); 

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