# Brief jeu vidéo javascript (Pong)

Un simple pong, le but est de faire rentrer la balle dans le camp adverse, et éviter qu'il ne rentre dans notre camp en la faisant rebondire sur la raquette.

Quand la balle tape sur les bords de la raquette, sa direction verticale change.

le score est compté en haut de chaque camps.

## Langages utilisés:

Une structure html nécessaire pour lancer sur le navigateur, un fichier css pour "mettre en forme" les scores, et un dossier javascript contenant les fichiers de chaques classes d'objets utilisés (Player et Ball) ainsi qu'un fichier pour le gameplay.

## Modèle de programmation:

Comme dit plus haut, la POO a été utilisé pour les différents éléments du jeu qui permettent de générer et utiliser les raquettes et la balle à l'aide des différentes méthodes présentes dans les classes.

Vous trouverez aussi un peu de programmation fonctionnelle dans le 3ème fichier servant à la boucle de gameplay.

### class Player :

#### Variables privées:

J'ai utilisé des variables privées pour ne pas surcharger le constructor et permettre de faire fonctionner les méthodes plus simplement

```
  #gameArea = document.querySelector(".gameScreen");
  #startPosY = 250;
  #height = 130;
  #width = 20;
  #leftStart = {
    name: "player-left",
    x: 20,
  };
  #rightStart = {
    name: "player-right",
    x: window.innerWidth - (this.#width + 20),
  };
```

#### Constructor:

en entrée il n'y a besoins que de 2 paramètres, respectivement la touche pour faire bouger le player vers le haut et la touche pour le faire bouger vers le bas.

```
  constructor(moveUp, moveDown) {
    this.moveUp = moveUp;
    this.moveDown = moveDown;
  }
```

## Exercice 1 : Changer les styles CSS grâce au DOM [html initial](exercices/exercice1-dom.html)

1. Mettre le texte de l'élément avec l'id para2 en bleu.
2. Mettre un border en pointillé noir à la section2.
3. Mettre un background color orange à l'élément de la classe colorful de la section2 .
4. Mettre le h2 de la section1 en italique.
5. Cacher l'élément colorful situé dans un paragraphe.
6. Changer le texte de para2 pour "modified by JS".
7. Changer le href du lien de la section1 pour le faire aller sur https://www.google.com/.
8. Rajouter la classe big-text sur le h2 de la section2.
9. Bonus 1 : Faire que tous les paragraphes du document soient en italique.
10. Bonus 2 : Faire en sorte que les modifications arrivent petit à petit, les unes après les autres, avec des setTimeout de 1 seconde.

Les concepts clefs couverts sont :

- document.querySelector()
- document.body.style
- textContent (savoir expliquer la différence avec innerHTML)
- classList
- querySelectorAll
- for
- setTimeout

## Exercice 2 : Changer la couleur de fond [html initial](exercices/exercice2-hex-colors.html)

Première partie de l'exercice, nous voulons changer la couleur du background grâce à un tableau contenant déjà une sélection de couleurs.

1. Créer un tableau contenant une sélection de 5 à 10 couleurs, mélangeant nom de couleurs (par exemple "green"), couleurs RGB (par exemple "rgba(133,122,200)") et couleurs hexadécimales (par exemple "#f15025").
2. Capturer le bouton "btnColors" avec un querySelector et lui ajouter un EventListener pour détecter le clic.
3. Créer une fonction getRandomNumber() qui prend en paramètre la taille du tableau qu'on veut parcourir et retourne de manière aléatoire un des indexs du tableau (indice : Math.random() et Math.floor seront parfaits, et comme on veut récupérer l'index tiré au sort, ne pas oublier le return).
4. Créer une fonction getRandomColorFromSelection() qui grâce à getRandomNumber() retourne l'un des éléments du tableau de couleurs.
5. Stocker cette couleur dans une variable selectedColor et l'assigner en backgroundColor du body.
6. Afficher le nom de cette couleur dans l'élément color grâce à un querySelector, et modifier la couleur de fond du body.
   Deuxième partie de l'exercice, nous voulons maintenant générer une couleur hexadécimale alétoire ! :)
7. Cette fois ci, créer un tableau contenant toutes les possibilités de chiffres et lettres d'une couleur hexadécimale (indice : de 0 à 9, et de A à F).
8. Capturer le bouton "btnHex" et ajouter un listener de la même manière que pour "btnColors".
9. Créer une variable hexColor qui commence par "#" et lui ajouter 6 chiffres/lettres tirés au sort grâce à getRandomHexColor() (indice : les boucles for c'est cool)
10. Afficher le nom de cette couleur dans l'élément color grâce à un querySelector, et modifier la couleur de fond du body.

Les concepts clefs couverts sont :

- arrays
- document.getElementById()
- document.querySelector()
- addEventListener()
- document.body.style.backgroundColor
- Math.floor()
- Math.random()
- array.length
