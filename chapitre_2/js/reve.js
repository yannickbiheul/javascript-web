// TODO : écrire la fonction compterElements
function compterElements(noeud) {
    console.log(document.querySelector(noeud).length);
}


console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2