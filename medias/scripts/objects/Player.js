class Player extends GameObject {
  constructor(name, color, x, y, w, h, vx, vy, up, down) {
    super(name, color, x, y, w, h, vx, vy);
    this.upKey = up;
    this.downKey = down;
  }

  move() {
    // sortir le keydown de la méthode
    document.addEventListener("keydown", (event) => {
      switch (event.key) {
        case this.upKey:
          if (this.posY > 0) {
            this.posY -= this.speedY;
          }
          break;
        case this.downKey:
          if (this.posY + this.height < window.innerHeight) {
            this.posY += this.speedY;
          }
          break;
      }
      // this.style.top = this.posY + "px";
      display();
    });
  }

  display() {
    let concernedPlayer = document.querySelector(`.${this.name}`);
    concernedPlayer.style.backgroundColor = this.color;
    concernedPlayer.style.left = this.posX + "px";
    concernedPlayer.style.top = this.posY + "px";
    concernedPlayer.style.width = this.width + "px";
    concernedPlayer.style.height = this.height + "px";
  }
}
