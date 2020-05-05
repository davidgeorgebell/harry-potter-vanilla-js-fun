const baseUrl = 'https://hp-api.herokuapp.com/api/characters';
const peopleGrid = document.querySelector('.people-grid');

const houses = [
  {
    name: 'Ravenclaw',
    icon: '🦅',
    name: 'Slytherin',
    icon: '🐍',
    name: 'Gryffindor',
    icon: '🦁',
    name: 'Hufflepuff',
    inon: '🦡',
  },
];

const fetchData = async () => {
  const res = await fetch(baseUrl);
  const people = await res.json();
  displayPeople(people);
  console.log(people);
};
fetchData();

const displayPeople = people => {
  const html = people
    .filter(person => person.house && person.house)
    .map(
      person =>
        `<div class='person-item'>
    <h2 class='person-name'>${person.name}</h2>
    <p class='person-house'>${person.house} ${houseName(person.house)}</p>
    </div>`
    );
  peopleGrid.innerHTML = html.join('');
};
const houseName = house => {
  if (house === 'Gryffindor') {
    return `<span>🦁</span>`;
  } else if (house === 'Slytherin') {
    return `<span>🐍</span>`;
  } else if (house === 'Hufflepuff') {
    return `<span>🦡</span>`;
  } else if (house === 'Ravenclaw') {
    return `<span>🦅</span>`;
  }
};
