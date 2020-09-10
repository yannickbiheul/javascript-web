let desserts = ["Tiramisu", "Tarte aux pommes", "Crumble à la rhubarbe"];

let listeDesserts = document.getElementById('desserts');
let bouton = document.querySelector('button');
let compteur = 0;

function ajouterDessert() {
    if (compteur < desserts.length) {
        let item = document.createElement('li');
        item.textContent = desserts[compteur];
        listeDesserts.appendChild(item);
        compteur++;
    } else {
        bouton.removeEventListener('click', ajouterDessert);
    }
}

bouton.addEventListener('click', ajouterDessert);