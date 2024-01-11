export async function mediaTemplate(data) {
    const { id, photographerId, title, image, video, likes, date, price } = data;

    let params = new URLSearchParams(document.location.search);
    let urlId = photographerId;
    urlId = parseInt(params.get("id"));

    const localStorage = window.localStorage.getItem("photographe");
    const photographerLocal = JSON.parse(localStorage);

    const picture = `assets/photographers/Sample Photos/${photographerLocal.name}/${image}`;
    const videoMedia = `assets/photographers/Sample Photos/${photographerLocal.name}/${video}`;

    async function getMediaResult() {
        const mediaDisplay = document.querySelector(".media-display");
        const articleMedia = document.createElement("article");
        articleMedia.classList.add("mediaArticle");
        const linkLightbox = document.createElement("a");
        linkLightbox.setAttribute("href", "#")
        linkLightbox.dataset.id = urlId;
        linkLightbox.classList.add("linkLightbox");
        const imgMedia = document.createElement("img");
        imgMedia.setAttribute("src", picture);
        imgMedia.setAttribute("alt", title);
        imgMedia.dataset.id = id;
        imgMedia.classList.add("imageMedia");
        const playMedia = document.createElement("video");
        playMedia.setAttribute("src", videoMedia);
        playMedia.setAttribute("alt", title);
        playMedia.classList.add("playMedia");
        const titleLikes = document.createElement("div");
        titleLikes.classList.add("titleLikes");
        const likeHeart = document.createElement("div");
        likeHeart.classList.add("likeHeart");
        const titleMedia = document.createElement("p");
        titleMedia.textContent = title;
        titleMedia.classList.add("titleMedia");
        const likeMedia = document.createElement("p");
        likeMedia.textContent = likes;
        likeMedia.classList.add("likeMedia");
        const heartMedia = document.createElement("img");
        heartMedia.setAttribute("src", "https://img.icons8.com/windows/32/901C1C/filled-heart.png");
        heartMedia.setAttribute("alt", "coeur");
        heartMedia.classList.add("heartMedia");
        const dateMedia = document.createElement("p");
        dateMedia.textContent = date;
        dateMedia.classList.add("dateMedia");
        const priceMedia = document.createElement("p");
        priceMedia.textContent = price;
        priceMedia.classList.add("priceMedia");
        if (image) {
            linkLightbox.appendChild(imgMedia);
        } else if (video) {
            linkLightbox.appendChild(playMedia);
        }
        likeHeart.appendChild(likeMedia);
        likeHeart.appendChild(heartMedia);
        titleLikes.appendChild(titleMedia);
        titleLikes.appendChild(likeHeart);
        articleMedia.appendChild(linkLightbox);
        articleMedia.appendChild(titleLikes);
        articleMedia.appendChild(dateMedia);
        articleMedia.appendChild(priceMedia);
        mediaDisplay.appendChild(articleMedia);
    }
    return { id, photographerId, title, picture, video, likes, date, price, getMediaResult }
}