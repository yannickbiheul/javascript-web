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
        if (listePays[i].indexOf(e.target.value)) {
            let suggPays = document.createElement("p");
            suggPays.classList.add("suggestion");
            suggPays.textContent = listePays[i];
            sugg.appendChild(suggPays);
        }
    }
    let essaiPays = document.querySelectorAll(".suggestion");
    for (let i = 0; i < essaiPays.length; i++) {
        essaiPays[i].addEventListener("click", function() {
            inputPays.value = essaiPays[i].textContent;
            sugg.innerHTML = "";
        })
    }
})




