// Liste de quelques maisons de Game of Thrones. Chaque maison a un code et un nom
var maisons = [
    {
        code: "ST",
        nom: "Stark"
    },
    {
        code: "LA",
        nom: "Lannister"
    },
    {
        code: "BA",
        nom: "Baratheon"
    },
    {
        code: "TA",
        nom: "Targaryen"
    }
];

// Renvoie un tableau contenant quelques personnages d'une maison
function getPersonnages(codeMaison) {
    switch (codeMaison) {
        case "ST":
            return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
        case "LA":
            return ["Tywin", "Cersei", "Jaime", "Tyrion"];
        case "BA":
            return ["Robert", "Stannis", "Renly"];
        case "TA":
            return ["Aerys", "Daenerys", "Viserys"];
        default:
            return [];
    }
}

// Ajout des maisons à la liste select
let select = document.getElementById("maison");
let stark = maisons[0];
let lannister = maisons[1];
let baratheon = maisons[2];
let targaryen = maisons[3];
let liste = document.getElementById("persos");

let starkName = document.createElement("option");
starkName.textContent = stark.nom;
starkName.setAttribute("value", stark.code);
select.appendChild(starkName);

let lannisterName = document.createElement("option");
lannisterName.textContent = lannister.nom;
lannisterName.setAttribute("value", lannister.code);
select.appendChild(lannisterName);

let baratheonName = document.createElement("option");
baratheonName.textContent = baratheon.nom;
baratheonName.setAttribute("value", baratheon.code);
select.appendChild(baratheonName);

let targaryenName = document.createElement("option");
targaryenName.textContent = targaryen.nom;
targaryenName.setAttribute("value", targaryen.code);
select.appendChild(targaryenName);

// Écouteurs d'événements
select.addEventListener("change", function(e) {
    let listePersos = getPersonnages(e.target.value);
    liste.textContent = "";
    for (let i = 0; i < listePersos.length; i++) {
        let elt = document.createElement("li");
        elt.textContent = listePersos[i];
        liste.appendChild(elt);
    }
})

