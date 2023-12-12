import {photographerIdTemplate} from "../templates/photographerId.js";

async function getMedia() {
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

async function init() {
    const { photographers } = await getMedia();
    await displayPhotographers(photographers);
}

init();

