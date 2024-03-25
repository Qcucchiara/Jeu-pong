class Ball {
  /**
   * @param {string} speedX > [a enlever ?] pas en X a chaque actualisation de la balle
   * @param {string} speedY > [a enlever ?] pas en Y a chaque actualisation de la balle
   * @param {boolean} start > [peut être string] [a enlever ?] position de départ
   */
  constructor(speedX, speedY, start) {
    this.speedX = speedX;
    this.speedY = speedY;
    this.start = start;
  }

  /**
   * Pour créer la balle au début de la partie
   *
   */
  create() {
    //
  }

  /**
   * Permet de changer la position de départ de la balle
   * en fonction de celui qui a gagné le tour précédent
   *
   * @param {boolean} gagnant > [peut être un string] player qui a gagné le tour précédent
   */
  startPosition(gagnant) {
    if (condition) {
      // a gauche
    } else if (condition) {
      // a droite
    } else {
      // random
    }
  }

  // init(startPos) {
  //   const left = () => {
  //     this.posX = 50;
  //     this.posY = 295;
  //     this.speedX = 2;
  //     this.speedY = 1;
  //     this.display();
  //   };
  //   const right = () => {
  //     this.posX = window.innerWidth - (50 + this.width);
  //     this.posY = 295;
  //     this.speedX = -2;
  //     this.speedY = 1;
  //     this.display();
  //   };

  //   if (startPos === "left") {
  //     // spawn la balle à gauche
  //     // et reset ses valeurs de positions
  //     left;
  //   }
  //   if (startPos === "right") {
  //     // spawn la balle à droite
  //     // et reset ses valeurs de positions
  //     right;
  //   }
  //   if (startPos === "random") {
  //     let r = Math.random() - 0.5;
  //     if (r < 0) {
  //       left;
  //     }
  //     if (r > 0) {
  //       right;
  //     }
  //   }
  //   super.createObject();
  // }

  #speedX = this.speedX;
  #speedY = this.speedY;

  /**
   * calcule les déplacements de la balle (linéaire)
   */
  move() {
    //
  }

  #rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
    // Check x and y for overlap
    if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
      return false;
    }
    return true;
  }

  /**
   * met à jour l'affichage en fonction de ce qu'à calculé la fonction move()
   */
  update() {
    //
  }
}
