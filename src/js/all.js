const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];

const btnNum = document.getElementById('num');
const btnGame = document.getElementById('game');
const btnAcqua = document.getElementById('acqua');
const allSections = document.querySelectorAll('section');
console.log(allSections);

btnNum.addEventListener('click', () => {
    games.forEach((game, index) => {
        const section = allSections[index];
        if (game.category === 'numerical') {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    })
});

btnGame.addEventListener('click', () => {
  games.forEach((game, index) => {
    const section = allSections[index];
    if (game.category === 'game') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});

btnAcqua.addEventListener('click', () => {
  games.forEach((game, index) => {
    const section = allSections[index];
    if (game.category === 'acquaintance') {
      section.style.display = 'block';
    } else {
      section.style.display = 'none';
    }
  });
});