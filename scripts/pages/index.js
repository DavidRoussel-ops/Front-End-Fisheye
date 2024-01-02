import {photographerTemplate} from "../templates/photographer.js";
import {postInfoPhotographer} from "../utils/changePage.js";

async function getPhotographers() {
    const reponce = await fetch("http://localhost:8081/photographers");
    const reponceContenu = await reponce.json();
    return reponceContenu
}

async function displayData() {
    let contenu = await fetch("http://localhost:8081/photographers");
    let photographers = await contenu.json();

    for await (let photographer of photographers) {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = (await photographerModel).getUserCardDOM(photographer);
    }
}

async function getIdPhotographers() {
    const response = await fetch("http://localhost:8081/photographers");
    const responsePhotographer = await response.json();
    const idPhotographer = responsePhotographer.map(photographer => photographer.id);
}

getIdPhotographers();

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    await displayData(photographers);
    postInfoPhotographer();
}

init();

    
