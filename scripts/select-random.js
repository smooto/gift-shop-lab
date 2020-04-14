export function selectRandomIds(arrayOfProducts) {
    // initialize array to receive randomized product IDs
    const randomIds = [];

    // while array length is <3,
    while (randomIds.length < 3) {
        // generate random index number between 1 and 20, inclusive
        const indexNumber = Math.floor(Math.random() * 20);
        
        // locate product object at index number, get ID
        const productObject = arrayOfProducts[indexNumber];
        const productId = productObject.id;

        randomIds.push(productId);

        // if ID isn't already present in the array,
        // then push the ID to the array
        // if (randomIds.includes(!productId)) { randomIds.push(productId); }
    }

    // return array of IDs
    return randomIds;
}