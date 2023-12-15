import {photographerIdTemplate} from "../templates/photographerId.js";
import {createModal} from "../templates/modal.js";
import {mediaTemplate} from "../templates/media.js";

async function getPhotographers() {
    const response = await fetch("http://localhost:8081/photographers");
    const responsePhotographer = await response.json();
    console.log(responsePhotographer);
    return responsePhotographer;
}

async function getMedias() {
    const fetchCall = await fetch("http://localhost:8081/media");
    const responceMedia = await fetchCall.json();
    console.log(responceMedia);
}

async function displayPhotographers() {
    const apiPhotographer = await fetch("http://localhost:8081/photographers");
    const arrayPhotographers = await apiPhotographer.json();

    for await (let photographer of arrayPhotographers) {
        console.log(photographer);
        const photographerIdModel = photographerIdTemplate(photographer);
        const idCardDOM = (await photographerIdModel).getOnePhotographer(photographer);
        return idCardDOM
    }
}

async function displayMedias(data) {
    const apiMedia = await fetch("http://localhost:8081/media");
    const arrayMedias = await apiMedia.json();
    console.log(arrayMedias);

    for (let i = 0; i < arrayMedias.length; i++) {
        let idPhotographer = arrayMedias.map(arrayMedias => arrayMedias.photographerId = 243);
        console.log(idPhotographer);
    }

    for (let media of arrayMedias) {
        const mediaModel = mediaTemplate(media);
        const mediaDOM = (await mediaModel).getMediaResult(media);
        console.log(mediaDOM);
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
    const { photographers } = await getPhotographers();
    await displayPhotographers(photographers);
    const { medias } = await getMedias() || {};
    await displayMedias(medias);
    await showModal();
}

init();

