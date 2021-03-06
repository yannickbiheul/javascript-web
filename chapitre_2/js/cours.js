// Pour afficher le titre h2, il faut trouver le 2ème noeud du 6ème noeud de l'élément body
console.log(document.body.childNodes[5].childNodes[1]);

// Pour faire plus simple, on peut utiliser la méthode "getElementsByTagName"
let titresElts = document.getElementsByTagName("h2");   // Tous les titres h2
console.log(titresElts[0]); // Affiche le premier titre h2
console.log(titresElts.length); // Affiche 3

// Tous les éléments ayant la classe "merveilles"
let merveillesElts = document.getElementsByClassName("merveilles");
for (let i = 0; i < merveillesElts.length; i++) {
    console.log(merveillesElts[i]);
}

// Élément portant l'identifiant "nouvelles"
console.log(document.getElementById("nouvelles"));

// Tous les éléments fils de l'élément d'identifiant "antiques" ayant la classe "existe"
console.log(document.getElementById("antiques").getElementsByClassName("existe").length);

// Tous les paragraphes
console.log(document.querySelectorAll("p").length);

// Tous les paragraphes à l'intérieur de l'élément identifié par "contenu"
console.log(document.querySelectorAll('#contenu p').length);

// Tous les éléments ayant la classe "existe"
console.log(document.querySelectorAll('.existe').length);

// Tous les éléments fils de l'élément identifié par "antiques" ayant la classe "existe"
console.log(document.querySelectorAll('#antiques > .existe').length);

// Le premier paragraphe
console.log(document.querySelector("p"));



// Le contenu HTML de l'élément identifié par "contenu"
console.log(document.getElementById('contenu').innerHTML);

// Le contenu textuel de l'élément identifié par "contenu"
console.log(document.getElementById('contenu').textContent);

// L'attribut href du premier lien
console.log(document.querySelector('a').getAttribute('href'));

// L'identifiant de la première liste
console.log(document.querySelector('ul').id);

// L'attribut href du premier lien
console.log(document.querySelector('a').href);

if (document.querySelector('a').hasAttribute("target")) {
    console.log("Le premier lien possède l'attribut target");
} else {
    console.error("Le premier lien ne possède pas l'attribut target");
}



// Liste des classes de l'élément identifié par "antiques"
let classes = document.getElementById('antiques').classList;
console.log(classes.length);    // Affiche 1 : l'élément possède une seule classe
console.log(classes[0]);    // Affiche "merveilles"

// Tester la présence d'une classe avec la méthode contains
if (document.getElementById('antiques').classList.contains('merveilles')) {
    console.log("L'élément identifié par antiques possède la classe merveilles");
} else {
    console.error("L'élément identifié par antiques ne possède pas la classe merveilles");
}