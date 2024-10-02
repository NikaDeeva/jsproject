"use strict"

const generalBtn = document.querySelector('.header__light');
const circle = document.querySelector('.header__light-circle');
const icon = document.querySelector('.header__light-icon')
let isDragging = false;

circle.addEventListener('mousedown', (event) => {
    isDragging = true;
});

document.addEventListener('mouseup', () => {
    isDragging = false;
});

document.addEventListener('mousemove', (e) => {
    if (isDragging) {
        const generalBtnRect = generalBtn.getBoundingClientRect();
        const circleWidth = circle.offsetWidth;
        const generalBtnWidth = generalBtnRect.width;

        let mouseX = e.clientX - generalBtnRect.left;

        const minX = 0;
        const maxX = generalBtnWidth - circleWidth;

        const circleX = Math.min(Math.max(mouseX - (circleWidth / 2), minX), maxX);

        circle.style.left = `${circleX}px`;

        if (circleX > maxX / 2) {
            document.body.classList.add('dark');
            icon.src = "https://static.vecteezy.com/system/resources/previews/019/899/719/non_2x/simple-moon-icon-png.png";
            
        } else {
            document.body.classList.remove('dark');
        }
    }
});
