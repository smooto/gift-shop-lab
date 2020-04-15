export function createResultsTable(arrayOfResults, parentTable) {
    arrayOfResults.forEach(result => {
        // row
        const tableRow = document.createElement('tr');
    
        // name
        const tdProdName = document.createElement('td');    
        tdProdName.textContent = result.name;
    
        // selections
        const tdSelections = document.createElement('td');    
        tdSelections.textContent = result.selections;
    
        // views
        const tdViews = document.createElement('td');    
        tdViews.textContent = result.views;
        
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

    Chart.defaults.global.defaultFontFamily = 'Comfortaa';
    const ctx = parentCanvas.getContext('2d');
    new Chart(ctx, {
        type: 'radar',
        data: {
            labels: labelsArray,
            datasets: [{
                label: 'number of times selected',
                data: selectionsArray,
                backgroundColor: [
                    'rgba(255, 194, 187, 0.5)'
                ],
                borderColor: [
                    'rgba(255, 194, 187, 1)'
                ],
                borderWidth: 1
            },
            {
                label: 'number of times viewed',
                data: viewsArray,
                backgroundColor: [
                    'rgba(199, 232, 238, 0.5)'
                ],
                borderColor: [
                    'rgb(199, 232, 238, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scale: {
                ticks: {
                    beginAtZero: true,
                    min: 0,
                    stepSize: 1
                }
            }
        }
    });
}