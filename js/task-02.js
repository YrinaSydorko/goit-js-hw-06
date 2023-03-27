const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments', 
];
const navRef = document.querySelector('#ingredients');
navRef.classList.add('site-nav');
const listElementToAdd = [];
ingredients.forEach(ingredient => {
const lastItem = document.createElement('li');
lastItem.classList.add('item');
lastItem.textContent = ingredient;
listElementToAdd.push(lastItem);
console.log(listElementToAdd);
console.log(navRef);
});
navRef.append(...listElementToAdd);

