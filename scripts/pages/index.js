import {photographerTemplate} from "../templates/photographer.js";

async function getPhotographers() {
    const reponce = await fetch("http://localhost:8081/photographers");
    const reponceContenu = await reponce.json();
    console.log(reponceContenu);
    return reponceContenu
}

async function displayData() {
    let contenu = await fetch("http://localhost:8081/photographers");
    let photographers = await contenu.json();
    let prout = getPhotographers();
    console.log(prout);

    for await (let photographer of photographers) {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = (await photographerModel).getUserCardDOM(photographer);
    }


    /*photographers.forEach((photographer) => {

    })*/
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    await displayData(photographers);
}

init();

    
