import {photographerIdTemplate} from "../templates/photographerId.js";
import {createModal} from "../templates/modal.js";

async function getPhotographers() {
    const response = await fetch("http://localhost:8081/photographers");
    const responseMedia = await response.json();
    console.log(responseMedia);
    return responseMedia;
}

async function displayPhotographers() {
    const apiPhotographer = await fetch("http://localhost:8081/photographers");
    const arrayPhotographers = await apiPhotographer.json();

    for await (let photographer of arrayPhotographers) {
        const photographerIdModel = photographerIdTemplate(photographer);
        const idCardDOM = (await photographerIdModel).getOnePhotographer(photographer);
        return idCardDOM
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
    await showModal();
}

init();

