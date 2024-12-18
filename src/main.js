
function getCities() {
    const cities = [];
    for (let i = 0; i < 50; i++) {
      cities.push({
        name: `City ${i}`,
        population: Math.floor((Math.random() * 90000) + 50000)
      });
    }
    return cities;
  }

  const cities = getCities();
  const originalCities = [...cities]; 
  const citiesTable = document.getElementById('cities-table');
  let sorted = false;

  function renderTable(data) {
    const tbody = citiesTable.querySelector('tbody');
    tbody.innerHTML = ''; 
    data.forEach(({ name, population }) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${name}</td><td>${population}</td>`;
      tbody.appendChild(tr);
    });
  }

  renderTable(cities);

  const header = citiesTable.querySelectorAll('th')[1]
  const headerIndicator = header.querySelector('span');



  const resetButton = document.getElementById('reset-button');
  resetButton.onclick = () => {
    sorted = false;
    headerIndicator.innerText = '';
    cities.splice(0, cities.length, ...originalCities);
    renderTable(cities);

  };
  
  document.getElementById('Higher').onclick = () => {
    cities.sort((c1, c2) => c2.population - c1.population); 
    renderTable(cities);
  };

  document.getElementById('Lower').onclick = () => {
    cities.sort((c1, c2) => c1.population - c2.population); 
    renderTable(cities);
  };