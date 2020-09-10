let paras = document.getElementsByTagName('div');

function changerCouleur(e) {
    for (let i = 0; i < paras.length; i++) {
        switch (String.fromCharCode(e.charCode)) {
            case "r":
                paras[i].style.backgroundColor = "red";
                break;
            case "j":
                paras[i].style.backgroundColor = "yellow";
                break;
            case "v":
                paras[i].style.backgroundColor = "green";
                paras[i].style.color = "white";
                break;
            case "b":
                paras[i].style.backgroundColor = "white";
                paras[i].style.color = "black";
                break;
        }
    }
}

document.addEventListener('keypress', changerCouleur);