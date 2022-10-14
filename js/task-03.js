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

const galleryElem = document.querySelector('.gallery');
images.forEach(image => {
   let urlElem = image.url;
   let altElem = image.alt;
   galleryElem.insertAdjacentHTML('beforeend', `<li><img src =${urlElem} alt =${altElem} width=300</li>`);
 })
 galleryElem.style.display = "display-flex";



//const markup = images.map((img) =>
    //'<li class="gallery___item">< img class= "gallery___img" > alt="${img.alt}" src = "${img.url}" width = "300"</li>').join('');
   // galleryElem.insertAdjacentHTML('afterbegin',markup);
 //galleryElem.style.display = "flex";
