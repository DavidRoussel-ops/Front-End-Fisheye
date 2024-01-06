import {photographerIdTemplate} from "../templates/photographerId.js";
//import {createModal} from "../templates/modal.js";
import {mediaTemplate} from "../templates/media.js";

let params = new URLSearchParams(document.location.search)
let idPage = parseInt(params.get("id"));
console.log(idPage);

/*async function getMedias() {
    const media = await fetch("http://localhost:8081/media").then(media => media.json());
    let mediaTemplate = mediaTemplate();
    let afficheMedia = (await mediaTemplate).getMediaResult(media);
}

async function displayMedias(media) {

}

async function showModal() {
    const modalContact = document.getElementById("contact_modal");
    const base = createModal();
    const modal = (await base).modal();
    await modalContact.appendChild(modal);
}
*/
async function init() {
    photographerIdTemplate();
    //const { medias } = await getMedias() || {};
    //await displayMedias(medias);
    //await showModal();
}

init();

