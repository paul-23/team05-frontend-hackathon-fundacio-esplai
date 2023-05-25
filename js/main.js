  fetch('https://hackathon2023-equipo5-production.up.railway.app/api/countries/name/belgium')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    document.getElementById("Population").innerHTML = data.population_millions + "M";
    document.getElementById("Capita").innerHTML = data.gdp_per_capita;
    document.getElementById("title").innerHTML = data.country;
    generateTable(data);
    
  })
  .catch(function (error) {
    // A Error occurred
    console.log(error);
  });

  function generateTable(countryData) {
    var table = document.createElement('table');
        for (var key in countryData) {
            var row = table.insertRow();
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = key;
            cell2.innerHTML = countryData[key];
        }

        // Agregar la tabla al elemento con id "countryData"
        var countryDataElement = document.getElementById('countryData');
        countryDataElement.appendChild(table);
  }