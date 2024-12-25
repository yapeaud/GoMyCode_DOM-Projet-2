// Attendre le chargement complet du DOM pour garantir que les éléments HTML nécessaires sont accessibles
window.addEventListener("DOMContentLoaded", () => {
    // Sélectionner l'élément avec l'ID "color-box" (le conteneur dont la couleur sera modifiée)
    const colorBox = document.getElementById("color-box");
    // Sélectionner le bouton avec l'ID "change-color-btn" (le bouton qui déclenchera le changement de couleur)
    const changeColorBtn = document.getElementById("change-color-btn");

    // Fonction pour générer une couleur hexadécimale aléatoire
    function getRandomColor() {
        const letters = "0123456789ABCDEF"; // Ensemble des caractères valides pour une couleur hexadécimale
        let color = "#"; // Commencer par le symbole # utilisé pour les couleurs hexadécimales
        for (let i = 0; i < 6; i++) { // Construire une chaîne de 6 caractères aléatoires
            color += letters[Math.floor(Math.random() * 16)]; // Ajouter un caractère aléatoire parmi les lettres
        }
        return color; // Retourner la couleur générée
    }

    // Ajouter un gestionnaire d'événement "click" au bouton
    changeColorBtn.addEventListener("click", () => {
        const randomColor = getRandomColor(); // Générer une nouvelle couleur aléatoire
        colorBox.style.backgroundColor = randomColor; // Appliquer la nouvelle couleur au style de fond de colorBox
    });
});