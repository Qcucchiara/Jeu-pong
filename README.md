# Brief jeu vidéo javascript (Pong)

Un simple pong, le but est de faire rentrer la balle dans le camp adverse, et éviter qu'il ne rentre dans notre camp en la faisant rebondire sur la raquette.

Quand la balle tape sur les bords de la raquette, sa direction verticale change.

le score est compté en haut de chaque camps.

## Langages utilisés:

Une structure html nécessaire pour lancer sur le navigateur, un fichier css pour "mettre en forme" les scores, et un dossier javascript contenant les fichiers de chaques classes d'objets utilisés (Player et Ball)

## Modèle de programmation:

Comme dit plus haut, la POO a été utilisé pour les différents éléments du jeu qui permettent de générer et utiliser les raquettes et la balle à l'aide des différentes méthodes présentes dans les classes.

#### ! je n'ai pas terminé d'intégrer la POO, actuellement le fichier js lu est la première version qui n'utilise pas la POO et qui n'est pas commenté.

## classes :

### Variables privées:

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

### Constructor:

J'ai cherché a minimiser le nombre de paramètres a rentrer dans le constructeur, voici par exemple le constructeur de la class Player:

```
  constructor(moveUp, moveDown) {
    this.moveUp = moveUp;
    this.moveDown = moveDown;
  }
```

### Méthodes :

...

## Fichier boucle de jeu

### Fonction update()

Cette fonction contient tout ce qui doit être actualisé a chaque frame.
