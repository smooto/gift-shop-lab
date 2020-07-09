import listOfAllProducts from '../data/product-list.js';
import findById from './find-by-id.js';

function createInputElement(productId) {
    const productObject = findById(listOfAllProducts, productId);
    
    // create `label` wrapper
    const label = document.createElement('label');

    // create & define `input` as radio button
    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'product';
    input.value = productId;

    // create & populate `h3` to reflect product name
    const h3 = document.createElement('h3');
    h3.textContent = productObject.name;

    // create & source `img` to reflect product image
    const img = document.createElement('img');
    img.src = productObject.image;

    // append p, input, and image to label
    label.appendChild(h3);
    label.appendChild(input);
    label.appendChild(img);

    // return label
    return label;
}

export function renderAllInputs(arrayOfIds, containerDiv) {
    // call function for each product ID to create inputs & populate container
    arrayOfIds.forEach(id => {
        const inputElement = createInputElement(id);
        containerDiv.appendChild(inputElement);
    });
}