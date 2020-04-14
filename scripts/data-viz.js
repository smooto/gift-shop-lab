export function createResultsTable(arrayOfResults, parentTable) {
    arrayOfResults.forEach(result => {
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
    
        parentTable.appendChild(tableRow);
    });
}

export function createRadarChart(arrayOfResults, parentCanvas) {
    const labelsArray = arrayOfResults.map(result => result.name);
    const viewsArray = arrayOfResults.map(result => result.views);
    const selectionsArray = arrayOfResults.map(result => result.selections);

    const ctx = parentCanvas.getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labelsArray,
            datasets: [{
                label: 'number of times viewed',
                data: viewsArray,
                backgroundColor: [
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'number of times selected',
                data: selectionsArray,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)'
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
}