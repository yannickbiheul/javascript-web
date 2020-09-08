function infosLiens() {
    let liens = document.querySelectorAll("a");
    console.log("Nombre de liens : " + liens.length);
    console.log("Cible du premier lien : " + liens[0].href);
    console.log("Cible du dernier lien : " + liens[liens.length - 1].href);
}

infosLiens();