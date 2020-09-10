let bouton = document.getElementById('clic');
let text = document.getElementById('compteurClics');
let suppr = document.getElementById('desactiver');
let compteur = 0;

function ajoutClic() {
    compteur++;
    text.textContent = compteur;
}

bouton.addEventListener('click', ajoutClic);

suppr.addEventListener('click', function() {
    bouton.removeEventListener('click', ajoutClic);
});



