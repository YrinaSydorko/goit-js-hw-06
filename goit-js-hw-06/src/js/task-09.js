  const changeColorBtn = document.querySelector('.change-color');
  const showColorText = document.querySelector('.color');

  changeColorBtn.addEventListener('click', bodyHexColor);
function bodyHexColor() {
  document.body.style.backgroundColor = getRandomHexColor();
  showColorText.innerHTML = getRandomHexColor();
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }
}