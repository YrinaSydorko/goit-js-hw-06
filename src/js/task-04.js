const wrap_button = {
    incBtn: document.querySelector("[data-action=increment]"),
    decBtn: document.querySelector("[data-action=decrement]"),
};
const {incBtn, decBtn} = wrap_button;
let counterValue = 0;
const increment = () => {
    counterValue += 1;
    document.getElementById('value').textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    document.getElementById('value').textContent = counterValue;
};
console.log(counterValue);
incBtn.addEventListener('click',increment);
    
decBtn.addEventListener('click', decrement);
   
