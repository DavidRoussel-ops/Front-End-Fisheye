function photographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/Sample Photos/Photographers ID Photos/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const cityCountry = document.createElement("div");
        cityCountry.classList.add("cityCountry");
        const containerPictureH2 = document.createElement("div");
        containerPictureH2.id = "containerPictureH2";
        containerPictureH2.addEventListener("click", () => {
            console.log("clické");
        })
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture);
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        const pId = document.createElement("p");
        pId.textContent = id;
        pId.classList.add("pId");
        const pCity = document.createElement("p");
        pCity.textContent = `${city},`;
        pCity.classList.add("pCity");
        const pCountry = document.createElement("p");
        pCountry.textContent = ` ${country}`;
        pCountry.classList.add("pCountry");
        const pTagline = document.createElement("p");
        pTagline.textContent = tagline;
        pTagline.classList.add("pTagline");
        const pPrice = document.createElement("p");
        pPrice.textContent = `${price}€/jour`;
        pPrice.classList.add("pPrice");
        containerPictureH2.appendChild(img);
        containerPictureH2.appendChild(h2);
        cityCountry.appendChild(pCity);
        cityCountry.appendChild(pCountry);
        article.appendChild(containerPictureH2);
        article.appendChild(pId);
        article.appendChild(cityCountry);
        article.appendChild(pTagline);
        article.appendChild(pPrice);
        return (article);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}