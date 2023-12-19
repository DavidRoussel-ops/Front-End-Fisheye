export function getIdPhotographer() {
    const linkPhotographer = document.querySelectorAll(".containerPictureH2");

    for (let i = 0; i < linkPhotographer.length; i++) {

        linkPhotographer[i].addEventListener("click", async function (event) {

            const id = event.target.dataset.id;
            const rep = await fetch(`http://localhost:8081/photographers/${id}`);
            const jsonRep = await rep.json();
            const parentElement = event.target.parentElement;

            const goPhotographer = document.createElement("a");
            goPhotographer.setAttribute("href", `${id}/photographer.html`);
            console.log(goPhotographer);
            parentElement.appendChild(goPhotographer);
        })
    }
}