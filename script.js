const baseUrl = 'https://hp-api.herokuapp.com/api/characters';
const peopleGrid = document.querySelector('.people');

const fetchData = async () => {
  const res = await fetch(baseUrl);
  const people = await res.json();
  displayPeople(people);
};
fetchData();

const displayPeople = people => {
  const html = people.map(
    person =>
      `<div class='persons'>
      <h2 class='name'>${person.name}</h2>
      </div>`
  );
  peopleGrid.innerHTML = html.join('');
};
