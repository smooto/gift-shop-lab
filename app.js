import listOfAllProducts from './data/product-list.js';
import findById from './scripts/find-by-id.js';
import { renderAllInputs } from './scripts/render-elements.js';
import { selectRandomProducts } from './scripts/select-random.js';
import { storeProductViews } from './scripts/utils.js';

// get DOM elements
const containerDiv = document.getElementById('product-choices'); // container for input elements
const remainingChoices = document.getElementById('choices-remaining'); // user-facing countdown of remaining choices
const submitButton = document.getElementById('submit-choice'); // button to execute submission functions

////////////////////

// initialize page states, to be reset on reload

let choiceCounter = 0; // tracks the total number of choices made
remainingChoices.textContent = `${25 - choiceCounter} choices remaining`;

const sessionData = [];

// initialize page with random selection of products
// create and render inputs based on array of random IDs
const randomIds = selectRandomProducts(listOfAllProducts);
renderAllInputs(randomIds, containerDiv);

// add all IDs to productsViewed
storeProductViews(randomIds, sessionData);

////////////////////

// submission & regeneration
submitButton.addEventListener('click', () => {
    // determine which product was selected, and retrieve its ID
    const selectedInput = document.querySelector('input[type=radio]:checked');

    ////// if nothing selected, return error
    if (selectedInput === null) { alert('Choose a product!'); }

    ////// otherwise, store value as product ID
    const selectedProductID = selectedInput.value;
    // console.log('selected product ID:\n' + selectedProductID);

    // increment selected product in sessionData by 1
    const selectedProductData = findById(sessionData, selectedProductID);
    selectedProductData.selections++;
    // console.log(`${selectedProductData.id} has been selected ${selectedProductData.selections} times`);

    // update choiceCounter
    choiceCounter++;
    remainingChoices.textContent = `${25 - choiceCounter} choices remaining`;
    // if choiceCounter is greater than 25, stop survey and redirect
    if (choiceCounter > 25) {
        // disable button
        submitButton.disabled = true;
        // set localStorage to reflect sessionData
        let stringySessionData = JSON.stringify(sessionData);
        localStorage.setItem('results', stringySessionData);
        // and redirect to results page
        window.location.replace('results.html');
    }

    // otherwise, continue with survey

    // remove existing inputs
    while (containerDiv.firstChild) {
        containerDiv.removeChild(containerDiv.firstChild);
    }
    
    // generate new inputs
    const randomIds = selectRandomProducts(listOfAllProducts);
    renderAllInputs(randomIds, containerDiv);

    // store newly-generated products in session data
    storeProductViews(randomIds, sessionData);

    // console.log(sessionData);
});