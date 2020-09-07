let h = document.head;  // h contient le head
console.log(h);

let b = document.body;  // b contient le body
console.log(b);

// Quel type de noeud est le body ?
if (document.body.nodeType === document.ELEMENT_NODE) { // ELEMENT_NODE est un noeud élément, TEXT_NODE est un noeud texte.
    console.log("Body est un noeud élément");
} else {
    console.log("Body est un noeud textuel");
}

// Accès au premier enfant du noeud body
console.log(document.body.childNodes[0]);

// Les espaces et les retours à la ligne dans le code HTML sont considérés comme des noeuds textuels.

// Accès au noeud h1
console.log(document.body.childNodes[1]);

// Afficher les noeuds enfants de body
for (let i = 0; i < document.body.childNodes.length; i++) {
    console.log(document.body.childNodes[i]);
}

let h1 = document.body.childNodes[1];
console.log(h1.parentNode); // Affiche le noeud body

console.log(document.parentNode);   // Affiche null : document n'a aucun noeud parent.
