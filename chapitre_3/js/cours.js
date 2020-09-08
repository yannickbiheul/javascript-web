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


/* Ajouter un élément */

// Création d'un élément
let pythonElt = document.createElement("li");

// Ajout de son identifiant
pythonElt.id = "python";

// Ajout de son contenu textuel
pythonElt.textContent = "Python";

// Insertion du nouvel élément
document.getElementById("langages").appendChild(pythonElt);

// Création d'un autre élément
let div = document.createElement("div");
div.id = "uneDiv";
div.style.width = "300px";
div.style.height = "300px";
div.style.border = "1px solid #000";
div.style.display = "flex";
div.style.justifyContent = "center";
div.style.alignItems = "center";
div.innerHTML = "<h2>Nouveau contenu !</h2>";
document.getElementById("contenu").appendChild(div);
console.log(div);

// Création d'un autre élément avec createTextNode
let rubyElt = document.createElement("li");
rubyElt.id = "ruby";
rubyElt.appendChild(document.createTextNode("Ruby"));
document.getElementById("langages").appendChild(rubyElt);

// Ajout du langage Perl avant le langage PHP
let perlElt = document.createElement("li");
perlElt.id = "Perl";
perlElt.textContent = "Perl";
document.getElementById("langages").insertBefore(perlElt, document.getElementById("php"));

// Ajout du langage JavaScript au début de la liste
document.getElementById("langages").insertAdjacentHTML("afterbegin", '<li id="javascript">JavaScript</li>');
/* 
    beforebegin : Avant l'élément cible.
    afterbegin : avant le premier enfant de l'élément cible.
    beforeend : après le dernier enfant de l'élément cible.
    afterend : après l'élémnet cible.
*/

// Remplacer Perl par Bash
let bashElt = document.createElement("li");
bashElt.id = "bash";
bashElt.textContent = "Bash";
document.getElementById("langages").replaceChild(bashElt, perlElt);

// Supprimer bash
document.getElementById("langages").removeChild(document.getElementById("bash"));