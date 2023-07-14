document.addEventListener('DOMContentLoaded', function() {
    const inputField = document.getElementById('inputField');
    const fetchButton = document.getElementById('fetchButton');
    const resultDiv = document.getElementById('result');
  
    fetchButton.addEventListener('click', function() {
      const location = inputField.value;
      if (!location) {
        alert('Please enter a valid pin code or location.');
        return;
      }
  
      const apiKey = '8ba44f0e415d7296a5eeb6fe1354f634';
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
      fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
          if (data.cod === '404') {
            alert('Location not found. Please check the pin code or location name.');
          } else {
            const temperature = data.main.temp;
            resultDiv.textContent = `Temperature in ${data.name}: ${temperature}°C`;
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          alert('Failed to fetch data. Please try again later.');
        });
    });
  });