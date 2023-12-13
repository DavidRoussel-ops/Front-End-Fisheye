export async function createModal() {
    //const { name } = data

    async function modal() {
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
        const labelFirstname = document.createElement("label");
        labelFirstname.textContent = "Prénom";
        const inputFirstname = document.createElement("input");
        inputFirstname.setAttribute("type", "text");
        const labelLastname = document.createElement("label");
        labelLastname.textContent = "Nom";
        const inputLastname = document.createElement("input");
        inputLastname.setAttribute("type", "text");
        const labelEmail = document.createElement("label");
        labelEmail.textContent = "Email";
        const inputEmail = document.createElement("input");
        inputEmail.setAttribute("type", "email");
        const labelMessage = document.createElement("label");
        labelMessage.textContent = "Votre message";
        const inputMessage = document.createElement("input");
        inputMessage.setAttribute("type", "textarea");
        inputMessage.style.height = "150px";
        const btnSend = document.createElement("button");
        btnSend.classList.add("send_button");
        btnSend.textContent = "Envoyer";
        divInput.appendChild(labelFirstname);
        divInput.appendChild(inputFirstname);
        divInput.appendChild(labelLastname);
        divInput.appendChild(inputLastname);
        divInput.appendChild(labelEmail);
        divInput.appendChild(inputEmail);
        divInput.appendChild(labelMessage);
        divInput.appendChild(inputMessage);
        form.appendChild(divInput);
        form.appendChild(btnSend);
        header.appendChild(h2);
        header.appendChild(img);
        modal.appendChild(header);
        modal.appendChild(form);
        contactModal.appendChild(modal);
    }
    return { name, modal }
}