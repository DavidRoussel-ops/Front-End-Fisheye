async function photographerTemplate(data) {
    const reponce = await fetch("./data/photographers.json");
    data = await reponce.json();
    console.log(data[0]);

    async function getUserCardDOM() {
        const article = document.createElement('article');
        const idPhotographer = data.id;
        const imgPhotographer = document.createElement('img');
        imgPhotographer.setAttribute("src", data.portrait)
        const namePhotographer = document.createElement('h2');
        namePhotographer.textContent = data.name;
        const countryPhotographer = document.createElement("p");
        countryPhotographer.textContent = data.country;
        const cityPhotographer = document.createElement("p");
        cityPhotographer.textContent = data.city;
        const tagLinePhotographer = document.createElement("p");
        tagLinePhotographer.textContent = data.tagline;
        const pricePhotographer = document.createElement("p");
        pricePhotographer.textContent = `${data.price}€/jour`;
        article.appendChild(idPhotographer);
        article.appendChild(imgPhotographer);
        article.appendChild(namePhotographer);
        article.appendChild(countryPhotographer);
        article.appendChild(cityPhotographer);
        article.appendChild(tagLinePhotographer);
        article.appendChild(pricePhotographer);
        return (article);
    }

    return {getUserCardDOM}
}