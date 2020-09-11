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


