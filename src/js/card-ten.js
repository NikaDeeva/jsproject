const scientists = [
  {
    name: 'Albert',
    surname: 'Einstein',
    born: 1879,
    dead: 1955,
    id: 1,
    img: 'https://cdn.britannica.com/77/142177-050-4E8010A9/Albert-Einstein-1947.jpg',
  },
  {
    name: 'Isaac',
    surname: 'Newton',
    born: 1643,
    dead: 1727,
    id: 2,
    img: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Portrait_of_Sir_Isaac_Newton%2C_1689_%28brightened%29.jpg',
  },
  {
    name: 'Galileo',
    surname: 'Galilei',
    born: 1564,
    dead: 1642,
    id: 3,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg/1200px-Justus_Sustermans_-_Portrait_of_Galileo_Galilei%2C_1636.jpg',
  },
  {
    name: 'Marie',
    surname: 'Curie',
    born: 1867,
    dead: 1934,
    id: 4,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Marie_Curie_c._1920s.jpg/1200px-Marie_Curie_c._1920s.jpg',
  },
  {
    name: 'Johannes',
    surname: 'Kepler',
    born: 1571,
    dead: 1630,
    id: 5,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/JKepler.jpg/548px-JKepler.jpg',
  },
  {
    name: 'Nicolaus',
    surname: 'Copernicus',
    born: 1473,
    dead: 1543,
    id: 6,
    img: 'https://cdn.britannica.com/73/250373-050-F4E0D08E/Nicolaus-Copernicus-portrait-Torun.jpg',
  },
  {
    name: 'Max',
    surname: 'Planck',
    born: 1858,
    dead: 1947,
    id: 7,
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Max_Planck_by_Hugo_Erfurth_1938cr.jpg/1200px-Max_Planck_by_Hugo_Erfurth_1938cr.jpg',
  },
  {
    name: 'Katharine',
    surname: 'Blodgett',
    born: 1898,
    dead: 1979,
    id: 8,
    img: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Katharine_Burr_Blodgett_%281898-1979%29%2C_demonstrating_equipment_in_lab.jpg',
  },
  {
    name: 'Ada',
    surname: 'Lovelace',
    born: 1815,
    dead: 1852,
    id: 9,
    img: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Ada_Lovelace_portrait.jpg',
  },
  {
    name: 'Sarah E.',
    surname: 'Goode',
    born: 1855,
    dead: 1905,
    id: 10,
    img: 'https://blackinventor.com/wp-content/uploads/2022/12/sarahgoode-circle101.jpg',
  },
  {
    name: 'Lise',
    surname: 'Meitner',
    born: 1878,
    dead: 1968,
    id: 11,
    img: 'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRBdXK2K4heHXBnt6QuxMQpLl5_TPd7Y_0boxqcArWc5HpYpxqqCY_O-OXwaZT9Bna613zlenNu_6iMOtc',
  },
  {
    name: 'Hanna',
    surname: 'Hammarström',
    born: 1829,
    dead: 1909,
    id: 12,
    img: 'https://upload.wikimedia.org/wikipedia/commons/d/d2/Hanna_Hammarstr%C3%B6m.jpg',
  },
];
const btnBorn = document.getElementById('btnBorn');
const btnSortAlphabet = document.getElementById('btnSortAlphabet');
const btnSortYearsLived = document.getElementById('btnSortYearsLived');
const btnBornLate = document.getElementById('btnBornLate');
const btnAlbertBorn = document.getElementById('btnAlbertBorn');
const btnSearchSurname = document.getElementById('btnSearchSurname');
const btnDeleteName = document.getElementById('btnDeleteName');
const btnLiveLess = document.getElementById('btnLiveLess');
const btnSameLetters = document.getElementById('btnSameLetters');

const originalScientists = [...scientists];
const scientistItems = document.querySelectorAll('.scientist__item');

const updateCard = (scientistsList = scientists) => {
  scientistItems.forEach((item, index) => {
    item.innerHTML = '';

    if (scientistsList[index]) {
      const scientist = scientistsList[index];

      const img = document.createElement('img');
      img.src = scientist.img;
      img.alt = `${scientist.name}`;
      item.appendChild(img);

      const hoverEl = document.createElement('div');
      hoverEl.classList.add('scientist__hover');
      hoverEl.textContent = `${scientist.name} ${scientist.surname}`;
      item.appendChild(hoverEl);
    } else {
      item.style.backgroundColor = '$backgroundCard';
    }
  });
};

const resetScientists = () => {
  scientistItems.forEach(item => {
    item.innerHTML = ''; 
  });
  updateCard(originalScientists); 
};

updateCard();

btnBorn.addEventListener('click', () => {
  resetScientists(); 
  const filteredScientists = originalScientists.filter(scientist => 
    scientist.born >= 1801 && scientist.born <= 1900
  );
  updateCard(filteredScientists);
});

btnSortAlphabet.addEventListener('click', () => {
  resetScientists();
  const sortedScientists = [...originalScientists].sort((a, b) => 
    a.name.localeCompare(b.name)
  );
  updateCard(sortedScientists);
});

btnSortYearsLived.addEventListener('click', () => {
  resetScientists();
  const sortedScientists = [...originalScientists].sort((a, b) => {
    const yearsLivedA = a.dead - a.born;
    const yearsLivedB = b.dead - b.born;
    return yearsLivedA - yearsLivedB;
  });
  updateCard(sortedScientists);
});

btnBornLate.addEventListener('click', () => {
  resetScientists();
  const latestBornScientist = originalScientists.reduce((latest, current) => 
    current.born > latest.born ? current : latest
  );
  updateCard([latestBornScientist]);
});

btnAlbertBorn.addEventListener('click', () => {
  const einstein = originalScientists.find(
    scientist => scientist.name === 'Albert' && scientist.surname === 'Einstein'
  );
  if (einstein) {
    alert(`Альберт Ейнштейн народився в ${einstein.born} році.`);
  } else {
    alert('Альберт Ейнштейн не знайдений.');
  }
});

btnSearchSurname.addEventListener('click', () => {
  resetScientists();
  const filteredScientists = originalScientists.filter(scientist => 
    scientist.surname.startsWith('C')
  );
  updateCard(filteredScientists);
});

btnDeleteName.addEventListener('click', () => {
  resetScientists();
  const filteredScientists = originalScientists.filter(scientist => 
    !scientist.name.startsWith('A')
  );
  updateCard(filteredScientists);
});

btnLiveLess.addEventListener('click', () => {
  resetScientists();
  const maxYears = Math.max(...originalScientists.map(sc => sc.dead - sc.born));
  const minYears = Math.min(...originalScientists.map(sc => sc.dead - sc.born));
  
  const filteredScientists = originalScientists.filter(scientist => 
    scientist.dead - scientist.born === maxYears || 
    scientist.dead - scientist.born === minYears
  );
  updateCard(filteredScientists);
});

btnSameLetters.addEventListener('click', () => {
  resetScientists();
  const filteredScientists = originalScientists.filter(scientist => 
    scientist.name.charAt(0) === scientist.surname.charAt(0)
  );
  updateCard(filteredScientists);
});