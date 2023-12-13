export async function photographerIdTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;
    const picture = `assets/photographers/Sample Photos/Photographers ID Photos/${portrait}`;

    async function getOnePhotographer() {
        const section = document.querySelector(".photographer-header");
        section.dataset.id = id;
        const btnModal = document.querySelector(".contact_button");
        const container = document.createElement("div");
        container.classList.add("cardPhotographer");
        const img = document.createElement("img");
        img.setAttribute("src", picture);
        const namePhotographer = document.createElement("h1");
        namePhotographer.textContent = name;
        const containerCityCountry = document.createElement("div");
        containerCityCountry.classList.add("cityCountry");
        const cityPhotographer = document.createElement("p");
        cityPhotographer.textContent = `${city},`;
        cityPhotographer.classList.add("pCity");
        const countryPhotographer = document.createElement("p");
        countryPhotographer.textContent = ` ${country}`;
        countryPhotographer.classList.add("pCountry");
        const taglinePhotographer = document.createElement("p");
        taglinePhotographer.textContent = tagline;
        taglinePhotographer.classList.add("pTagline");
        const pricePhotographer = document.createElement("p");
        pricePhotographer.textContent = `${price}€ / jour`;
        pricePhotographer.classList.add("pPrice");
        container.appendChild(namePhotographer);
        containerCityCountry.appendChild(cityPhotographer);
        containerCityCountry.appendChild(countryPhotographer);
        container.appendChild(containerCityCountry);
        container.appendChild(taglinePhotographer);
        section.appendChild(container);
        section.appendChild(btnModal);
        section.appendChild(img);
        section.appendChild(pricePhotographer);
    }
    return { name, picture, id, city, country, tagline, price, getOnePhotographer }
}