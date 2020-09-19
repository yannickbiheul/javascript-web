let table = document.createElement("table");
document.body.appendChild(table);
let ligne = document.createElement("tr");
table.appendChild(ligne);
let tableaux = "";
let titres = ["Nom", "Année", "Auteur"];
let ligneTitre = document.createElement("tr");
document.body.appendChild(ligneTitre);

for (let i = 0; i < titres.length; i++) {
    let colonneTitre = document.createElement("td");
    colonneTitre.textContent = titres[i];
    ligneTitre.appendChild(colonneTitre);
}

ajaxGet("http://localhost:8090/javascript-web-srv/data/tableaux.json", function (reponse) {
    tableaux = JSON.parse(reponse);
    for (let i = 0; i < tableaux.length; i++) {
        let ligne = document.createElement("tr");
        document.body.appendChild(ligne);
        let colonneNom = document.createElement("td");
        colonneNom.textContent = tableaux[i].nom;
        ligne.appendChild(colonneNom);
        let colonneAnnee = document.createElement("td");
        colonneAnnee.textContent = tableaux[i].annee;
        ligne.appendChild(colonneAnnee);
        let colonneAuteur = document.createElement("td");
        colonneAuteur.textContent = tableaux[i].auteur;
        ligne.appendChild(colonneAuteur);
    }
})



