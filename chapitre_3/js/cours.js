// Ajout d'un langage
document.getElementById("langages").innerHTML += '<li id="c">C</li>';

// Suppression du contenu
// document.getElementById("langages").innerHTML = "";

// Modification du premier titre
document.querySelector("h1").textContent += " de programmation";

// Ajout de l'attribut "id" du premier titre
// document.querySelector("h1").setAttribute("id", "titre");
// Autre manière
document.querySelector("h1").id = "titre";

let titreElt = document.querySelector("h1");
titreElt.classList.remove("debut"); // Suppression de la classe debut
titreElt.classList.add("titre");    // Ajout de la classe titre
console.log(titreElt);