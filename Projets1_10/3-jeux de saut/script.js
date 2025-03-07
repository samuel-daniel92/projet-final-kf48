// Sélection des éléments du DOM
const perso = document.querySelector(".perso");
const obstacle = document.querySelector(".obstacle");
const stateImage = document.querySelector("#image");
const scoreSpan = document.getElementById("score");
const highScoreSpan = document.getElementById("highScore");
const levelSpan = document.getElementById("level"); // Ajout du niveau
const startScreen = document.getElementById("startScreen");
const endScreen = document.getElementById("endScreen");
const finalScoreSpan = document.getElementById("finalScore");

// Variables du jeu
let isJumping = false; // Empêche les sauts multiples
let conteur = 0; // Score actuel
let highScore = localStorage.getItem("highScore") || 0; // Meilleur score
let level = 1; // Niveau initial
let gameInterval; // Intervalle du jeu
let obstacleSpeed = 3; // Vitesse initiale de l'obstacle (en secondes)

// Charger l'image GIF du coureur
const imageGif = new Image();
imageGif.src = "coureur.gif"; // Remplace par le chemin de ton GIF
imageGif.hidden = true; // Masqué par défaut
perso.appendChild(imageGif); // Ajouter le GIF au personnage

// Fonction de saut
function sauter() {
    if (!isJumping) {
        isJumping = true;
        perso.classList.add("animation-one-click");

        setTimeout(() => {
            perso.classList.remove("animation-one-click");
            isJumping = false;
        }, 900); // Durée du saut (500ms)
    }
}

// Vérification de collision
function checkCollision() {
    const persoRect = perso.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        persoRect.bottom > obstacleRect.top &&
        persoRect.left < obstacleRect.right &&
        persoRect.right > obstacleRect.left &&
        !isJumping
    ) {
        endGame(); // Fin du jeu en cas de collision
    }
}

// Fonction de démarrage du jeu
function start() {
    startScreen.style.display = "none"; // Masquer l'écran de démarrage
    endScreen.style.display = "none"; // Masquer l'écran de fin
    conteur = 0;
    level = 1; // Réinitialiser le niveau
    scoreSpan.textContent = "0";
    levelSpan.textContent = level; // Afficher le niveau initial

    // Réinitialiser la position et la vitesse de l'obstacle
    obstacle.style.left = "100%";
    obstacleSpeed = 3; // Vitesse initiale en secondes
    obstacle.style.animationDuration = `${obstacleSpeed}s`; // Appliquer la durée initiale
    obstacle.classList.add("roule-animation");

    // Afficher le GIF du coureur pendant tout le jeu
    stateImage.hidden = true; // Masquer l'image statique
    imageGif.hidden = false; // Afficher le GIF

    // Récupérer le high score depuis localStorage
    highScore = parseFloat(localStorage.getItem("highScore")) || 0;
    highScoreSpan.textContent = Math.round(highScore); // Afficher le high score initial

    gameInterval = setInterval(() => {
        checkCollision();
        conteur += 0.1;
        scoreSpan.textContent = Math.round(conteur);

        // Mettre à jour le niveau tous les 50 points
        const newLevel = Math.floor(conteur / 50) + 1; // Niveau augmente tous les 50 points
        if (newLevel > level) {
            level = newLevel;
            levelSpan.textContent = level; // Mettre à jour l'affichage du niveau
        }

        // Ajuster la vitesse de l'obstacle en fonction du niveau
        obstacleSpeed = 3 - (level * 0.2); // Réduit de 0.2s par niveau
        if (obstacleSpeed < 1.5) obstacleSpeed = 1.5; // Limite minimale à 1.5s
        obstacle.style.animationDuration = `${obstacleSpeed}s`; // Mettre à jour la durée de l'animation

        // Mettre à jour le meilleur score
        if (conteur > highScore) {
            highScore = conteur;
            localStorage.setItem("highScore", highScore);
            highScoreSpan.textContent = Math.round(highScore);
        }
    }, 10);
}

// Fonction de fin de jeu
function endGame() {
    clearInterval(gameInterval);
    obstacle.classList.remove("roule-animation");

    // Revenir à l'image statique à la fin du jeu
    stateImage.hidden = false; // Afficher l'image statique
    imageGif.hidden = true; // Masquer le GIF

    finalScoreSpan.textContent = Math.round(conteur);
    endScreen.style.display = "block"; // Afficher l'écran de fin
}

// Fonction de réinitialisation
function stop() {
    location.reload(); // Recharger la page pour réinitialiser le jeu
}

// Gestion des événements clavier
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        sauter();
    }
});