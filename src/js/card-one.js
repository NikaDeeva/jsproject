const butEl = document.querySelector('.leap-year__but');
const inputEl = document.querySelector('.leap-year__input');
const resultEl = document.querySelector('.leap-year__result');

butEl.addEventListener('click', ()=>{
    if(isNaN(inputEl.value) || inputEl.value === ''){
        resultEl.innerHTML='Ви не ввели число';
        resultEl.style.color=localStorage.getItem('theme')=== 'true' ? '#fff' : '#000'; 
    }
    else{
        resultEl.innerHTML=inputEl.value % 4=== 0 ? 'Ви народились у високосний рік' : 'Ви народились не у високосний рік';
        resultEl.style.color=inputEl.value %4=== 0 ? '#039900' : 'red';
        inputEl.value = ''
    }
})