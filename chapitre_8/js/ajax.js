// Exécute un appel AJAX GET
// Prend en paramètres l'URL cible et la fonction callback appelée en cas de succès
function ajaxGet(url, callback) {
    let req = new XMLHttpRequest();
    req.open("GET", url);
    req.addEventListener("load", function () {
        if (req.status >= 200 && req.status < 400) {
            // Appelle la fonction callback en lui passant la réponse de la requête
            callback(req.responseText);
        } else {
            // Affichage des informations sur l'echec du traitement de la requête
            console.error(req.status + " " + req.statusText);
        }
    });

    req.addEventListener("error", function () {
        // La requête n'a pas réussi à atteindre le serveur
        console.error("Erreur réseau avec l'URL " + url);
    });

    req.send(null);
}

function afficher(reponse) {
    console.log(reponse);
}

// ajaxGet("http://localhost:8090/javascript-web-srv/data/langages.txt", afficher);