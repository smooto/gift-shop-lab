import { createResultsTable, createRadarChart } from './scripts/data-viz.js';

// get session data from local storage
const rawSessionResults = localStorage.getItem('results');
const parsedSessionResults = JSON.parse(rawSessionResults);

const rawAllSessionsResults = localStorage.getItem('allResults');
const parsedAllSessionsResults = JSON.parse(rawAllSessionsResults);

// get results containers from DOM
const thisSessionTable = document.getElementById('this-session-table');
const thisSessionChart = document.getElementById('this-session-chart');

const allSessionsTable = document.getElementById('all-sessions-table');
const allSessionsChart = document.getElementById('all-sessions-chart');

////// tables

createResultsTable(parsedSessionResults, thisSessionTable);

createResultsTable(parsedAllSessionsResults, allSessionsTable);

////// charts

createRadarChart(parsedSessionResults, thisSessionChart);

createRadarChart(parsedAllSessionsResults, allSessionsChart);
