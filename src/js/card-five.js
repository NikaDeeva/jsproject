const timeCalcButEl = document.querySelector('.time-calc__but');
const resultEl = document.querySelector('.time-calc__result');
const inputEl = document.querySelector('.time-calc__input');

timeCalcButEl.addEventListener('click', () => {
    resultEl.innerHTML = `${Math.floor(Math.floor(inputEl.value / 60) / 24)} дн. ${Math.floor(inputEl.value / 60) - Math.floor(Math.floor(inputEl.value / 60) / 24) * 24 < 10 ? '0' + String(Math.floor(inputEl.value / 60) - Math.floor(Math.floor(inputEl.value / 60) / 24) * 24) : Math.floor(inputEl.value / 60) - Math.floor(Math.floor(inputEl.value / 60) / 24) * 24}:${inputEl.value % 60 < 10 ? '0' + String(inputEl.value % 60) : inputEl.value % 60}`
    inputEl.value = '';
});