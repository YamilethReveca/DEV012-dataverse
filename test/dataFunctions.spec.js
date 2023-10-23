import { filterData, sortData, computeStats } from '../src/dataFunctions.js';
import { data } from './data.js';

const TEXT_POKEMON_FUEGO=[{
  "id": "arcanine",
  "name": "Arcanine",
  "shortDescription": "Legendario de Fuego",
  "description": "Arcanine es una criatura imponente y majestuosa en el mundo Pokémon. Con su pelaje dorado y su mirada feroz, encarna la fuerza y la nobleza. Es conocido por su velocidad y agilidad excepcionales, capaz de correr a velocidades asombrosas. Su lealtad hacia su entrenador es inquebrantable, y es un protector valiente. Arcanine también puede controlar el fuego, lanzando llamas ardientes desde su boca en poderosos ataques. Su presencia imponente y su habilidad para enfrentar cualquier desafío lo convierten en un Pokémon verdaderamente impresionante y respetado en el mundo Pokémon.",
  "imageUrl": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/5/50/latest/20150621185018/Arcanine.png/1200px-Arcanine.png",
  "facts": {
    "mainField": "Fuego",
    "pokemonHabilities": "Intimidación",
    "pokemonWeight": "155.00",
  }
},
{
  "id": "charmander",
  "name": "Charmander",
  "shortDescription": "Lagartija",
  "description": "Charmander es un pequeño Pokémon de tipo Fuego con una llama en su cola. Es juguetón pero también vulnerable a la lluvia, ya que su llama se debilita con la humedad. Evoluciona a Charmeleon y finalmente a Charizard. Su carácter amigable y su determinación lo hacen un compañero leal y valiente. Charmander es conocido por su habilidad para lanzar llamas desde su cola y por su objetivo de convertirse en un poderoso dragón. Es un ícono en la franquicia Pokémon y un favorito de los entrenadores de todo el mundo.",
  "imageUrl":"https://www.pngmart.com/files/13/Charmander-PNG-Transparent.png",
  "facts": {
    "mainField": "Fuego",
    "pokemonHabilities": "Mar Llamas",
    "pokemonWeight": "8.50",
  }
},
{
  "id": "magby",
  "name": "Magby",
  "shortDescription": "Espítu vital",
  "description": "Magby es un pequeño Pokémon bebé de tipo Fuego. Su cuerpo está cubierto de piel roja y una llama en su cabeza siempre arde intensamente. Esta llama es un indicador de su nivel de energía y emoción. Magby disfruta de jugar con fuego y se emociona fácilmente, lo que puede hacer que su llama arda más intensamente. Con el tiempo, evoluciona en Magmar cuando se le expone a una piedra fuego. A pesar de su apariencia tierna, Magby posee un potencial incendiario y un espíritu ardiente que lo hace intrigante para los entrenadores.",
  "imageUrl": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/42/latest/20230629034211/Magby.png/1200px-Magby.png",
  "facts": {
    "mainField": "Fuego",
    "pokemonHabilities": "Cuerpo Llama",
    "pokemonWeight": "21.40",
  }
}];

const TEXT_POKEMON_AGUA= [{
  "id": "squirtle",
  "name": "Squirtle",
  "shortDescription": "Tortuga",
  "description": "Squirtle es un Pokémon de tipo Agua que se asemeja a una tortuga pequeña con una concha en su espalda. Su característica más destacada es la habilidad para expulsar poderosos chorros de agua desde su boca. Este líquido lo utiliza tanto para atacar como para defenderse. Squirtle es conocido por su naturaleza amigable y juguetona, pero también muestra determinación y valentía cuando es necesario. Es un compañero leal que evoluciona a Wartortle y luego a Blastoise, convirtiéndose en un poderoso Pokémon acuático con cañones de agua en su espalda.",
  "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png",
  "facts": {
    "mainField": "Agua",
    "pokemonHabilities": "Torrente",
    "pokemonWeight": "9.00",
  }
},

{
  "id": "vaporeon",
  "name": "Vaporeon",
  "shortDescription": "Pokémon Burbuja",
  "description": "Vaporeon es un elegante Pokémon de tipo Agua con una apariencia similar a un ser marino. Su cuerpo está cubierto de aletas que le permiten nadar velozmente en el agua. Tiene una esponjosa y hermosa aleta en su cabeza y una cola larga y esponjosa. Vaporeon tiene la capacidad de controlar y manipular el agua a su voluntad, creando ataques acuáticos poderosos. Es una criatura leal y cariñosa que evoluciona de Eevee cuando se expone a una piedra agua. Su gracia y habilidades acuáticas lo convierten en un Pokémon admirado tanto por entrenadores como por fanáticos.",
  "imageUrl": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/f/fc/latest/20210627185640/Vaporeon.png/1200px-Vaporeon.png",
  "facts": {
    "mainField": "Agua",
    "pokemonHabilities": "Absorbe Agua",
    "pokemonWeight": "29.00",
  }
},

{
  "id": "milotic",
  "name": "Milotic",
  "shortDescription":"Pokémon Tierno",
  "description": "Milotic es un Pokémon majestuoso de tipo Agua. Su apariencia es asombrosa, con una larga y fluida melena azul y escamas de colores brillantes en su cuerpo. Se dice que Milotic se origina a partir de Feebas, que evoluciona mediante una belleza extrema. Su tranquilidad y elegancia contrastan con su fuerza en batalla, donde puede lanzar ataques acuáticos devastadores. La belleza y gracia de Milotic lo convierten en un ser querido por entrenadores y fans, además de ser considerado uno de los Pokémon más hermosos y cautivadores del mundo Pokémon.",
  "imageUrl": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/b/b1/latest/20230302020429/Milotic.png/800px-Milotic.png",
  "facts": {
    "mainField": "Agua",
    "pokemonHabilities":"Especial Tenacidad",
    "pokemonWeight": "162.00",
  }
}];

const TEXT_POKEMON_TIERRA=[{
  "id": "sandslash",
  "name": "Sandslash",
  "shortDescription": "Erizo de Arena",
  "description": "Sandslash es un Pokémon de tipo Tierra con una apariencia distintiva. Tiene un cuerpo cubierto de púas afiladas que le brindan protección contra depredadores y le permiten excavar en la tierra con facilidad. Sus garras afiladas y su velocidad hacen que sea un hábil luchador. Con su naturaleza territorial, Sandslash defiende su territorio con ferocidad. Cuando se siente amenazado, se enrrolla en una bola con sus púas hacia afuera para repeler a los adversarios. Es un Pokémon resistente y valiente, apreciado por su capacidad de supervivencia en entornos áridos.",
  "imageUrl": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/13/latest/20230620060657/Sandslash.png/1200px-Sandslash.png",
  "facts": {
    "mainField": "Tierra",
    "pokemonHabilities": "Velo Arena",
    "pokemonWeight": "29.50",
  }
},

{
  "id": "donphan",
  "name": "Donphan",
  "shortDescription": "Pokémon Trompo",
  "description": "Donphan es un Pokémon de tipo Tierra con un cuerpo imponente que se asemeja a un elefante blindado. Su piel es resistente y dura como el acero, lo que le permite rodar a gran velocidad y embestir a sus oponentes con fuerza destructiva. Sus colmillos largos también son una formidable arma. Donphan es conocido por su resistencia y agilidad en combate, además de su habilidad para excavar túneles en la tierra. Su lealtad y valentía lo convierten en un poderoso aliado, y su aspecto robusto y tenaz lo hace destacar en el mundo Pokémon.",
  "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/232.png",
  "facts": {
    "mainField": "Tierra",
    "pokemonHabilities": "Robustez",
    "pokemonWeight": "120.00",
  }
},

{
  "id": "hippowdon",
  "name": "Hippowdon",
  "shortDescription": "Pokémon hipopótamo",
  "description": "Hippowdon es un Pokémon de tipo Tierra que se asemeja a un imponente hipopótamo. Su piel es áspera y resistente, actuando como una armadura natural. Hippowdon tiene la capacidad de crear y controlar tormentas de arena a su alrededor, lo que le permite proteger su territorio y causar daño a sus enemigos. Es conocido por su naturaleza territorial y su disposición a defender su hábitat ferozmente. A pesar de su aspecto intimidante, Hippowdon es un protector valiente y un poderoso Pokémon que se gana el respeto en el mundo Pokémon por su habilidad en la batalla.",
  "imageUrl": "https://www.pngplay.com/wp-content/uploads/11/Hippowdon-Pokemon-Transparent-PNG.png",
  "facts": {
    "mainField": "Tierra",
    "pokemonHabilities":"Chorro Arena",
    "pokemonWeight": "300.00",
  }
}];

const TEXT_POKEMON_VOLADOR=[{
  "id": "pidgeot",
  "name": "Pidgeot",
  "shortDescription": "Pokémon Pájaro",
  "description": "Pidgeot es un majestuoso Pokémon de tipo Volador. Su imponente plumaje dorado y su envergadura impresionante lo hacen destacar en los cielos. Con un pico afilado y garras fuertes, es un depredador letal en el aire. Pidgeot puede volar a velocidades increíbles y tiene una aguda vista para detectar presas desde grandes alturas. A pesar de su naturaleza feroz en la batalla, es leal a su entrenador y puede usar su habilidad para llevar mensajes a larga distancia. Pidgeot personifica la elegancia y la ferocidad en el mundo de los Pokémon voladores.",
  "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png",
  "facts": {
    "mainField": "Volador",
    "pokemonHabilities": "Vista Lince",
    "pokemonWeight": "39.50",
  }
},


{
  "id": "fearow",
  "name": "Fearow",
  "shortDescription": "Pokémon Pico",
  "description": "Fearow es un Pokémon de tipo Volador con un pico largo y afilado que utiliza para cazar presas en picada desde los cielos. Su cuerpo es delgado y aerodinámico, lo que le permite alcanzar altas velocidades en vuelo. Fearow tiene una vista aguda y es territorial, defendiendo su área de anidación con ferocidad. Aunque puede parecer intimidante, es un Pokémon inteligente y leal a su entrenador. Su capacidad para volar a grandes alturas y atacar con precisión lo convierte en un cazador formidable en el mundo Pokémon.",
  "imageUrl": "https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png",
  "facts": {
    "mainField": "Volador",
    "pokemonHabilities": "Vista Lince",
    "pokemonWeight": "38.00",
  }
},

{
  "id": "tornadus",
  "name": "Tornadus",
  "shortDescription": "Pokémon Torbellino",
  "description":"Tornadus es un Pokémon legendario de tipo Viento que forma parte de la tríada de las Nubes Genio junto con Thundurus y Landorus. Su apariencia se asemeja a un dios del viento encarnado en un pájaro humanoide con plumaje verde, ojos furiosos y un aura de fuerza desatada. Su temperamento es volátil y su mera presencia puede provocar tormentas feroces. Tornadus es conocido por su habilidad para controlar vientos huracanados y desatar tornados devastadores. Es un ser mitológico y poderoso que simboliza la furia de la naturaleza.",
  "imageUrl": "https://www.pngplay.com/wp-content/uploads/12/Tornadus-Pokemon-Transparent-Image.png",
  "facts": {
    "mainField": "Volador",
    "pokemonHabilities": "Forma Avatar",
    "pokemonWeight": "63.00",
  }
}];
// pruebas de filtrado 
describe(' Prueba de filtro de Pokemon por tipo', () => {
  
  it('Filtrar pokémon por tipo Fuego', () => {
    const filterFuego = filterData(data, "mainField" , "Fuego" );
    expect(TEXT_POKEMON_FUEGO).toStrictEqual(filterFuego);
  });

  it('Filtrar pokemon por tipo Agua', () => {
    const filterAgua= filterData(data, "mainField", "Agua")
    expect(TEXT_POKEMON_AGUA).toStrictEqual(filterAgua);    
  });


  it('Filtrar pokemon por tipo Tierra', () => {
    const filterTierra= filterData(data, "mainField", "Tierra");
    expect(TEXT_POKEMON_TIERRA).toStrictEqual(filterTierra);    
  });


  it('Filtrar pokemon por tipo Volador', () => {
    const filterVolador= filterData(data, "mainField", "Volador")
    expect(TEXT_POKEMON_VOLADOR).toStrictEqual(filterVolador);    
  });
});

//ordenamiento fuego

describe(' Ordenamiento por pókemon Fuego', () => {

  const testData = [
    { name: 'Arcanine', facts: { pokemonHabilities: 'Intimidación', pokemonWeight:'155.00'} },
    { name: 'Charmander', facts: { pokemonHabilities: 'Mar llamas', pokemonWeight:'8.50' } },
    { name: 'Magby', facts: { pokemonHabilities: 'Cuerpo llama', pokemonWeight: '21.40'} },
  ];

  it('Ordenar por nombre ascendente', () => {
    const sortedData = sortData(testData, 'name', 'asc');
    const expectedOrder = ['Arcanine', 'Charmander', 'Magby'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });

  it('Ordenar por nombre descendente', () => {
    const sortedData = sortData(testData, 'name', 'desc');
    const expectedOrder = ['Magby', 'Charmander', 'Arcanine'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
 
  it('ordenar por habilidad ascendente ', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'asc');
    const expectedOrder = ['Cuerpo llama', 'Intimidación', 'Mar llamas'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });


  it('ordenar por habilidad descendente ', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'desc');
    const expectedOrder = ['Mar llamas','Intimidación','Cuerpo llama'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });


  it('Ordenar por peso pokemon Fuego ascendente', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'asc');
    const expectedOrder = ['8.50', '21.40', '155.00'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });

  
  it('Ordenar por peso pokemon Fuego descendente', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'desc');
    const expectedOrder = ['155.00', '21.40', '8.50'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });
});



//ordenamiento agua 
describe(' Ordenamiento de Pokémon de agua ', () => {

  const testData = [
    { name: 'Squirtle', facts: { pokemonHabilities: 'Torrente', pokemonWeight: '9.00' } },
    { name: 'Vaporeon', facts: { pokemonHabilities: 'Asorbe agua', pokemonWeight: '29.00' } },
    { name: 'Milotic', facts: { pokemonHabilities: 'Especial tenacidad', pokemonWeight: '162.00'} },
  ];

  
  it('Ordenar por nombre ascendente ', () => {
    const sortedData = sortData(testData, 'name', 'asc');
    const expectedOrder = ['Milotic', 'Squirtle', 'Vaporeon'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
  
  it('Ordenar por nombre descendente', () => {
    const sortedData = sortData(testData, 'name', 'desc');
    const expectedOrder = ['Vaporeon', 'Squirtle', 'Milotic'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });


  it('ordenar por habilidad ascendente ', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'asc');
    const expectedOrder = ['Asorbe agua', 'Especial tenacidad', 'Torrente'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });

  it('ordenar por habilidad descendente ', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'desc');
    const expectedOrder = ['Torrente','Especial tenacidad','Asorbe agua'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
 

  it('Ordenar por peso ascendente ', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'asc');
    const expectedOrder = ['9.00', '29.00', '162.00'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });
  
  
  it('Ordenar por peso descendente pokemon Agua ', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'desc');
    const expectedOrder = ['162.00', '29.00', '9.00'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });
});


//  ordenamiento tierra 
describe(' Ordenamiento de Pokémon de Tierra' , () => {

  const testData = [
    { name: 'Sandslash', facts: { pokemonHabilities: 'Velo arena', pokemonWeight: '29.50' } },
    { name: 'Donphan', facts: { pokemonHabilities: 'Robustez', pokemonWeight: '120.00' } },
    { name: 'Hippowdon', facts: { pokemonHabilities: 'Chorro arena', pokemonWeight: '300.00'} },
  ];


  it('Ordenar por nombre ascendente', () => {
    const sortedData = sortData(testData, 'name', 'asc');
    const expectedOrder = ['Donphan', 'Hippowdon', 'Sandslash'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });

  it('Ordenar por nombre descendente', () => {
    const sortedData = sortData(testData, 'name', 'desc');
    const expectedOrder = ['Sandslash', 'Hippowdon', 'Donphan'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
  
  
  it('Ordenar por habilidad ascendente', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'asc');
    const expectedOrder = ['Chorro arena', 'Robustez', 'Velo arena'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
  

  it('Ordenar por habilidad descendente', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'desc');
    const expectedOrder = ['Velo arena','Robustez','Chorro arena'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
  
  it('Ordenar por peso ascendente  ', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'asc');
    const expectedOrder = ['29.50', '120.00', '300.00'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });


  it('Ordenar por peso descendente ', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'desc');
    const expectedOrder = ['300.00', '120.00', '29.50'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });
});



//ordenamiento volador

describe(' Ordenamiento de Pokemon de Volador ', () => {

  const testData = [
    { name: 'Pidgeot', facts: { pokemonHabilities: 'Vista Lince', pokemonWeight:'39.500'} },
    { name: 'Fearow', facts: { pokemonHabilities: 'Vista Lince', pokemonWeight:'38.00' } },
    { name: 'Tornadus', facts: { pokemonHabilities: 'Forma avatar', pokemonWeight: '63.00'} },
  ];


  it('Ordenar por nombre ascendente', () => {
    const sortedData = sortData(testData, 'name', 'asc');
    const expectedOrder = ['Fearow', 'Pidgeot', 'Tornadus'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
  

  it('Ordenar por nombre descendente', () => {
    const sortedData = sortData(testData, 'name', 'desc');
    const expectedOrder = ['Tornadus', 'Pidgeot', 'Fearow'];
    const actualOrder = sortedData.map(item => item.name);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
  

  it('ordenar por habilidad ascendente', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'asc');
    const expectedOrder = ['Forma avatar', 'Vista Lince', 'Vista Lince'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });


  it('ordenar por habilidad descendente', () => {
    const sortedData = sortData(testData, 'pokemonHabilities', 'desc');
    const expectedOrder = ['Vista Lince','Vista Lince','Forma avatar'];
    const actualOrder = sortedData.map(item => item.facts.pokemonHabilities);
    expect(actualOrder).toStrictEqual(expectedOrder);
  });
  
  it('Ordenar por peso ascendente', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'asc');
    const expectedOrder = ['38.00', '39.500', '63.00'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });
  
  
  it('Ordenar por peso descendente', () => {
    const sortedData = sortData(testData, 'pokemonWeight', 'desc');
    const expectedOrder = ['63.00', '39.500', '38.00'];
    const actualOrder = sortedData.map(item => item.facts.pokemonWeight);
    expect(actualOrder).toEqual(expectedOrder);
  });
});



//estadistica pokemon fuego

describe('Estadistica de pokemon Fuego', () => {
  const testData = [
    { facts: { pokemonWeight: "8.50" } },
    { facts: { pokemonWeight: "21.40" } },
    { facts: { pokemonWeight: "155.00" } },
  ];

  it('Cálculo suma peso Total ', () => {
    const stats = computeStats(testData, 2);
    expect(stats.totalWeight).toBe("184.90");
  });

  it('Cálculo peso promedio', () => {
    const stats = computeStats(testData, 2);
    expect(stats.averageWeight).toBe("61.63");
  });

  it('Cálculo peso minimo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.minWeight).toBe("8.50");
  });

  it('Cálculo peso máximo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.maxWeight).toBe("155.00");
  });
});


//estadistica pokemon agua

describe('Estadistica de pokemon Agua', () => {
  const testData = [
    { facts: { pokemonWeight: "9.00" } },
    { facts: { pokemonWeight: "29.00" } },
    { facts: { pokemonWeight: "162.00" } },
  ];

  it('Cálculo suma peso Total ', () => {
    const stats = computeStats(testData, 2);
    expect(stats.totalWeight).toBe("200.00");
  });

  it('Cálculo peso promedio', () => {
    const stats = computeStats(testData, 2);
    expect(stats.averageWeight).toBe("66.67");
  });

  it('Cálculo peso mínimo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.minWeight).toBe("9.00");
  });

  it('Cálculo peso máximo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.maxWeight).toBe("162.00");
  });
});


//estadistica pokemon tierra

describe('Estadistica de pokemon Tierra', () => {
  const testData = [
    { facts: { pokemonWeight: "29.50" } },
    { facts: { pokemonWeight: "120.00" } },
    { facts: { pokemonWeight: "300.00" } },
  ];

  it('Cálculo suma peso Total ', () => {
    const stats = computeStats(testData, 2);
    expect(stats.totalWeight).toBe("449.50");
  });

  it('Cálculo peso promedio', () => {
    const stats = computeStats(testData, 2);
    expect(stats.averageWeight).toBe("149.83");
  });

  it('Cálculo peso mínimo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.minWeight).toBe("29.50");
  });

  it('Cálculo peso máximo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.maxWeight).toBe("300.00");
  });
});


//estadistica pokemon Volador

describe('Estadistica de pokemon Volador', () => {
  const testData = [
    { facts: { pokemonWeight: "39.50" } },
    { facts: { pokemonWeight: "38.00" } },
    { facts: { pokemonWeight: "63.00" } },
  ];

  it('Cálculo suma peso Total ', () => {
    const stats = computeStats(testData, 2);
    expect(stats.totalWeight).toBe("140.50");
  });

  it('Cálculo peso promedio', () => {
    const stats = computeStats(testData, 2);
    expect(stats.averageWeight).toBe("46.83");
  });

  it('Cálculo peso mínimo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.minWeight).toBe("38.00");
  });

  it('Cálculo peso máximo', () => {
    const stats = computeStats(testData, 2);
    expect(stats.maxWeight).toBe("63.00");
  });
});



// filtro pokemones de hilda
describe('Pruebas para dataFunctions.js - Pokémon Eléctrico', () => {
  const electricPokemons = [
    {
      name: 'Pikachu',
      facts: { mainField: 'Eléctrico', pokemonWeight: 6.00 },
    },
    {
      name: 'Jolteon',
      facts: { mainField: 'Eléctrico', pokemonHabilities: 'Absorber voltaje', pokemonWeight: 24.50 },
    },
    {
      name: 'Togedemaru',
      facts: { mainField: 'Eléctrico', pokemonHabilities: 'Espina trampa', pokemonWeight: 3.30 },
    },
  ];

  it('filterData debería filtrar por mainField', () => {
    const filteredData = filterData(electricPokemons, 'mainField', 'Eléctrico');
    expect(filteredData).toEqual([
      {
        name: 'Pikachu',
        facts: { mainField: 'Eléctrico', pokemonWeight: 6.00 },
      },
      {
        name: 'Jolteon',
        facts: { mainField: 'Eléctrico', pokemonHabilities: 'Absorber voltaje', pokemonWeight: 24.50 },
      },
      {
        name: 'Togedemaru',
        facts: { mainField: 'Eléctrico', pokemonHabilities: 'Espina trampa', pokemonWeight: 3.30 },
      },
    ]);
  });

  it('filterData debería devolver un arreglo vacío si no se encuentra coincidencia', () => {
    const filteredData = filterData(electricPokemons, 'mainField', 'Agua');
    expect(filteredData).toEqual([]);
  });

  it('sortData debería ordenar de manera ascendente por pokemonWeight', () => {
    const sortedData = sortData(electricPokemons, 'pokemonWeight', 'asc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Togedemaru', 'Pikachu', 'Jolteon']);
  });

  it('sortData debería ordenar de manera descendente por pokemonWeight', () => {
    const sortedData = sortData(electricPokemons, 'pokemonWeight', 'desc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Jolteon', 'Pikachu', 'Togedemaru']);
  });

  it('computeStats debería calcular estadísticas de peso', () => {
    const stats = computeStats(electricPokemons);
    expect(stats.totalWeight).toBe('33.80');
    expect(stats.averageWeight).toBe('11.27');
    expect(stats.maxWeight).toBe('24.50');
    expect(stats.minWeight).toBe('3.30');
  });
});

describe('Pruebas para dataFunctions.js - Pokémon de Hielo', () => {
  const icePokemons = [
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
    const filteredData = filterData(icePokemons, 'mainField', 'Hielo');
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
    const filteredData = filterData(icePokemons, 'mainField', 'Fuego');
    expect(filteredData).toEqual([]);
  });

  it('sortData debería ordenar de manera ascendente por pokemonWeight', () => {
    const sortedData = sortData(icePokemons, 'pokemonWeight', 'asc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Cubchoo', 'Glaceon', 'Eiscue']);
  });

  it('sortData debería ordenar de manera descendente por pokemonWeight', () => {
    const sortedData = sortData(icePokemons, 'pokemonWeight', 'desc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Eiscue', 'Glaceon', 'Cubchoo']);
  });

  it('computeStats debería calcular estadísticas de peso', () => {
    const stats = computeStats(icePokemons);
    expect(stats.totalWeight).toBe('123.40');
    expect(stats.averageWeight).toBe('41.13');
    expect(stats.maxWeight).toBe('89.00');
    expect(stats.minWeight).toBe('8.50');
  });
});

describe('Pruebas para dataFunctions.js - Pokémon Dragón', () => {
  const dragonPokemons = [
    {
      name: 'Altaria',
      facts: { mainField: 'Dragón', pokemonHabilities: 'Velo sagrado', pokemonWeight: 20.60 },
    },
    {
      name: 'Dratini',
      facts: { mainField: 'Dragón', pokemonHabilities: 'Cuerpo puro', pokemonWeight: 3.30 },
    },
    {
      name: 'Goodra',
      facts: { mainField: 'Dragón', pokemonHabilities: 'Hidratación', pokemonWeight: 150.00 },
    },
  ];

  it('filterData debería filtrar por mainField', () => {
    const filteredData = filterData(dragonPokemons, 'mainField', 'Dragón');
    expect(filteredData).toEqual([
      {
        name: 'Altaria',
        facts: { mainField: 'Dragón', pokemonHabilities: 'Velo sagrado', pokemonWeight: 20.60 },
      },
      {
        name: 'Dratini',
        facts: { mainField: 'Dragón', pokemonHabilities: 'Cuerpo puro', pokemonWeight: 3.30 },
      },
      {
        name: 'Goodra',
        facts: { mainField: 'Dragón', pokemonHabilities: 'Hidratación', pokemonWeight: 150.00 },
      },
    ]);
  });

  it('filterData debería devolver un arreglo vacío si no se encuentra coincidencia', () => {
    const filteredData = filterData(dragonPokemons, 'mainField', 'Fuego');
    expect(filteredData).toEqual([]);
  });

  it('sortData debería ordenar de manera ascendente por pokemonWeight', () => {
    const sortedData = sortData(dragonPokemons, 'pokemonWeight', 'asc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Dratini', 'Altaria', 'Goodra']);
  });

  it('sortData debería ordenar de manera descendente por pokemonWeight', () => {
    const sortedData = sortData(dragonPokemons, 'pokemonWeight', 'desc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Goodra', 'Altaria', 'Dratini']);
  });

  it('computeStats debería calcular estadísticas de peso', () => {
    const stats = computeStats(dragonPokemons);
    expect(stats.totalWeight).toBe('173.90'); 
    expect(stats.averageWeight).toBe('57.97'); 
    expect(stats.maxWeight).toBe('150.00');
    expect(stats.minWeight).toBe('3.30');
  });
});
describe('Pruebas para dataFunctions.js - Pokémon de Fantasma', () => {
  const ghostPokemons = [
    {
      name: 'Mimikyu',
      facts: { mainField: 'Fantasma', pokemonHabilities: 'Disfraz', pokemonWeight: 0.70 },
    },
    {
      name: 'Pumpkaboo',
      facts: { mainField: 'Fantasma', pokemonHabilities: 'Sombra traviesa', pokemonWeight: 5.00 },
    },
    {
      name: 'Misdreavus',
      facts: { mainField: 'Fantasma', pokemonHabilities: 'Levitación', pokemonWeight: 1.00 },
    },
  ];

  it('filterData debería filtrar por mainField', () => {
    const filteredData = filterData(ghostPokemons, 'mainField', 'Fantasma');
    expect(filteredData).toEqual([
      {
        name: 'Mimikyu',
        facts: { mainField: 'Fantasma', pokemonHabilities: 'Disfraz', pokemonWeight: 0.70 },
      },
      {
        name: 'Pumpkaboo',
        facts: { mainField: 'Fantasma', pokemonHabilities: 'Sombra traviesa', pokemonWeight: 5.00 },
      },
      {
        name: 'Misdreavus',
        facts: { mainField: 'Fantasma', pokemonHabilities: 'Levitación', pokemonWeight: 1.00 },
      },
    ]);
  });

  it('filterData debería devolver un arreglo vacío si no se encuentra coincidencia', () => {
    const filteredData = filterData(ghostPokemons, 'mainField', 'Agua');
    expect(filteredData).toEqual([]);
  });

  it('sortData debería ordenar de manera ascendente por pokemonWeight', () => {
    const sortedData = sortData(ghostPokemons, 'pokemonWeight', 'asc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Mimikyu', 'Misdreavus', 'Pumpkaboo']);
  });

  it('sortData debería ordenar de manera descendente por pokemonWeight', () => {
    const sortedData = sortData(ghostPokemons, 'pokemonWeight', 'desc');
    expect(sortedData.map(pokemon => pokemon.name)).toEqual(['Pumpkaboo', 'Misdreavus', 'Mimikyu']);
  });

  it('computeStats debería calcular estadísticas de peso', () => {
    const stats = computeStats(ghostPokemons);
    expect(stats.totalWeight).toBe('6.70'); 
    expect(stats.averageWeight).toBe('2.23'); 
    expect(stats.maxWeight).toBe('5.00');
    expect(stats.minWeight).toBe('0.70');
  });
});
