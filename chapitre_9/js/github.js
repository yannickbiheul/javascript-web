let infosElt = document.getElementById("infos");

let formElt = document.querySelector("form");
formElt.addEventListener("submit", function(e) {
    e.preventDefault();
    let nomProfil = formElt.elements.profil.value;
    ajaxGet("https://api.github.com/user/" + nomProfil, function(reponse) {
        let profil = JSON.parse(reponse);
        let avatarElt = document.createElement("img");
        avatarElt.src = profil.avatar_url;
        avatarElt.style.height = "150px";
        avatarElt.style.width = "150px";
        let nomElt = document.createElement("div");
        nomElt.textContent = profil.name;
        nomElt.style.fontSize = "20px";
        let employeurElt = document.createElement("div");
        employeurElt.textContent = profil.company;
        let siteElt = document.createElement("a");
        siteElt.href = profil.blog;
        siteElt.textContent = siteElt.href;
        infosElt.innerHTML = "";
        infosElt.appendChild(avatarElt);
        infosElt.appendChild(nomElt);
        infosElt.appendChild(employeurElt);
        infosElt.appendChild(siteElt);
    });
});