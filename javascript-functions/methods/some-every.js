const allEvens = nums => {
    return nums.every(num => {
        return num % 2 === 0;
    })
}

console.log(allEvens([1, 4, 6]));