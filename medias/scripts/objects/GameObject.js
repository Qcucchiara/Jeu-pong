class GameObject {
  constructor(name, color, x, y, w, h, vx, vy) {
    this.name = name;
    this.color = color;
    this.posX = x;
    this.posY = y;
    this.width = w;
    this.height = h;
    this.speedX = vx;
    this.speedY = vy;
  }
  create() {
    const screen = document.querySelector("body");
    const object = document.createElement("div");
    object.classList.add(this.name);
    object.style.backgroundColor = this.color;
    object.style.position = "absolute";
    object.style.left = this.posX;
    object.style.top = this.posY;
    object.style.width = this.width;
    object.style.height = this.height;
    screen.appendChild(object);
  }
  update() {
    //
  }
}

//    notes:
// Principes de la POO : 1- Encapsulation
//                       2- Composition
//                       3- Héritage
//                       4- Interface
//                       5- Méthodes statiques
//
