import {photographerIdTemplate} from "../templates/photographerId.js";
import {mediaTemplate} from "../templates/media.js";
import {lightBoxTemplate} from "../templates/lightBox.js";

async function showMedias() {
    const medias = await fetch("http://localhost:8081/media").then(media => media.json());
    return medias;
}

async function displayMedias() {

    const medias = await fetch("http://localhost:8081/media").then(medias => medias.json());
    for (let media of medias) {
        let params = new URLSearchParams(document.location.search)
        let idPage = parseInt(params.get("id"));
        let template = mediaTemplate(media);
        let templatePhotographerId = (await template).photographerId;
        if (idPage === templatePhotographerId) {
            await (await template).getMediaResult();
        }
    }
}

async function displayLightbox() {

    const medias = await fetch("http://localhost:8081/media").then(medias => medias.json());
    let params = new URLSearchParams(document.location.search);
    let idPage = parseInt(params.get("id"));
    let template = lightBoxTemplate(medias);
    let templatePhotographerId = (await template).photographerId;
    if (idPage === templatePhotographerId) {
        await (await template).getMediaLightBox();
    }
}

async function showTotalLikes() {
    const likesPrices = document.querySelector(".likesPrices");
    let likes = document.querySelectorAll(".likeMedia");
    let arrayLikes = [];
    for (let i = 0; i < likes.length; i++) {
        arrayLikes.push(parseInt(likes[i].innerText));
    }
    let sum = 0;
    for (let i = 0; i < arrayLikes.length; i++) {
        sum += arrayLikes[i];
    }
    const divTotalLikes = document.createElement("div");
    divTotalLikes.classList.add("divTotalLikes");
    const total = document.createElement("p");
    total.textContent = sum;
    total.classList.add("total");
    const heartTotal = document.createElement("img");
    heartTotal.setAttribute("src", "https://img.icons8.com/windows/32/filled-heart.png");
    heartTotal.setAttribute("alt", "coeur");
    heartTotal.classList.add("heartTotal");
    divTotalLikes.appendChild(total);
    divTotalLikes.appendChild(heartTotal);
    likesPrices.appendChild(divTotalLikes);
}

async function init() {
    photographerIdTemplate();
    const { medias } = await showMedias();
    await displayMedias(medias);
    await displayLightbox(medias);
    await showTotalLikes();
}

init();

