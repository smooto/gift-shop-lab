import listOfAllProducts from './data/product-list.js';
import { renderAllInputs } from './scripts/render-elements.js';
import { selectRandomProducts } from './scripts/select-random.js';
import { initSessionData } from './scripts/utils.js';

// get DOM elements
const containerDiv = document.getElementById('product-choices'); // container for input elements
const remainingChoices = document.getElementById('choices-remaining'); // user-facing countdown of remaining choices
const submitButton = document.getElementById('submit-choice'); // button to execute submission functions

////////////////////

// initialize page states, to be reset on reload

let choiceCounter = 0; // tracks the total number of choices made
remainingChoices.textContent = `${25 - choiceCounter} choices remaining`;

const sessionData = [];

// const productsSelected = []; // tracks the specific choices made by the user in this session

// const productsViewed = []; // tracks the specific products viewed by the user in this session

// initialize page with random selection of products
// create and render inputs based on array of random IDs
const randomIds = selectRandomProducts(listOfAllProducts);
console.log(randomIds);
renderAllInputs(randomIds, containerDiv);

// add all IDs to productsViewed
initSessionData(randomIds, sessionData);
console.log('products viewed:\n' + sessionData);

////////////////////

// submission & regeneration
submitButton.addEventListener('click', () => {
    // determine which product was selected, and retrieve its ID
    const selectedInput = document.querySelector('input[type=radio]:checked');
    
    // if nothing selected, return error
    if (selectedInput === null) { alert('Choose a product!'); }
    
    // otherwise, store value as product ID
    const selectedProductID = selectedInput.value;
    console.log('selected product ID:\n' + selectedProductID);

    // check whether selected product is present in productsSelected array
    // if (productsSelected.includes(selectedProductID)) { selectedProductID.timesPicked++ }
    // else {

    // }

    // add product to productsSelected
    // productsSelected.push(selectedProductID);
    // console.log(productsSelected);

    // increment choiceCounter
    choiceCounter++;
    remainingChoices.textContent = `${25 - choiceCounter} choices remaining`;

    // remove existing inputs
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    
    // generate new inputs
    const randomIds = selectRandomProducts(listOfAllProducts);
    renderAllInputs(randomIds, containerDiv);

    // // add all IDs to productsViewed
    // randomIds.forEach(id => {
    //     productsViewed.push(id);
    // });
    // console.log('products viewed:\n' + productsViewed);
});