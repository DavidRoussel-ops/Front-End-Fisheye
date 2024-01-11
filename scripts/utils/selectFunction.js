import {mediaTemplate} from "../templates/media.js";

export async function selectLikes() {
    const optionPopularite = document.querySelector(".popularite");
    optionPopularite.addEventListener("click", function () {
        const medias = fetch("http://localhost:8081/media").then(medias => medias.json());
        for (let media of medias) {
            const params = new URLSearchParams(document.location.search)
            const idPage = parseInt(params.get("id"));
            const template = mediaTemplate(media);
            const templatePhotographerId = (template).photographerId;
            if (idPage === templatePhotographerId) {
                (template).getMediaResult();
                const populateLikes = Array.from(media);
                populateLikes.sort(function (a, b) {
                    return a.likes - b.likes;
                });
                console.log(populateLikes);
            }
        }
    })

}

