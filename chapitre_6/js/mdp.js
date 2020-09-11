// Déclaration des variables
let mdp1 = document.getElementById("mdp1");
let mdp2 = document.getElementById("mdp2");
let infoMdp = document.getElementById("infoMdp");
let form = document.querySelector("form");
let submit = form.elements[2];
let valeurMdp1 = "";

// Mise en forme de infoMdp
infoMdp.style.color = "white";
infoMdp.style.width = "300px";
infoMdp.style.display = "flex";
infoMdp.style.justifyContent = "center";
infoMdp.style.alignItems = "center";

// Valider les données du 1er mot de passe
mdp1.addEventListener("input", function(e) {
    valeurMdp1 = e.target.value;
    if (valeurMdp1.length < 6) {
        infoMdp.style.backgroundColor = "red";
        infoMdp.textContent = "Mot de passe : Trop court !";
    } else {
        infoMdp.style.backgroundColor = "green";
        infoMdp.textContent = "Mot de passe : Bonne taille !";
    }
    return valeurMdp1;
})
console.log(valeurMdp1);

// Valider les données du 2ème mot de passe
mdp2.addEventListener("input", function (e) {
    let valeurMdp2 = e.target.value;
    if (valeurMdp2.length < 6) {
        infoMdp.style.backgroundColor = "red";
        infoMdp.textContent = "Confirmation : Trop court !";
    } else {
        infoMdp.style.backgroundColor = "green";
        infoMdp.textContent = "Confirmation : Bonne taille !";
    }
})


