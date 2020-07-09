import findById from './find-by-id.js';
import listOfAllProducts from '../data/product-list.js';

export function storeProductViews(arrayOfIds, arrayOfSessionData) {
    arrayOfIds.forEach(productId => {
        // search session data for product & store result (either null or object)
        let targetProduct = findById(arrayOfSessionData, productId);
        
        // check if target product already exists as a tracked item in session data array
        // if target product has no tracking data for the session (findById returns null), initialize tracking data
        if (!targetProduct) {
            const origProduct = findById(listOfAllProducts, productId);

            const initData = {
                id: productId,
                name: origProduct.name,
                selections: 0,
                views: 1
            };
            arrayOfSessionData.push(initData);
        // otherwise, increment views by 1
        } else {
            targetProduct.views++;
        }
    });
}