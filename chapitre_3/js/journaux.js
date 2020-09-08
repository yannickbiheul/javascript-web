// Liste des journaux
let journaux = ["http://lemonde.fr", "http://lefigaro.fr", "http://liberation.fr"];

// TODO : ajouter la liste des journaux sur la page, dans la div "contenu"
for (let i = 0; i < journaux.length; i++) {
    let elt = document.createElement("a");
    elt.href = journaux[i];
    elt.textContent = journaux[i];
    elt.innerHTML += "<br>";
    document.getElementById("contenu").appendChild(elt);
}