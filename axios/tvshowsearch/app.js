const form = document.querySelector('#searchForm');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    clear();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows?`, config);
    // console.log(res.data[0].show.image.medium);
    displayImages(res.data);
    form.elements.query.value = '';
})

const displayImages = (shows) => {
    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('img');
            img.src = result.show.image.medium;
            document.body.append(img);
        }
    }
}

const clear = () => {
    const allImages = document.querySelectorAll('img');
    for (let image of allImages) {
        image.remove();
    }
}