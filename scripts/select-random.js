function randomizeId(arrayOfProducts) {
    // generate random index number between 1 and 20, inclusive
    const indexNumber = Math.floor(Math.random() * 20);
        
    // locate product object at index number, get ID
    const productObject = arrayOfProducts[indexNumber];
    const productId = productObject.id;

    return productId;
}

export function selectRandomProducts(arrayOfProducts) {
    // initialize array to receive randomized product IDs
    const randomIds = [];

    // while array length is <3,
    while (randomIds.length < 3) {
        const randomProductId = randomizeId(arrayOfProducts);
        
        // if ID isn't already present in the array, then push the ID to the array
        if (!(randomIds.includes(randomProductId))) { randomIds.push(randomProductId); }
    }

    // return array of IDs
    return randomIds;
}
