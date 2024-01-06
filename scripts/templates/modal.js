function createModal() {
    const contactModal = document.getElementById("contact_modal");
    const modal = document.createElement("div");
    modal.classList.add("modal");
    const header = document.createElement("header");
    const h2 = document.createElement("h2");
    h2.textContent = `Contactez-moi ${name}`;
    const img = document.createElement("img");
    img.setAttribute("src", "assets/icons/close.svg");
    img.setAttribute("alt", "Croix de fermeture modal");
    img.onclick = () => { contactModal.style.display = "none" };
    const form = document.createElement("form");
    const divInput = document.createElement("div");
    const errorPopupPrenom = document.createElement("div");
    errorPopupPrenom.id = "errorPopupPrenom";
    const labelFirstname = document.createElement("label");
    labelFirstname.textContent = "Prénom";
    const inputFirstname = document.createElement("input");
    inputFirstname.setAttribute("type", "text");
    inputFirstname.classList.add("input-firstname");
    const errorPopupNom = document.createElement("div");
    errorPopupNom.id = "errorPopupNom";
    const labelLastname = document.createElement("label");
    labelLastname.textContent = "Nom";
    const inputLastname = document.createElement("input");
    inputLastname.setAttribute("type", "text");
    inputLastname.classList.add("input-lastname");
    const errorPopupEmail = document.createElement("div");
    errorPopupEmail.id = "errorPopupEmail";
    const labelEmail = document.createElement("label");
    labelEmail.textContent = "Email";
    const inputEmail = document.createElement("input");
    inputEmail.setAttribute("type", "email");
    inputEmail.classList.add("input-email");
    const errorPopupTextarea = document.createElement("div");
    errorPopupTextarea.id = "errorPopupTextarea";
    const labelMessage = document.createElement("label");
    labelMessage.textContent = "Votre message";
    const inputMessage = document.createElement("input");
    inputMessage.setAttribute("type", "textarea");
    inputMessage.style.height = "150px";
    inputMessage.classList.add("input-message");
    const btnSend = document.createElement("button");
    btnSend.classList.add("send_button");
    btnSend.textContent = "Envoyer";
    errorPopupPrenom.appendChild(labelFirstname);
    errorPopupPrenom.appendChild(inputFirstname);
    errorPopupNom.appendChild(labelLastname);
    errorPopupNom.appendChild(inputLastname);
    errorPopupEmail.appendChild(labelEmail);
    errorPopupEmail.appendChild(inputEmail);
    errorPopupTextarea.appendChild(labelMessage);
    errorPopupTextarea.appendChild(inputMessage);
    divInput.appendChild(errorPopupPrenom);
    divInput.appendChild(errorPopupNom);
    divInput.appendChild(errorPopupEmail);
    divInput.appendChild(errorPopupTextarea);
    form.appendChild(divInput);
    form.appendChild(btnSend);
    header.appendChild(h2);
    header.appendChild(img);
    modal.appendChild(header);
    modal.appendChild(form);
    contactModal.appendChild(modal);
}

function checkFirstname(champ) {
    const inputFirstnameModal = document.querySelector(".input-firstname");
    if (champ.length < 2) {
        inputFirstnameModal.classList.add("errorInput");
        let spanErrorFirstname = document.getElementById("errorMessagePrenom");
        if (!spanErrorFirstname) {
            let errorPopupFirstname = document.getElementById("errorPopupPrenom");
            spanErrorFirstname = document.createElement("span");
            spanErrorFirstname.id = "errorMessagePrenom";
            spanErrorFirstname.classList.add("errorMessage");
            errorPopupFirstname.appendChild(spanErrorFirstname);
            spanErrorFirstname.innerText = "Le champ doit contenir au moins 2 caractères";
        }
    } else {
        inputFirstnameModal.classList.remove("errorInput");
        let spanErrorFirstname = document.getElementById("errorMessagePrenom");
        let errorPopupFirstname = document.getElementById("errorPopupPrenom");
        if (spanErrorFirstname) {
            errorPopupFirstname.removeChild(spanErrorFirstname);
        }
        return true;
    }
}

function checkLastname(champ) {
    const inputLastnameModal = document.querySelector(".input-lastname");
    if (champ.length < 2) {
        inputLastnameModal.classList.add("errorInput");
        let spanErrorLastname = document.getElementById("errorMessageNom");
        if (!spanErrorLastname) {
            let errorPopupLastname = document.getElementById("errorPopupNom");
            spanErrorLastname = document.createElement("span");
            spanErrorLastname.id = "errorMessageNom";
            spanErrorLastname.classList.add("errorMessage");
            errorPopupLastname.appendChild(spanErrorLastname);
            spanErrorLastname.innerText = "Le champ doit contenir au moins 2 caractères";
        }
    } else {
        inputLastnameModal.classList.remove("errorInput");
        let spanErrorLastname = document.getElementById("errorMessageNom");
        let errorPopupLastname = document.getElementById("errorPopupNom");
        if (spanErrorLastname) {
            errorPopupLastname.removeChild(spanErrorLastname);
        }
        return true;
    }
}

function checkEmail(champ) {
    const inputEmail = document.querySelector(".input-email");
    let emailRegExp = new RegExp("[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]\\.[a-zA-Z0-9._-]+");
    if (!emailRegExp.test(champ)) {
        inputEmail.classList.add("errorInput");
        let spanErrorEmail = document.getElementById("errorMessageEmail");
        if (!spanErrorEmail) {
            let errorPopupEmail = document.getElementById("errorPopupEmail");
            spanErrorEmail = document.createElement("span");
            spanErrorEmail.id = "errorMessageEmail";
            spanErrorEmail.classList.add("errorMessage");
            errorPopupEmail.appendChild(spanErrorEmail);
            spanErrorEmail.innerText = "L'e-mail n'est pas valide";
        }
    } else {
        inputEmail.classList.remove("errorInput");
        let spanErrorEmail = document.getElementById("errorMessageEmail");
        let errorPopupEmail = document.getElementById("errorPopupEmail");
        if (spanErrorEmail) {
            errorPopupEmail.removeChild(spanErrorEmail);
        }
        return true;
    }
}

function checkTextarea(champ) {
    const inputTextarea = document.querySelector(".input-message");
    if (champ.length > 150) {
        inputTextarea.classList.add("errorInput");
        let spanErrorTextarea = document.getElementById("errorMessageTextarea");
        if (!spanErrorTextarea) {
            let errorPopupTextarea = document.getElementById("errorPopupTextarea");
            spanErrorTextarea = document.createElement("span");
            spanErrorTextarea.id = "errorMessageTextarea";
            spanErrorTextarea.classList.add("errorMessage");
            errorPopupTextarea.appendChild(spanErrorTextarea);
            spanErrorTextarea.innerText = "Votre message ne doit contenir plus de 150 caractères";
        }
    } else {
        inputTextarea.classList.remove("errorInput");
        let spanErrorTextarea = document.getElementById("errorMessageTextarea");
        let errorPopupTextarea = document.getElementById("errorPopupTextarea");
        if (spanErrorTextarea) {
            errorPopupTextarea.removeChild(spanErrorTextarea);
        }
        return true;
    }
}

function validateForm() {
    const inputFirstname = document.querySelector(".input-firstname");
    const inputLastname = document.querySelector(".input-lastname");
    const inputEmail = document.querySelector(".input-email");
    const inputTextarea = document.querySelector(".input-message");
    const localStorage = window.localStorage.getItem("photographe");
    const localPhotographer = JSON.parse(localStorage);
    const btnSubmit = document.querySelector(".send_button");
    btnSubmit.addEventListener("click", () => {
        if (checkFirstname(inputFirstname.value) &&
        checkLastname(inputLastname.value) &&
        checkEmail(inputEmail.value) &&
        checkTextarea(inputTextarea.value) === true) {
            alert(`Merci pour votre commentaire ${localPhotographer.name} devrait revenir vers vous dès que possible.`);
            window.location.assign("http://localhost:63342/Front-End-Fisheye/index.html");
        }
    })
}

function launchForm() {
    createModal();
    validateForm();
}

launchForm();