export function postIdPhotographer() {
    const linkPhotographer = document.querySelector(".photographer_section");
    linkPhotographer.addEventListener("click", function (event) {
        let id = event.target.querySelector(".pId").textContent;
        let img = event.target.querySelector("img").src;
        let name = event.target.querySelector("h2").textContent;
        let city = event.target.querySelector(".pCity").textContent;
        let country = event.target.querySelector(".pCountry").textContent;
        let tagline = event.target.querySelector(".pTagline").textContent;
        let price = event.target.querySelector(".pPrice").textContent;
        window.localStorage.setItem("id", id);
        window.localStorage.setItem("picture", img);
        window.localStorage.setItem("name", name);
        window.localStorage.setItem("city", city);
        window.localStorage.setItem("country", country);
        window.localStorage.setItem("tagline", tagline);
        window.localStorage.setItem("price", price);
    });
}