class Ball {
  #posX = 0;
  #posY = 295;
  #width = 30;
  #height = 30;
  #speedX = 0;
  #speedY = 0;
  #pos = Math.random() - 0.5;

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
   * => peut être "left", "right" ou laissé vide pour que le start soit random
   *
   * @param {string} startPos > détermine la position de départ de la balle
   *
   */
  create(startPos) {
    const gameArea = document.querySelector(".gameScreen");
    const p = document.createElement("div");

    startPosition(startPos);

    p.style.position = "absolute";
    p.style.left = this.#posX + "px";
    p.style.top = this.#posY + "px";
    p.style.height = this.#height + "px";
    p.style.width = this.#width + "px";
    p.style.backgroundColor = "brown";
    p.style.transition = "20ms";
    p.classList.add("ball");
    this.gameArea.appendChild(p);
  }

  /**
   * Permet de changer la position de départ de la balle
   * en fonction de celui qui a gagné le tour précédent
   *
   * @param {boolean} gagnant > [peut être un string] player qui a gagné le tour précédent
   */
  startPosition(gagnant) {
    if (
      startPos === "left" ||
      (this.#pos < 0 && startPos != "left" && startPos != "right")
    ) {
      this.#posX = 40;
      this.#speedX = +this.#speedX;
      p.style.left = this.#posX + "px";
    } else if (
      startPos === "right" ||
      (this.#pos > 0 && startPos != "left" && startPos != "right")
    ) {
      this.#posX = window.innerWidth - (40 + this.#width);
      p.style.left = this.#posX + "px";
      this.#speedX = -this.#speedX;
    }
  }

  /**
   * calcule les déplacements de la balle (linéaire)
   */
  move() {
    this.style.top += 0;
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
