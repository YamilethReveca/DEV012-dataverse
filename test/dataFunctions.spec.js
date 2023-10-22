import { filterData, sortData, computeStats } from '../src/dataFunctions.js';

describe('Pruebas para dataFunctions.js', () => {
  const testData = [
    {
      name: 'Cubchoo',
      facts: { mainField: 'Hielo', pokemonWeight: 8.50 },
    },
    {
      name: 'Glaceon',
      facts: { mainField: 'Hielo', pokemonWeight: 25.90 },
    },
    {
      name: 'Eiscue',
      facts: { mainField: 'Hielo', pokemonWeight: 89.00 },
    },
  ];

  it('filterData debería filtrar por mainField', () => {
    const filteredData = filterData(testData, 'mainField', 'Hielo');
    expect(filteredData).toEqual([
      {
        name: 'Cubchoo',
        facts: { mainField: 'Hielo', pokemonWeight: 8.50 },
      },
      {
        name: 'Glaceon',
        facts: { mainField: 'Hielo', pokemonWeight: 25.90 },
      },
      {
        name: 'Eiscue',
        facts: { mainField: 'Hielo', pokemonWeight: 89.00 },
      },
    ]);
  });

  it('filterData debería devolver un arreglo vacío si no se encuentra coincidencia', () => {
    const filteredData = filterData(testData, 'mainField', 'Fuego');
    expect(filteredData).toEqual([]);
  });

  it('sortData debería ordenar de manera ascendente por pokemonWeight', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'asc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Cubchoo', 'Glaceon', 'Eiscue']);
  });

  it('sortData debería ordenar de manera descendente por pokemonWeight', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'desc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Eiscue', 'Glaceon', 'Cubchoo']);
  });

  it('computeStats debería calcular estadísticas de peso', () => {
    const stats = computeStats(testData);
    expect(stats.totalWeight).toBe('123.40');
    expect(stats.averageWeight).toBe('41.13');
    expect(stats.maxWeight).toBe('89.00');
    expect(stats.minWeight).toBe('8.50');
  });
});
