<<<<<<< Updated upstream
=======
 // const changeColorBtn = document.querySelector('.change-color');
 // const showColorText = document.querySelector('.color');

 // changeColorBtn.addEventListener('click', bodyHexColor);
//function bodyHexColor() {
 // document.body.style.backgroundColor = getRandomHexColor();
 // showColorText.innerHTML = getRandomHexColor();
//  function getRandomHexColor() {
 //   return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
 // }
//}

//function getRandomHexColor() {
 // return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
//}
//const bodyEl = document.querySelector("body");

//const changeColorEl = document.querySelector(".change-color");

//const colorEl = document.querySelector(".color");

//changeColorEl.addEventListener("click", changeBgColorRandom);

//function changeBgColorRandom() {
//  bodyEl.style.backgroundColor = `${getRandomHexColor()}`;
  //colorEl.textContent = getRandomHexColor();
//}

>>>>>>> Stashed changes
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector('body'),
  colorName: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
};

refs.changeColorBtn.addEventListener("click", onChangeColor);

function onChangeColor() {
  const color = getRandomHexColor();
  refs.colorName.textContent = `${color}`;
  refs.body.style.backgroundColor = `${color}`;
<<<<<<< Updated upstream
}
=======
}
>>>>>>> Stashed changes
