import listOfAllProducts from './data/product-list.js';
import { renderAllInputs } from './scripts/render-elements.js';
import { selectRandomIds } from './scripts/select-random.js';

// generate array of random IDs

const randomIds = selectRandomIds(listOfAllProducts);

console.log(randomIds);

// create and render inputs based on array of random IDs

renderAllInputs(randomIds);