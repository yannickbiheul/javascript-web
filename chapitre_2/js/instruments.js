function infosLiens() {
    let liens = document.querySelectorAll("a");
    console.log("Nombre de liens : " + liens.length);
    console.log("Cible du premier lien : " + liens[0].href);
    console.log("Cible du dernier lien : " + liens[liens.length - 1].href);
}
// infosLiens();

function possede(id, classe) {
    let instrument = document.getElementById(id);
    if (instrument !== null) {
        console.log(instrument.classList.contains(classe));
    } else {
        console.error("Aucun élément ne possède l'identifiant " + id);
    }
}

possede("saxophone", "bois"); // Doit afficher true
possede("saxophone", "cuivre"); // Doit afficher false
possede("trompette", "cuivre"); // Doit afficher true
possede("contrebasse", "cordes"); // Doit afficher une erreur