// get session selection from local storage
const rawResults = localStorage.getItem('results');
const parsedResults = JSON.parse(rawResults);

// get results container from DOM
const resultsContainer = document.getElementById('session-selections');

// create elements to populate container
parsedResults.forEach(result => {
    const p = document.createElement('p');
    p.textContent = `${result.name}: viewed ${result.views} times, selected ${result.selections} times`;
    resultsContainer.appendChild(p);
});