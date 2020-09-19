let bouton = document.querySelector(".bouton");
let para = document.getElementById("para");
let s = 0;
let intervalId = null;

bouton.textContent = "Démarrer";
para.textContent = s + " secondes écoulées";

function demarrerChrono() {
    s += 1;
    para.textContent = s + " secondes écoulées";
}

function arreterChrono() {
    clearInterval(intervalId);
    para.textContent = s + " secondes écoulées";
    bouton.textContent = "Démarrer";
    bouton.addEventListener("click", lancerChrono);
}

function lancerChrono() {
    intervalId = setInterval(demarrerChrono, 1000);
    bouton.removeEventListener("click", lancerChrono);
    bouton.addEventListener("click", arreterChrono);
    bouton.textContent = "Arrêter";
}

bouton.addEventListener("click", lancerChrono);
