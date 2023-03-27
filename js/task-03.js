const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const list = document.querySelector(".gallery");

<<<<<<< Updated upstream
const galleryList = images
  .map(({url, alt}) => `<li class ='item'><img src =${url} alt=${alt} width='350'></img></li>`
  ).join("")
=======
//const galleryElem = document.querySelector('.gallery');
//images.forEach(image => {
   //let urlElem = image.url;
   //let altElem = image.alt;
   //galleryElem.insertAdjacentHTML('beforeend', `<li><img src =${urlElem} alt =${altElem} width=300</li>`);
 //})
 //galleryElem.style.display = "display-flex";
>>>>>>> Stashed changes

console.log(galleryList);
list.style.display = 'flex'
list.style.listStyle = 'none'
list.style.justifyContent = 'space-between'
list.insertAdjacentHTML("beforeend", galleryList);

<<<<<<< Updated upstream
=======




 //const list = document.querySelector(".gallery");
//const galleryList = images
 // .map(({url, alt}) => `<li class ='item'><img src =${url} alt=${alt} width='350'></img></li>`
  //).join("")

//console.log(galleryList);
//list.style.display = 'flex'
//list.style.listStyle = 'none'
//list.style.justifyContent = 'space-between'
//list.insertAdjacentHTML("beforeend", galleryList);

const list = document.querySelector(".gallery");

const galleryList = images
  .map(({url, alt}) => `<li class ='item'><img src =${url} alt=${alt} width='350'></img></li>`
  ).join("")

console.log(galleryList);
list.style.display = 'flex'
list.style.listStyle = 'none'
list.style.justifyContent = 'space-between'
list.insertAdjacentHTML("beforeend", galleryList);

>>>>>>> Stashed changes
