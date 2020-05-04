const baseUrl = 'https://hp-api.herokuapp.com/api/characters';

const fetchData = async () => {
  const res = await fetch(baseUrl);
  const data = await res.json();
  console.log(data);
};
fetchData();
