let pseudoElt = document.getElementById("pseudo");
pseudoElt.value = "";

pseudoElt.addEventListener('focus', function() {
    document.getElementById("aidePseudo").textContent = "Entrez votre pseudo";
});

pseudoElt.addEventListener('blur', function(e) {
    document.getElementById("aidePseudo").textContent = "";
});

pseudoElt.focus();
