"use strict"
const stone = document.querySelector('#stone');
const scissors = document.querySelector('#scissors');
const paper = document.querySelector('#paper');
let result = document.querySelector('.three__result-text');
let message = document.querySelector('.three__message');
let countYou = document.querySelector('.three__count-you');
let countComp = document.querySelector('.three__count-comp');
let compChoice = document.querySelector('.three__feedback');

const options = ['stone', 'scissors', 'paper'];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function updateScore() {
    countYou.textContent = playerScore;
    countComp.textContent = computerScore;
}

function updateCompChoice(choice) {
compChoice.textContent = `${choice}`;
}

stone.addEventListener('click', event => {
    const computerChoice = getComputerChoice();
    updateCompChoice(computerChoice);
    if (computerChoice === 'scissors') {
        message.textContent = 'Ви виграли раунд!';
        message.style.color = '#039900'; 
        playerScore++;
    } else if (computerChoice === 'paper') {
        message.textContent = 'Комп’ютер виграв раунд!';
        message.style.color = '#990000';
        computerScore++;
    } else {
        message.textContent = 'Нічия!';
        message.style.color = '#7E7E7E';
    }
    updateScore();
});

scissors.addEventListener('click', event => {
    const computerChoice = getComputerChoice();
    updateCompChoice(computerChoice);
    if (computerChoice === 'paper') {
        message.textContent = 'Ви виграли раунд!';
        message.style.color = '#039900';
        playerScore++;
    } else if (computerChoice === 'stone') {
        message.textContent = 'Комп’ютер виграв раунд!';
        message.style.color = '#990000';
        computerScore++;
    } else {
        message.textContent = 'Нічия!';
        message.style.color = '#7E7E7E';
    }
    updateScore();
});

paper.addEventListener('click', event => {
    const computerChoice = getComputerChoice();
    updateCompChoice(computerChoice);
    if (computerChoice === 'stone') {
        message.textContent = 'Ви виграли раунд!';
        message.style.color = '#039900';
        playerScore++;
    } else if (computerChoice === 'scissors') {
        message.textContent = 'Комп’ютер виграв раунд!';
        message.style.color = '#990000';
        computerScore++;
    } else {
        message.textContent = 'Нічия!';
        message.style.color = '#7E7E7E';
    }
    updateScore();
});