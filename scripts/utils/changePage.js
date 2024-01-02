export function postInfoPhotographer() {
    const linkPhotographer = document.querySelectorAll(".containerPictureH2");
    for (let i = 0; i < linkPhotographer.length; i++) {
        linkPhotographer[i].addEventListener("click", function (event) {
            let id = event.target.querySelector(".pId").textContent;
            let img = event.target.querySelector("img").src;
            let name = event.target.querySelector("h2").textContent;
            let city = event.target.querySelector(".cityInfo").textContent;
            let country = event.target.querySelector(".countryInfo").textContent;
            let tagline = event.target.querySelector(".taglineInfo").textContent;
            let price = event.target.querySelector(".priceInfo").textContent;
            let photographerInfo = {
                "id" : id,
                "picture" : img,
                "name" : name,
                "city" : city,
                "country" : country,
                "tagline" : tagline,
                "price" : price
            };
            window.localStorage.setItem("photographe", JSON.stringify(photographerInfo));
        });
    }

}