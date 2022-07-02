// WRITE YOUR CODE IN HERE:

const container = document.querySelector('#container');

for (let i = 0; i < 100; i++) {
    const newBttn = document.createElement('button');
    newBttn.innerText = 'Hey';
    container.appendChild(newBttn);
}
