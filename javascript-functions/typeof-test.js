// DEFINE YOUR FUNCTION BELOW:
function lastElement(array) {
    if (array.length === 0) {
        return null;
    }
    let theLastElement = array.length - 1;
    return array[theLastElement];
}

lastElement([1, 2, 5]);


