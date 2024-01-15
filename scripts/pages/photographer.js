import {photographerIdTemplate} from "../templates/photographerId.js";
import {mediaTemplate} from "../templates/media.js";
import {lightBoxTemplate} from "../templates/lightBox.js";
import {postInfoMedia} from "../utils/infoMedia.js";
import {selectFunction} from "../utils/selectFunction.js";

async function showMedias() {
    const medias = await fetch("http://localhost:8081/media").then(media => media.json());
    return medias;
}

async function displayMedias() {
    const select = document.querySelector(".selectOption");
    const medias = await fetch("http://localhost:8081/media").then(medias => medias.json());
    for (let media of medias) {
        const params = new URLSearchParams(document.location.search)
        const idPage = parseInt(params.get("id"));
        const template = mediaTemplate(media);
        const templatePhotographerId = (await template).photographerId;
        if (idPage === templatePhotographerId) {
            await (await template).getMediaResult();
        }
    }
    select.addEventListener("change", async function (event) {
        const medias = await fetch("http://localhost:8081/media").then(medias => medias.json());
        switch (event.target.value) {
            case "popularity" :
                for (let media of medias) {
                    const params = new URLSearchParams(document.location.search)
                    const idPage = parseInt(params.get("id"));
                    const template = mediaTemplate(media);
                    console.log(template);
                    const templateTilte = (await template).title;
                    console.log(templateTilte);
                    templateTilte.sort();
                    console.log(templateTilte);
                    console.log(templateTilte);
                    const templatePhotographerId = (await template).photographerId;
                    if (idPage === templatePhotographerId) {
                        await (await templateTilte).getMediaResult();
                    }
                }
                break;
            case "date" :
                alert("Vous étes sur la liste ordonnée selon la date des photos");
                break;
            case "title" :
                alert("Vous étes sur la liste ordonnée selon le titre des photos");
                break;
        }
    });
}

async function displayLightbox() {
    const body = document.querySelector("body");
    const lightboxContainer = document.createElement("div");
    lightboxContainer.classList.add("lightboxContainer");
    const medias = await fetch("http://localhost:8081/media").then(media => media.json());
    for (let media of medias) {
        let params = new URLSearchParams(document.location.search);
        let idPage = parseInt(params.get("id"));
        let template = lightBoxTemplate(media);
        let templatePhotographerId = (await template).photographerId;
        if (idPage === templatePhotographerId) {
            await (await template).getMediaLightBox();
        }
    }
    body.appendChild(lightboxContainer);
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
    selectFunction();
    const { medias } = await showMedias();
    await displayMedias(medias);
    await displayLightbox(medias);
    await showTotalLikes();
    postInfoMedia();
}

init();

