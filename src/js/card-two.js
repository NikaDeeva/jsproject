const buttonEl = document.querySelector('.guess-the-number__but');
const inputEl = document.querySelector('.guess-the-number__input');
const resultEl = document.querySelector('.guess-the-number__result');

buttonEl.addEventListener('click', ()=>{
    if(isNaN(inputEl.value) || inputEl.value === ''){
        resultEl.innerHTML='Ви не ввели число';
        resultEl.style.color=localStorage.getItem('theme')=== 'true' ? '#fff' : '#000'; 
    }
    else{
        const randomNum=Math.floor(Math.random()*9+1);
        resultEl.innerHTML= Number(inputEl.value) === randomNum ? `Вітаю ви вгадали число ! (${randomNum})` : `Ви програли комп'ютер загадав (${randomNum})`
        resultEl.style.color = Number(inputEl.value) === randomNum ? '#039900' : '#900';
        inputEl.value = ''
    }
})