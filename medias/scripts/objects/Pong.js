const p2 = new Player("ArrowUp", "ArrowDown");
const p1 = new Player("z", "s");
const playerLeft = document.querySelector(`.player-left`);
const playerRight = document.querySelector(`.player-right`);

let pressedKeys = [];

function load() {
  p1.create("player-left");
  p2.create("player-right");
}
load();

function update() {
  p1.move(10);
  p1.draw(playerLeft);

  p2.move(10);
  p2.draw(playerRight);
}
let loop = setInterval(update, 20);

window.addEventListener("keydown", function (event) {
  if (!pressedKeys.includes(event.key)) {
    pressedKeys.push(event.key);
  }
});
window.addEventListener("keyup", function (event) {
  let index = pressedKeys.indexOf(event.key);
  if (index > -1) {
    pressedKeys.splice(index, 1);
  }
});

function isKeyPressed(key) {
  return pressedKeys.includes(key);
}

if (this.posX < 0 || this.posX + this.width > window.innerWidth) {
  ball.restart();
}
