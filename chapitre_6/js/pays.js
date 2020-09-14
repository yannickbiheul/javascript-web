// Liste des pays
var listePays = [
    "Afghanistan",
    "Afrique du Sud",
    "Albanie",
    "Algérie",
    "Allemagne",
    "Andorre",
    "Angola",
    "Anguilla",
    "Antarctique",
    "Antigua-et-Barbuda",
    "Antilles néerlandaises",
    "Arabie saoudite",
    "Argentine",
    "Arménie",
    "Aruba",
    "Australie",
    "Autriche",
    "Azerbaïdjan"
];

let inputPays = document.getElementById("pays");
let sugg = document.getElementById("suggestions");

inputPays.addEventListener("input", function(e) {
    for (let i = 0; i < listePays.length; i++) {
        for (let p = 0; p <= listePays[i].length; p++) {
            if (e.target.value === listePays[i][p]) {
                sugg.innerHTML += listePays[i] + "<br>";
            }
        }
    }
})




