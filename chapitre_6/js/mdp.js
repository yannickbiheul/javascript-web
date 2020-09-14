// Déclaration des variables
let mdp1 = document.getElementById("mdp1");
let mdp2 = document.getElementById("mdp2");
let infoMdp = document.getElementById("infoMdp");
let form = document.querySelector("form");
let submit = form.elements[2];
let userMdp = "";
let userMdpConfirm = "";

// Mise en forme de infoMdp
infoMdp.style.color = "white";
infoMdp.style.width = "300px";
infoMdp.style.height = "25px";
infoMdp.style.display = "flex";
infoMdp.style.justifyContent = "center";
infoMdp.style.alignItems = "center";


// Vérification des mots de passe
mdp1.addEventListener("input", function(e) {
    if (e.target.value.length < 6) {
        infoMdp.style.backgroundColor = "red";
        infoMdp.textContent = "Trop court !";
    } else {
        infoMdp.style.backgroundColor = "green";
        infoMdp.textContent = "Correct !";
        userMdp = e.target.value;
    }
})

mdp2.addEventListener("input", function(e) {
    if (e.target.value === userMdp) {
        infoMdp.style.backgroundColor = "green";
        infoMdp.textContent = "Confirmé !";
        userMdpConfirm = e.target.value;
    } else {
        infoMdp.style.backgroundColor = "red";
        infoMdp.textContent = "Non confirmé !";
    }
})

form.addEventListener("submit", function(e) {
    if (userMdp === userMdpConfirm) {
        infoMdp.style.backgroundColor = "green";
        infoMdp.textContent = "Mot de passe confirmé !";
    } else {
        infoMdp.style.backgroundColor = "red";
        infoMdp.textContent = "Mot de passe non confirmé !";
    }
    e.preventDefault();
    mdp1.value = "";
    mdp2.value = "";
})


