import {openLightbox} from "../utils/utilsLightbox.js";

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
        linkLightbox.setAttribute("href", "javascript:void(0)")
        linkLightbox.dataset.id = urlId;
        linkLightbox.classList.add("linkLightbox");
        linkLightbox.onclick = function () {openLightbox()};
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
        const lightBox = document.createElement("div");
        lightBox.classList.add("lightBox");
        const btnCLose = document.createElement("button");
        btnCLose.classList.add("btnCloseLightbox");
        const btnNext = document.createElement("button");
        btnNext.classList.add("btnNextLightbox");
        const btnPrev = document.createElement("button");
        btnPrev.classList.add("btnPrevLightbox");
        const containerLightbox = document.createElement("div");
        containerLightbox.classList.add("containerLightbox");
        const imgLightbox = document.createElement("img");
        imgLightbox.setAttribute("src", picture);
        imgLightbox.setAttribute("alt", "photo");
        imgLightbox.classList.add("imgLightbox");
        const videoLightbox = document.createElement("video");
        videoLightbox.setAttribute("src", videoMedia);
        videoLightbox.setAttribute("alt", "video");
        videoLightbox.classList.add("videoLightbox");
        const titleLightbox = document.createElement("p");
        titleLightbox.textContent = title;
        titleLightbox.classList.add("titleLightbox");
        if (image) {
            linkLightbox.appendChild(imgMedia);
        } else if (video) {
            linkLightbox.appendChild(playMedia);
        }
        likeHeart.appendChild(likeMedia);
        likeHeart.appendChild(heartMedia);
        titleLikes.appendChild(titleMedia);
        titleLikes.appendChild(likeHeart);
        containerLightbox.appendChild(titleLightbox);
        if (image) {
            lightBox.appendChild(imgLightbox);
        } else if (video) {
            lightBox.appendChild(videoLightbox);
        }
        lightBox.appendChild(containerLightbox);
        lightBox.appendChild(btnPrev);
        lightBox.appendChild(btnNext);
        lightBox.appendChild(btnCLose);
        articleMedia.appendChild(lightBox);
        articleMedia.appendChild(linkLightbox);
        articleMedia.appendChild(titleLikes);
        articleMedia.appendChild(dateMedia);
        articleMedia.appendChild(priceMedia);
        mediaDisplay.appendChild(articleMedia);
    }
    return { id, photographerId, title, picture, video, likes, date, price, getMediaResult }
}