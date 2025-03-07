// Sélection des éléments HTML nécessaires
const elementframe = document.getElementById("frame");
const affiche = document.getElementById("affiche");
const profileCard = document.getElementById("profile-card");
const backButton = document.getElementById("back-button");

// Ajout d'un écouteur d'événement sur le menu de la barre latérale
document.querySelector(".sidebar-menu").addEventListener("click", function (event) {
    if (event.target.tagName === "A" || event.target.parentElement.tagName === "A") {
        event.preventDefault();
        const url = event.target.getAttribute("data-url") || event.target.parentElement.getAttribute("data-url");

        affiche.classList.add("loading");

        if (affiche.classList.contains("visible")) {
            affiche.classList.remove("visible");
            setTimeout(() => {
                elementframe.src = url;
                affiche.classList.add("visible");
                affiche.classList.remove("loading");
                backButton.style.display = "block";
            }, 500);
        } else {
            elementframe.src = url;
            profileCard.style.display = "none";
            affiche.style.display = "block";
            setTimeout(() => {
                affiche.classList.add("visible");
                affiche.classList.remove("loading");
                backButton.style.display = "block";
            }, 10);
        }
    }
});

// Ajout d'un écouteur d'événement sur le bouton Retour
backButton.addEventListener("click", function () {
    affiche.classList.remove("visible");
    profileCard.style.display = "flex";
    affiche.style.display = "none";
    backButton.style.display = "none";
});