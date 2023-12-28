export async function photographerTemplate(data) {
    const { name, portrait, id, city, country, tagline, price } = data;

    const picture = `assets/photographers/Sample Photos/Photographers ID Photos/${portrait}`;

     async function getUserCardDOM() {
           const section = document.querySelector(".photographer_section");
           const article = document.createElement( 'article' );
           const cityCountry = document.createElement("div");
           cityCountry.classList.add("cityCountry");
           const containerPictureH2 = document.createElement("a");
           containerPictureH2.classList.add("containerPictureH2");
           containerPictureH2.dataset.id = id;
           containerPictureH2.setAttribute("href", "photographer.html");
           const img = document.createElement( 'img' );
           img.setAttribute("src", picture);
           img.setAttribute("alt", name);
           const h2 = document.createElement( 'h2' );
           h2.textContent = name;
           const pId = document.createElement("p");
           pId.textContent = id;
           pId.classList.add("pId");
           const cityPhotographer = document.createElement("p");
           cityPhotographer.textContent = city;
           cityPhotographer.classList.add("cityInfo");
           const pCity = document.createElement("p");
           pCity.textContent = `${city},`;
           pCity.classList.add("pCity");
           const countryPhtographer = document.createElement("p");
           countryPhtographer.textContent = country;
           countryPhtographer.classList.add("countryInfo");
           const pCountry = document.createElement("p");
           pCountry.textContent = ` ${country}`;
           pCountry.classList.add("pCountry");
           const taglinePhotographer = document.createElement("p");
           taglinePhotographer.textContent = tagline;
           taglinePhotographer.classList.add("taglineInfo");
           const pTagline = document.createElement("p");
           pTagline.textContent = tagline;
           pTagline.classList.add("pTagline");
           const pricePhotographer = document.createElement("p");
           pricePhotographer.textContent = `${price}€/jour`;
           pricePhotographer.classList.add("priceInfo");
           const pPrice = document.createElement("p");
           pPrice.textContent = `${price}€/jour`;
           pPrice.classList.add("pPrice");
           containerPictureH2.appendChild(img);
           containerPictureH2.appendChild(h2);
           containerPictureH2.appendChild(pId);
           containerPictureH2.appendChild(pricePhotographer);
           containerPictureH2.appendChild(taglinePhotographer);
           containerPictureH2.appendChild(countryPhtographer);
           containerPictureH2.appendChild(cityPhotographer)
           cityCountry.appendChild(pCity);
           cityCountry.appendChild(pCountry);
           article.appendChild(containerPictureH2);
           article.appendChild(cityCountry);
           article.appendChild(pTagline);
           article.appendChild(pPrice);
           section.appendChild(article);
    }
    return { name, picture, id, city, country, tagline, price, getUserCardDOM }
}