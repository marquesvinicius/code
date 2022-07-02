const h1 = document.querySelector('h1');
const inputName = document.querySelector('#username');

inputName.addEventListener('input', (e) => {
    const newString = `Welcome, ${inputName.value}`;
    h1.innerText = newString;

    if (inputName.value === '') {
        h1.innerText = 'Enter Your Username';
    }
})