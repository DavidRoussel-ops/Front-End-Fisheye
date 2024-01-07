import {photographerIdTemplate} from "../templates/photographerId.js";
import {mediaTemplate} from "../templates/media.js";


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
        console.log(templatePhotographerId);
        if (idPage === templatePhotographerId) {
            let afficherMedias = (await template).getMediaResult();
        }
    }
}

async function init() {
    photographerIdTemplate();
    const { medias } = await showMedias();
    await displayMedias(medias);
}

init();

