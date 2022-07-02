// DEFINE YOUR FUNCTION BELOW:
// function capitalize(str) {
//     let firstLetter = str[0].toUpperCase();
//     let newStr = str.slice(1, str.length);
//     newStr.
//     return newStr;
// }

function capitalize(str) {
    let newStr = str.replace(str[0], str[0].toUpperCase());
    return newStr;
}

console.log(capitalize('squid'));