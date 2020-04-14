import findById from './find-by-id.js';

export function initSessionData(arrayOfIds, arrayOfSessionData) {
    arrayOfIds.forEach(productId => {
        // search session data for product & store result (either null or object)
        let targetProduct = findById(arrayOfSessionData, productId);
        
        // check if target product already exists as a tracked item in session data array
        // if target product has no tracking data for the session (findById returns null), initialize tracking data
        if (!targetProduct) {
            const initData = {
                id: productId,
                selections: 0,
                views: 1
            };
            arrayOfSessionData.push(JSON.stringify(initData));
        // otherwise, increment views by 1
        } else {
            targetProduct.views++;
        }
    });
}
