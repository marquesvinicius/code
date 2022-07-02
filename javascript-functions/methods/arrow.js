const greet1 = str => {
    return `Hey ${str}!`;
}

//implicit returns only works if the block has only one line of code

const greet2 = str => (
    `Hey ${str}`
)

const greet3 = str => `Hey ${str}`

console.log(greet("Luna"));