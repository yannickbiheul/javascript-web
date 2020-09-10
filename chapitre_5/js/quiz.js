// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];

let contenu = document.getElementById('contenu');

for (let i = 0; i < questions.length; i++) {
    let para = document.createElement('p');
    para.innerHTML = "<strong>Question " + (i + 1) + "</strong> : <em>" + questions[i].enonce + "</em>";
    contenu.appendChild(para);
    let bouton = document.createElement('button');
    bouton.textContent = "Afficher la réponse";
    contenu.appendChild(bouton);
    bouton.addEventListener('click', function() {
        let result = document.createElement('p');
        result.textContent = questions[i].reponse;
        contenu.insertBefore(result, bouton);
        bouton.style.display = "none";
    })
}
