let boutonDemarrer = document.getElementById("demarrer");
let boutonArreter = document.getElementById("arreter");
let ballon = document.getElementById("ballon");
let cadre = document.getElementById("cadre");
let largeurCadre = getComputedStyle(cadre).width;
let largeurBallon = parseFloat(getComputedStyle(ballon).width);
let leftBallon = getComputedStyle(ballon).left;
let vitesse = 5;
let animationId = null;
let direction = 1;

console.log("Largeur du cadre : " + largeurCadre);
console.log("Largeur du ballon : " + largeurBallon + "px");
console.log("Position gauche du ballon : " + leftBallon);

function deplacerBallon() {
    if (direction === 1) {
        boutonArreter.removeAttribute("disabled");
        let xBallon = parseFloat(getComputedStyle(ballon).left);
        let xMax = parseFloat(getComputedStyle(cadre).width);
        if (xBallon + largeurBallon <= xMax) {
            ballon.style.left = (xBallon + vitesse) + "px";
            animationId = requestAnimationFrame(deplacerBallon);
        } else {
            cancelAnimationFrame(animationId);
            animationId = requestAnimationFrame(retourBallon);
        }
    } else {
        animationId = requestAnimationFrame(retourBallon);
    }
}

function retourBallon() {
    direction = -1;
    let xBallon = parseFloat(getComputedStyle(ballon).left);
    if (xBallon > 0) {
        ballon.style.left = (xBallon - vitesse) + "px";
        animationId = requestAnimationFrame(retourBallon);
    } else {
        cancelAnimationFrame(retourBallon);
        animationId = requestAnimationFrame(deplacerBallon);
        direction = 1;
    }
}

function arreterBallon() {
    cancelAnimationFrame(animationId);
}

boutonDemarrer.addEventListener("click", deplacerBallon);
boutonArreter.addEventListener("click", arreterBallon);

