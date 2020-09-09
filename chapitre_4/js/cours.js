let pElt = document.querySelector('p');
pElt.style.color = "red";
pElt.style.margin = "50px";
pElt.style.fontFamily = "Arial";
pElt.style.backgroundColor = "black";

let paragraphesElts = document.getElementsByTagName("p");
console.log(paragraphesElts[0].style.color);
console.log(paragraphesElts[1].style.color);
console.log(paragraphesElts[2].style.color);

let stylePara = getComputedStyle(document.getElementById('para'));
console.log(stylePara.fontStyle);
console.log(stylePara.color);
