export async function lightBoxTemplate(data) {
    const {photographerId, image, video, title} = data;

    const localStorage = window.localStorage.getItem("photographe");
    const photographerLocal = JSON.parse(localStorage);

    const picture = `assets/photographers/Sample Photos/${photographerLocal.name}/${image}`;
    const videoMedia = `assets/photographers/Sample Photos/${photographerLocal.name}/${video}`;

    async function getMediaLightBox() {
        //const body = document.querySelector("body");
        const lightBox = document.createElement("div");
        lightBox.classList.add("lightBox");
        const btnCLose = document.createElement("button");
        btnCLose.classList.add("btnCloseLightbox");
        const btnNext = document.createElement("button");
        btnNext.classList.add("btnNextLightbox");
        const btnPrev = document.createElement("button");
        btnPrev.classList.add("btnPrevLightbox");
        const containerLightbox = document.createElement("div");
        containerLightbox.classList.add("containerLightbox");
        const imgLightbox = document.createElement("img");
        imgLightbox.setAttribute("src", picture);
        imgLightbox.setAttribute("alt", title);
        imgLightbox.classList.add("imgLightbox");
        const videoLightbox = document.createElement("video");
        videoLightbox.setAttribute("src", videoMedia);
        videoLightbox.setAttribute("alt", title);
        videoLightbox.classList.add("videoLightbox");
        const titleLightbox = document.createElement("p");
        titleLightbox.textContent = title;
        titleLightbox.classList.add("titleLightbox");
        if (image) {
            containerLightbox.appendChild(imgLightbox);
        } else if (video) {
            containerLightbox.appendChild(videoLightbox);
        }
        containerLightbox.appendChild(titleLightbox);
        lightBox.appendChild(containerLightbox);
        lightBox.appendChild(btnPrev);
        lightBox.appendChild(btnNext);
        lightBox.appendChild(btnCLose);
        //body.appendChild(lightBox);
    }

    return {photographerId, picture, videoMedia, title, getMediaLightBox }
}