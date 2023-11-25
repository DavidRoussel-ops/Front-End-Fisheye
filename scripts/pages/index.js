async function getPhotographers() {
    // Ceci est un exemple de données pour avoir un affichage de photographes de test dès le démarrage du projet,
    // mais il sera à remplacer avec une requête sur le fichier JSON en utilisant "fetch".
    const reponce = await fetch("./data/photographers.json");
    const photographers = await reponce.json();
    console.log(photographers);
    console.log(photographerTemplate());
    // et bien retourner le tableau photographers seulement une fois récupéré
    return photographers
}

async function displayData(photographers) {
    const photographersSection = document.querySelector(".photographer_section");

    for (const photographer of photographers) {
        const photographerModel = photographerTemplate(photographer);
        const userCardDOM = photographerModel.getUserCardDOM();
        await photographersSection.appendChild(userCardDOM);
    };
}

async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographers();
    await displayData(photographers);
}

init().then();
    
