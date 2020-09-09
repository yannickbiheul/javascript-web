let contenu = getComputedStyle(document.getElementById('contenu'));

let infos = document.getElementById('infos');

let para = document.createElement('p');
para.textContent = "Informations sur l'élément";

let liste = document.createElement('ul');

let item1 = document.createElement('li');
item1.textContent = "Hauteur : " + contenu.height;

let item2 = document.createElement('li');
item2.textContent = "Longueur : " + contenu.width;

infos.appendChild(para);
infos.appendChild(liste);
liste.appendChild(item1);
liste.appendChild(item2);

