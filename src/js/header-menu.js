"use strict";

const open = document.querySelector('.header__open-menu');
const menu = document.querySelector('.header__menu');

const toggleMenu = function(event) {
    event.stopPropagation(); 
    menu.classList.toggle('show');
};

open.addEventListener('click', toggleMenu);

document.addEventListener('click', function(event) {
    if (menu.classList.contains('show') && !menu.contains(event.target) && !open.contains(event.target)) {
        menu.classList.remove('show');
    }
});

const menuItems = document.querySelectorAll('.header__menu-item');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('show');
    });
});

