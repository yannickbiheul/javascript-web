let pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "";

pseudoElt.addEventListener('focus', function() {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

pseudoElt.addEventListener('blur', function(e) {
    document.getElementById("aidePseudo").textContent = "";
});

pseudoElt.focus();

document.getElementById("confirmation").addEventListener("change", function(e) {
    console.log("Demande de confirmation : " + e.target.checked);
});

let aboElts = document.getElementsByName("abonnement");
for (let i = 0; i < aboElts.length; i++) {
    aboElts[i].addEventListener("change", function(e) {
        console.log("Formule d'abonnement choisie : " + e.target.value);
    });
}

document.getElementById("nationalite").addEventListener("change", function(e) {
    console.log("Code de nationalité : " + e.target.value);
});

let form = document.querySelector("form");
console.log("Nombre de champs de saisie : " + form.elements.length);
console.log(form.elements[0].name);
console.log(form.elements.mdp.type);

// Affichage de toutes les données choisies ou saisies
form.addEventListener("submit", function(e) {
    let pseudo = form.elements.pseudo.value;
    let mdp = form.elements.mdp.value;
    let courriel = form.elements.courriel.value;
    console.log("Vous avez choisi le pseudo " + pseudo + ", le mot de passe : " + mdp + " et le courriel : " + courriel);
    if (form.elements.confirmation.checked) {
        console.log("Vous avez demandé une confirmation d'inscription par courriel");
    } else {
        console.log("Vous n'avez pas demandé de confirmation d'inscription par courriel");
    }
    switch (form.elements.abonnement.value) {
        case "abonewspromo":
            console.log("Vous êtes abonné à la newsletter et aux promotions");
            break;
        case "abonews":
            console.log("Vous êtes abonné à la newsletter");
            break;
        case "aborien":
            console.log("Vous n'êtes abonné à rien");
            break;
        default:
            console.log("Erreur : code d'abonnement non reconnu");
    }
    switch (form.elements.nationalite.value) {
        case "FR":
            console.log("Vous êtes français");
            break;
        case "BE":
            console.log("Vous êtes belge");
            break;
        case "SUI":
            console.log("Vous êtes suisse");
            break;
        default:
            console.log("Erreur : code de nationalité non reconnu");
    }
    e.preventDefault();
})