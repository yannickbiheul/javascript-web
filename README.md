# javascript-web
Cours JavaScript sur OpenClassRooms

# Le DOM

* Une page web est un document structuré contenant à la fois du texte et des balises HTML. Grâce à JavaScript, on peut accéder à la structure d'une page affichée dans un navigateur, et même la modifier.

* Le DOM, ou Document Object Model, définit de manière standardisée la structure d'une page web et le moyen d'interagir avec elle via JavaScript. Le DOM représente une page web comme une hiérarchie d'objets reflétant sa structure. Chaque objet du DOM correspond à un nœud dans l'arborescence de la page web.

* La variable JavaScript "document" permet d'accéder à la racine de l'arborescence du DOM et correspond à l'élément "html" de la page.

* Les objets du DOM disposent de propriétés et de méthodes utilisables avec JavaScript. Parmi ces propriétés, "nodeType" renvoie le type de nœud, "childNodes" contient une collection de nœuds enfants et "parentNode" renvoie le nœud parent.

* Plutôt que de parcourir le DOM nœud par nœud, on peut accéder rapidement à un ou plusieurs éléments en utilisant des méthodes de sélection.

* Les méthodes "getElementsByTagName", "getElementsByClassName" et "getElementById" permettent respectivement de rechercher des éléments par nom de balise, par classe et par identifiant. Les deux premières méthodes renvoient une liste, la dernière renvoie un seul élément.

* Les méthodes "querySelectorAll" et "querySelector" permettent de rechercher des éléments en utilisant un sélecteur CSS. La première méthode renvoie tous les éléments correspondants, la seconde renvoie uniquement le premier.

* La propriété "innerHTML" renvoie le contenu HTML d'un élément. La propriété "textContent" renvoie son contenu textuel, sans le balisage HTML.

* Les méthodes "getAttribute" et "hasAttribute" permettent d'accéder aux attributs d'un élément.

* La propriété "classList" et sa méthode "contains" permettent d'accéder aux classes d'un élément.

* Les propriétés "innerHTML" ,"textContent" et "classList" ainsi que la méthode "setAttribute" permettent de modifier les informations d'un élément du DOM.

* La création d'un nouveau noeud s'effectue avec les méthodes "createTextNode" pour un noeud textuel et "createElement" pour un élément.

* La méthode "appendChild" permet d'insérer un nouveau noeud comme dernier enfant d'un élément du DOM.

* Les méthodes "insertBefore" et "insertAdjacentHTML" offrent des possibilités alternatives pour ajouter  du contenu.

* On peut remplacer un noeud existant avec la méthode "replaceChild" ou le supprimer avec "removeChild".

* La manipulation du DOM en JavaScript doit se faire de manière raisonnée afin de ne pas dégrader les performances.

# Le style

* La propriété JavaScript "style" représente l'attribut style d'un élément du DOM. Elle permet de modifier le style de cet élément en définissant la valeur de ses propriétés CSS.

* Les propriétés CSS composées s'écrivent avec la norme camelCase en JavaScript. Par exemple, "font-family" devient "fontFamily" .

* La propriété JavaScript style est insuffisante pour accéder au style d'un élément. Pour cela, on utilise la fonction "getComputedStyle".
