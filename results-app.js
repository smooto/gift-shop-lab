// get session selection from local storage
const rawResults = localStorage.getItem('results');
const parsedResults = JSON.parse(rawResults);

// get results container from DOM
const resultsContainer = document.getElementById('session-selections');

////// table

parsedResults.forEach(result => {
    // row
    const tableRow = document.createElement('tr');

    // ID
    const tdProdId = document.createElement('td');    
    tdProdId.textContent = result.id;

    // name
    const tdProdName = document.createElement('td');    
    tdProdName.textContent = result.name;

    // selections
    const tdSelections = document.createElement('td');    
    tdSelections.textContent = result.selections;

    // views
    const tdViews = document.createElement('td');    
    tdViews.textContent = result.views;
    
    tableRow.appendChild(tdProdId);
    tableRow.appendChild(tdProdName);
    tableRow.appendChild(tdSelections);
    tableRow.appendChild(tdViews);

    resultsContainer.appendChild(tableRow);
});

////// chart

const labelsArray = parsedResults.map(result => result.name);
const dataArray = parsedResults.map(result => result.selections);

const ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labelsArray,
        datasets: [{
            label: 'number of times selected',
            data: dataArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
