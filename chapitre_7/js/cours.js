
let compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    let compteur = Number(compteurElt.textContent);
    if (compteur > 1) {
        compteurElt.textContent = compteur - 1;
    } else {
        clearInterval(intervalId);
        let titre = document.getElementById("titre");
        titre.textContent = "BOUM !!!";
        setTimeout(function() {
            titre.textContent = "Tout est cassé :)";
        }, 2000);
    }
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
let intervalId = setInterval(diminuerCompteur, 1000);

let bloc = document.getElementById("bloc");
let cadre = document.getElementById("cadre");
let vitesse = 7;    // Valeur du déplacement en pixels
let largeurBloc = parseFloat(getComputedStyle(bloc).width);
let animationId = null; // Identifiant de l'animation

// Déplace le bloc sur sa gauche jusqu'au bord du cadre
function deplacerBloc() {
    // Conversion en nombre de la position gauche du bloc (valeur de la forme "XXpx")
    let xBloc = parseFloat(getComputedStyle(bloc).left);
    // Conversion en nombre de la largeur du cadre 
    let xMax = parseFloat(getComputedStyle(cadre).width);
    if (xBloc + largeurBloc <= xMax) {  // Si le bloc n'est pas encore au bout du cadre
        // Déplacement du bloc
        bloc.style.left = (xBloc + vitesse) + "px";
        // Demande au navigateur d'appeler deplacerBloc dès que possible
        animationId = requestAnimationFrame(deplacerBloc);
    } else {
        // Annulation de l'animation
        cancelAnimationFrame(animationId);
    }
}

animationId = requestAnimationFrame(deplacerBloc);  // Début de l'animation

