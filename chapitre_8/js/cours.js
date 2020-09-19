// ajaxGet("http://localhost:8090/javascript-web-srv/data/films.json", function(reponse) {
//     // Transforme la réponse en tableau d'objets JavaScript
//     let films = JSON.parse(reponse);
//     // Afiche le titre de chaque film
//     films.forEach(function(film) {
//         console.log(film.titre);
//     })
// });

let listeLangages = document.getElementById("langages");

ajaxGet("http://localhost:8090/javascript-web-srv/data/langages.txt", function(reponse) {
    let langages = reponse;
    let sep = langages.split(";");
    console.log(sep[0]);
    console.log(sep[1]);
    console.log(sep[2]);
    console.log(sep[3]);
    for (let i = 0; i < sep.length; i++) {
        listeLangages.innerHTML += "<li>" + sep[i] + "</li>";
    }
})