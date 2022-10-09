 const inputEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('#text');
const textCont = textEl.textContent;
inputEl.addEventListener('input', onInputChange);
function onInputChange() {
    const fontSizeRange = Number(inputEl.value);
    textEl.style.fontSize = `${fontSizeRange}px`;
}


