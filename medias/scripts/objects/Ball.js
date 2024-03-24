class Ball extends GameObject {
  constructor(name, color, x, y, w, h, vx, vy) {
    super(name, color, x, y, w, h, vx, vy);
  }

  init(startPos) {
    const left = () => {
      this.posX = 50;
      this.posY = 295;
      this.speedX = 2;
      this.speedY = 1;
      this.display();
    };
    const right = () => {
      this.posX = window.innerWidth - (50 + this.width);
      this.posY = 295;
      this.speedX = -2;
      this.speedY = 1;
      this.display();
    };

    if (startPos === "left") {
      // spawn la balle à gauche
      // et reset ses valeurs de positions
      left;
    }
    if (startPos === "right") {
      // spawn la balle à droite
      // et reset ses valeurs de positions
      right;
    }
    if (startPos === "random") {
      let r = Math.random() - 0.5;
      if (r < 0) {
        left;
      }
      if (r > 0) {
        right;
      }
    }
    super.createObject();
  }

  update(player1, player2) {
    if (
      (this.speedX < 0 &&
        rectIntersect(
          this.posX,
          this.posY,
          this.width,
          this.height,
          player1.posX,
          player1.posY,
          player1.width,
          player1.height
        )) ||
      (this.speedX > 0 &&
        rectIntersect(
          this.posX,
          this.posY,
          this.width,
          this.height,
          player2.posX,
          player2.posY,
          player2.width,
          player2.height
        ))
    ) {
      this.speedX = -this.speedX;
    }
    if (this.posY + this.height > window.innerHeight || this.posY < 0) {
      this.speedY = -this.speedY;
    }
    this.posX += this.speedX;
    this.posY += this.speedY;
    displayBall();
  }

  displayBall() {
    this.style.top = this.posY + "px";
    this.style.left = this.posX + "px";
  }
}
