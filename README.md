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

# Les Événements

* On peut rendre une page web interactive en écrivant du code JavaScript qui réagit aux événements déclenchés sur la page.

* De nombreux types d'événements peuvent être gérés. Chaque type d'événement est associé à un objet "Event" spécifique qui apporte des informations sur l'événement via ses propriétés.

* Les événements "keypress", "keydown" et "keyup" permettent de réagir à l'utilisation du clavier.

* Les événements "click", "mousedown" et "mouseup" permettent de gérer les interactions avec la souris.

* Le chargement et la fermeture de la page web sont associés aux événements "load" et "beforeunload".

* Un événement se propage dans l'arborescence du DOM depuis son noeud d'origine jusqu'à la racine du document. Cette propagation peut être interrompue à l'aide de la méthode "stopPropagation".

* Il est possible d'annuler le comportement par défaut lié à un événement en appelant la méthode "preventDefault". 

# Les formulaires

* Les formulaires permettent de faire saisir des informations dans une page web. Les données saisies sont souvent destinées à être envoyées à un serveur web. Avant cet envoi, on peut utiliser JavaScript pour interagir avec les informations du formulaire pour enrichir et/ou contrôler la saisie.

* Les zones de texte (balises "input type="text" et "textarea") possèdent une propriété "value" pour accéder à la valeur saisie.

* Lorsqu'une zone de texte est la cible de saisie, on dit que cette zone possède le focus. Les événements "focus" et "blur" se déclenchent en cas d'acquisition et de perte du focus. Les méthodes "focus" et "blur" permettent de modifier la cible de saisie depuis JavaScript.

* Les éléments d'option (cases à cocher, boutons radio et listes déroulantes) génèrent un évènement "change" lorsque l'utilisateur modifie son choix. 

* L'élément du DOM correspondant au formulaire possède une propriété "elements" qui permet d'accéder à ses champs de saisie.

* La soumission d'un formulaire entraîne l'apparition d'un événement "submit" sur le formulaire. Dans le gestionnaire d'événement associé, on peut annuler l'envoi des données en appelant la méthode "preventDefault" sur l'objet "Event" associé à l'événement.

* Toute modification de la valeur saisie dans une zone de texte déclenche l'apparition d'un événement "input", qui peut être exploité pour valider la saisie en temps réel.

* On peut utiliser une expression régulière pour contrôler finement la conformité d'une chaîne de caractères par rapport à un format attendu.

# Les animations avec JavaScript

* La fonction "setInterval" démarre une action répétée sous la forme d'une fonction appelée à intervalles réguliers. La fonction "clearInterval" annule une répétition démarrée avec "setInterval".

* La fonction "setTimeout" exécute une action une seule fois après un certain délai.

* La fonction "requestAnimationFrame" demande au navigateur d'exécuter dès que possible une fonction qui met à jour une animation. Elle est à privilégier pour les animations en temps réel. La fonction "cancelAnimationFrame" stoppe une animation lancée avec "requestAnimationFrame".

* Il est également possible d'animer une page web en utilisant CSS. Le choix de la technique dépend de l'animation à réaliser.
