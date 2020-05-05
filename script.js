const baseUrl = 'https://hp-api.herokuapp.com/api/characters';
const peopleGrid = document.querySelector('.people-grid');
const searchBar = document.querySelector('.search-bar');

const urls = [
  `http://hp-api.herokuapp.com/api/characters/students`,
  `http://hp-api.herokuapp.com/api/characters/staff`,
];

let everyone = [];

searchBar.addEventListener('keyup', e => {
  const searchString = e.target.value;
  const filteredPeople = everyone.filter(
    per =>
      per.name.toLowerCase().includes(searchString) ||
      per.house.toLowerCase().includes(searchString)
  );
  console.log(filteredPeople);
  displayPeople(filteredPeople);
});

const fetchData = async () => {
  try {
    const people = await Promise.all(
      urls.map(url => fetch(url).then(res => res.json()))
    );
    everyone = people[0].concat(people[1]);
    return everyone;
  } catch (error) {
    console.log(error);
  }
};
fetchData();

const displayPeople = people => {
  const html = people
    .filter(person => person.house && person.house)
    .map(
      person =>
        `<div class='person-item'>
    <h2 class='person-name'>${person.name}</h2>
    <p class='person-house'>${person.house}</p>
    <span class='person-house-icon'>${houseName(person.house)}</span>
    </div>`
    );
  peopleGrid.innerHTML = html.join('');
};
const houseName = house => {
  if (house === 'Gryffindor') {
    return `<span role='image' aria-label='lion'>🦁</span>`;
  } else if (house === 'Slytherin') {
    return `<span role='image' aria-label='snake'>🐍</span>`;
  } else if (house === 'Hufflepuff') {
    return `<span role='image' aria-label='lion'>🦡</span>`;
  } else if (house === 'Ravenclaw') {
    return `<span role='image' aria-label='lion'>🦅</span>`;
  }
};
