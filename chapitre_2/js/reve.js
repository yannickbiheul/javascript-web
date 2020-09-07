// TODO : écrire la fonction compterElements
function compterElements(noeud) {
    if (noeud.innerHTML) {
        console.log(noeud);
    } else {
        console.error("Y'a un problème là !");
    }
}


console.log(compterElements("p")); // Doit afficher 4
console.log(compterElements(".adjectif")); // Doit afficher 3
console.log(compterElements("p .adjectif")); // Doit afficher 3
console.log(compterElements("p > .adjectif")); // Doit afficher 2