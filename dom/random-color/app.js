const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', () => {
    const newColor = generateRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const generateRandColor = () => {
    const r = generateRColor();
    const g = generateGColor();
    const b = generateBColor();

    if ((r < 120 && g < 120) || (r < 120 && b < 120) || (g < 120 && b < 120)) {
        h1.style.color = 'white';
    }
    else {
        h1.style.color = 'black';
    }

    return `rgb(${r}, ${g}, ${b})`;
}

const generateRColor = () => {
    return Math.floor(Math.random() * 255);
}

const generateGColor = () => {
    return Math.floor(Math.random() * 255);
}

const generateBColor = () => {
    return Math.floor(Math.random() * 255);
}