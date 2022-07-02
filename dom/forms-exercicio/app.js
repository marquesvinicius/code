// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');
const ul = document.querySelector('#list');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const productName = form.elements.product;
    const productQty = form.elements.qty;
    addItem(productName.value, productQty.value);
    productName.value = '';
    productQty.value = '';

})

const addItem = (productName, productQty) => {
    const newItem = document.createElement('li');
    const newTextNode = document.createTextNode(`${productQty} ${productName}`)
    // newItem.append(`${productQty} ${productName}`);
    // ul.append(newItem);
    newItem.appendChild(newTextNode);
    ul.appendChild(newItem);
}