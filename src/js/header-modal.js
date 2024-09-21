"use strict"
const modal = document.querySelector('[header-modal]');
const openBtn = document.querySelector('[header-modal-open]');
const closeBtn = document.querySelector('[header-modal-close]');

function toggleModal(){
    modal.classList.toggle('is-hidden');
}

openBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
 
const btnSave = document.querySelector('.header__modal-save');
function changeName(){
    const nameInput = document.querySelector('.header__modal-name').value;
    const finalName = document.querySelector('.header__wellcome'); 
   
    if (nameInput.length > 0){
        finalName.textContent = `Вітаємо, ${nameInput}!`; 
        toggleModal(); 
    } else {
        alert("Будь ласка, введіть ваше ім'я"); 
    }
}
btnSave.addEventListener('click', changeName);