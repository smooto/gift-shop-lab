export default function findById(array, itemId) {    
    let foundItem = null;
    
    array.forEach(element => {
        if (element.id === itemId) { foundItem = element; }
    });

    return foundItem;
}