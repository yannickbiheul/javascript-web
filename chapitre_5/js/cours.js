// function clic(event) {
//     console.log("Événement : " + event.type + ", texte de la cible : " + event.target.textContent);
// }

// var boutonElt = document.getElementById("bouton");

// boutonElt.addEventListener("click", clic);

// function infoClavier(event) {
//     console.log("Événement clavier : " + event.type + ", touche : " + event.keyCode);
// };

// document.addEventListener("keypress", function(e) {
//     console.log("Vous avez appuyé sur la touche : " + String.fromCharCode(e.charCode));
// });

// document.addEventListener("keydown", infoClavier);

// document.addEventListener("keyup", infoClavier);

// function getBoutonSouris(code) {
//     let bouton = "inconnu";
//     switch(code) {
//         case 0:
//             bouton = "gauche";
//             break;
//         case 1:
//             bouton = "milieu";
//             break;
//         case 2:
//             bouton = "droit";
//             break;
//     }
//     return bouton;
// }

// function infosSouris(event) {
//     console.log("Événement souris : " + event.type + ", bouton " + getBoutonSouris(event.button) + ", X : " + event.clientX + ", Y : " + event.clientY);
// }

// document.addEventListener('click', infosSouris);
// document.addEventListener("mousedown", infosSouris);
// document.addEventListener("mouseup", infosSouris);

// window.addEventListener("load", function() {
//     console.log("Page entièrement chargée.");
// })

// window.addEventListener('beforeunload', function(event) {
//     let message = "On est bien ici !";
//     event.returnValue = message;
//     return message;
// })

document.addEventListener("click", function() {
    console.log("Gestionnaire document");
});

document.getElementById("para").addEventListener("click", function() {
    console.log("Gestionnaire paragraphe");
});

document.getElementById("propa").addEventListener("click", function(event) {
    console.log("Gestionnaire bouton");
    event.stopPropagation();
});

document.getElementById("interdit").addEventListener("click", function(e) {
    console.log("Continuez plutôt à lire le cours !");
    e.preventDefault();
})

