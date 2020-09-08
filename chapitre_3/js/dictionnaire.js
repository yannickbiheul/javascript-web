// Liste des mots du dictionnaire
var mots = [
    {
        terme: "Procrastination",
        definition: "Tendance pathologique à remettre systématiquement au lendemain"
    },
    {
        terme: "Tautologie",
        definition: "Phrase dont la formulation ne peut être que vraie"
    },
    {
        terme: "Oxymore",
        definition: "Figure de style qui réunit dans un même syntagme deux termes sémantiquement opposés"
    },
    {
        terme: "Bonjour",
        definition: "Phrase de politesse qui sert à saluer"
    }
];

// TODO : créer le dictionnaire sur la page web, dans la div "contenu"

// Création de la balise dl
let dl = document.createElement("dl");
// Ajout du dl à la div contenu
document.getElementById("contenu").appendChild(dl);

// Ajout des termes et définitions
for (let i = 0; i < mots.length; i++) {
    let dt = document.createElement("dt");
    dt.innerHTML = "<strong>" + mots[i].terme + "</strong>";
    dl.appendChild(dt);
    let def = document.createElement("dd");
    def.textContent = mots[i].definition;
    dl.appendChild(def);
}