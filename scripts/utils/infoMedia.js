/*export function postInfoMedia() {
    const linkMedia = document.querySelectorAll(".linkLightbox");
    for (let i = 0; i < linkMedia.length; i++) {
        linkMedia[i].addEventListener("click", function (event) {
            console.log(event.target);
            let image = event.target.querySelector(".imageMedia").src;
            let video = event.target.querySelector(".playMedia").src;
            let title = event.target.querySelector(".titleMedia").textContent;
            let infoMedia = {
                "picture" : image,
                "video" : video,
                "title" : title
            };
            window.localStorage.setItem("media", JSON.stringify(infoMedia));
        });
    }
}*/