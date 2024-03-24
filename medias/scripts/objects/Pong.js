let intervalUpdate;
intervalUpdate;

function handleGame() {}
function stopGame() {
  clearInterval(intervalUpdate);
}

if (this.posX < 0 || this.posX + this.width > window.innerWidth) {
  ball.restart();
}

handleGame();
ball.init("random");

function load() {
  let player1 = new Player(
    "player-1",
    "rgb(33, 126, 123)", //
    20,
    250, //
    20, //
    130, //
    "z",
    "s"
  );

  let player2 = new Player(
    "player-2",
    "rgb(33, 126, 123)", //
    window.innerWidth - 40,
    250, //
    20, //
    130, //
    "ArrowUp",
    "ArrowDown"
  );

  let ball = new Ball("ball", "red", 50, 295, 30, 30, 2, 1);
}

function update(dt) {
  intervalUpdate = setInterval(() => {
    player1.move();
    player2.move();
  }, 100);
}

function draw() {
  player1.display();

  player2.display();

  ball.display();
}

function keypressed(key) {}
