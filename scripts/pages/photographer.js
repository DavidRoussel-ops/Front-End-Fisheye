import {photographerIdTemplate} from "../templates/photographerId.js";
import {createModal} from "../templates/modal.js";
import {mediaTemplate} from "../templates/media.js";

async function getMedias() {
    const fetchCall = await fetch("http://localhost:8081/media");
    const responceMedia = await fetchCall.json();
}

async function displayMedias(data) {
    const apiMedia = await fetch("http://localhost:8081/media");
    const arrayMedias = await apiMedia.json();

    for (let i = 0; i < arrayMedias.length; i++) {
        let idPhotographer = arrayMedias.map(arrayMedias => arrayMedias.photographerId = 243);
    }

    for (let media of arrayMedias) {
        const mediaModel = mediaTemplate(media);
        const mediaDOM = (await mediaModel).getMediaResult(media);
        return mediaDOM
    }
}

async function showModal() {
    const modalContact = document.getElementById("contact_modal");
    const base = createModal();
    const modal = (await base).modal();
    await modalContact.appendChild(modal);
}

async function init() {
    photographerIdTemplate();
    const { medias } = await getMedias() || {};
    await displayMedias(medias);
    await showModal();
}

init();

