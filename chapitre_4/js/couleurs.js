let paras = document.getElementsByTagName('div');

let couleur = prompt('Entrez une couleur pour le texte');
let fond = prompt('Entrez une couleur de fond');

for (let i = 0; i < paras.length; i++) {
    paras[i].style.color = couleur;
    paras[i].style.backgroundColor = fond;
}






