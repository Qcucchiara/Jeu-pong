class GameObject {
  constructor(name, color, posX, posY, width, height, radius) {
    this.name = name;
    this.color = color;
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.radius = radius;
  }
  create() {
    const screen = document.querySelector("body");
    const object = document.createElement("div");
    object.classList.add(this.name);
    object.style.backgroundColor = this.color;
    object.style.position = "absolute";
    object.style.left = this.posX + "px";
    object.style.top = this.posY + "px";
    object.style.width = this.width + "px";
    object.style.height = this.height + "px";

    if (this.radius != undefined) {
      object.style.borderRadius = "9999px";
    }
    screen.appendChild(object);
    // crée l'élément au début de la partie
  }
  move() {
    // change les variables de déplacements
  }

  update() {
    // actualise le style top, left ...
  }
}

let test = new GameObject("truc", "blue", 150, 150, 100, 200, "z");
test.create();

//    notes:
// Principes de la POO : 1- Encapsulation
//                       2- Composition
//                       3- Héritage
//                       4- Interface
//                       5- Méthodes statiques
