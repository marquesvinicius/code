// axios.get("https://swapi.dev/api/people/1/").then((res) => {
//     console.log("RESPOSTA: ", res);
// })
//     .catch(e => {
//         console.log("ERRO!", e);
//     })

const getStarWarsPerson = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}/`);
        console.log(res.data);
    } catch (e) {
        console.log("ERRO!", e);
    }
}

getStarWarsPerson(2);