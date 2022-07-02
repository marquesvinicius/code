const validUserNames = usernames => {
    return usernames.filter(username => {
        return username.length < 10
    })
}

// or
// const validUserNames = usernames => (
//     usernames.filter(username => {
//         return username.length < 10
//     })
// )

const valid = validUserNames(['mark', 'stacetsmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']);

console.log(valid);