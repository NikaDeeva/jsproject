"use strict"
function toggleModal() {
    const modal = document.querySelector('[data-modal]');
    modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll'); 
  }
  

  document.querySelector('[data-modal-open]').addEventListener('click', function (event) {
    const mail = document.querySelector('.footer__mail');
  
    if (mail.value !== '' && mail.value.includes('@')) {
      toggleModal(); 
    } else {
      alert('Введіть вашу пошту');
      mail.style.borderColor = 'red';
      event.preventDefault();
    }
  });
  document.querySelector('[data-modal-close]').addEventListener('click', function () {
    toggleModal(); 
  });
  
  