var compteurElt = document.getElementById("compteur");

// Diminue le compteur jusqu'à 0
function diminuerCompteur() {
    // Conversion en nombre du texte du compteur
    var compteur = Number(compteurElt.textContent);
    compteurElt.textContent = compteur - 1;
}

// Appelle la fonction diminuerCompteur toutes les secondes (1000 millisecondes)
setInterval(diminuerCompteur, 1000);