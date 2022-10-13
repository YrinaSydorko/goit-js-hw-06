const nameInputelem = document.querySelector('#name-input');
const textOutputelem = document.querySelector('#name-output');
function changeNameIf(event) {
  if (event.currentTarget.value !== "") {
    textOutputelem.textContent = event.currentTarget.value;
  } else {
    textOutputelem.textContent = "Anonymous";
  }
}
nameInputelem.addEventListener('input', changeNameIf);