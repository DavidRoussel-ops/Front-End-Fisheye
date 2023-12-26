export function postIdPhotographer() {
    const linkPhotographer = document.querySelector(".photographer_section");
    linkPhotographer.addEventListener("click", function (event) {
        console.log(event.target.dataset.id);
        const id = event.target.dataset.id;
        window.localStorage.setItem("id", id);
    });
}