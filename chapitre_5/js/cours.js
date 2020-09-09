function clic(event) {
    console.log("Événement : " + event.type + ", texte de la cible : " + event.target.textContent);
}

var boutonElt = document.getElementById("bouton");

boutonElt.addEventListener("click", clic);

function infoClavier(event) {
    console.log("Événement clavier : " + event.type + ", touche : " + event.keyCode);
};

document.addEventListener("keypress", function(e) {
    console.log("Vous avez appuyé sur la touche : " + String.fromCharCode(e.charCode));
});

document.addEventListener("keydown", infoClavier);

document.addEventListener("keyup", infoClavier);
