let bouton = document.getElementById("bouton");
let para = document.getElementById("para");
let s = 0;
let intervalId = null;

bouton.textContent = "Démarrer";
para.textContent = s + " secondes écoulées";

function demarrerChrono() {
    s += 1;
}

function lancerChrono() {
    intervalId = setInterval(demarrerChrono, 1000);
}

bouton.addEventListener("click", lancerChrono);
