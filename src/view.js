export const renderItems = (data) => {
  console.log(data)
  // Aquí comienza tu código y puedes retornar lo que tu necesites


const ul = document.createAElement("ul");


for(let i= 0; i<data.lenght; i++){



let objeto= data[i];


let li= document.createElement("li");

li.innerHTML= "";

li.innerHTML=li.innerHTML + '<img src=' + objeto.imgUrl +'<dt>Nombre:</dt><dd itemprop="name"> + objeto.name </dd> +' <dt>Corta descripción:</dt><dd itemprop="shortDescription"> + objeto.shortDescription </dd> +' <dt>Descripción:</dt><dd itemprop="description">+ objeto.description </dd> +' +'<dt>Campo principal</dt><dd itemprop="mainField">+ objeto.mainField </dd>+'+'<dt>Habilidades:</dt><dd itemprop="habilities">+ objeto.habilities</dd> +'<dt>Peso:</dt><dd itemprop="wight">+ objeto.wight </dd> +'
}




const pokemon = document.querySelector("ul");



pokemon.appendChild(li);






  return 'example';
};



//renderItems(data)
//aqui debemos usar el createElement
//innerHTML
//appenchild
//itemscope e itemprop