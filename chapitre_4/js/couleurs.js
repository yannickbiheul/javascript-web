let colorValue = prompt("Entrez la couleur du texte");
let backgroundValue = prompt("Entrez le background");

let paras = document.getElementsByTagName('div');
console.log(paras);

for (let i = 0; i < paras.length; i++) {
    paras[i].style.color = colorValue;
    paras[i].style.backgroundColor = backgroundValue;
}


// console.log(colorValue);
// console.log(backgroundValue);

