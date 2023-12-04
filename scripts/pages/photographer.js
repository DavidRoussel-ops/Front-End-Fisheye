//Mettre le code JavaScript lié à la page photographer.html
async function getMedia() {
    const response = await fetch("http://localhost:63342/Front-End-Fisheye/data/photographers.json");
    const responseMedia = await response.json();
    console.log(responseMedia);
    return responseMedia;
}

async function displayPhotographers(photographers) {
    const photographersSection = document.querySelector(".photographer-header");

    photographers.forEach((photographer) => {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        photographersSection.appendChild(userCardDOM);
    });
}

async function init() {
    const { photographers } = await getMedia();
    await displayPhotographers(photographers);
}

init();

