export async function mediaTemplate(data) {
    const { id, photographerId, title, image, likes, date, price } = data;

    let params = new URLSearchParams(document.location.search);
    let urlId = photographerId;
    urlId = parseInt(params.get("id"));

    const localStorage = window.localStorage.getItem("photographe");
    const photgrapherLocal = JSON.parse(localStorage);

    const picture = `assets/photographers/Sample Photos/${photgrapherLocal.name}/${image}`;

    async function getMediaResult() {
        const mediaDisplay = document.querySelector(".media-display");
        const articleMedia = document.createElement("article");
        articleMedia.classList.add("mediaArticle");
        const linkLightbox = document.createElement("a");
        linkLightbox.dataset.id = urlId;
        const imgMedia = document.createElement("img");
        imgMedia.setAttribute("src", picture);
        imgMedia.setAttribute("alt", title);
        imgMedia.dataset.id = id;
        imgMedia.classList.add("imageMedia");
        const likeMedia = document.createElement("p");
        likeMedia.textContent = likes;
        const dateMedia = document.createElement("p");
        dateMedia.textContent = date;
        const priceMedia = document.createElement("p");
        priceMedia.textContent = price;
        linkLightbox.appendChild(imgMedia);
        articleMedia.appendChild(linkLightbox);
        articleMedia.appendChild(likeMedia);
        articleMedia.appendChild(dateMedia);
        articleMedia.appendChild(priceMedia);
        mediaDisplay.appendChild(articleMedia);
    }
    return { id, photographerId, title, picture, likes, date, price, getMediaResult }
}