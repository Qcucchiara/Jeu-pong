// premier fichier, aucune POO et manque d'organisation...
// mais ça fonctionne.

// variables

// sélectionner les div des joueurs
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");

// des valeurs en vrac utilisés plus bas
let posYp1 = 250;
let posYp2 = 250;
const playersHeight = 130;
const playersWidth = 20;
const step = 3;

let scoreP1 = 0;
let scoreP2 = 0;

// sélectionner le score des joueurs respectifs
const displayScoreP1 = document.querySelector(".score-p1");
const displayScoreP2 = document.querySelector(".score-p2");

// afficher le score des joueurs
displayScoreP1.innerText = scoreP1;
displayScoreP2.innerText = scoreP2;

// des variables en vrac relatives à la balle.
const ball = document.querySelector(".ball");
const ballD = 30;
let ballX = 50;
let ballY = 295;
let speedX = 0;
let speedY = 0;
let rebondissementsX = 0;

// cette variable contient la valeur de l'input.key de chaque touche appuyés.
let pressedKeys = [];

// cet eventListeners sert a ajouter les touches pressés dans le tableau plus haut
window.addEventListener("keydown", function (event) {
  if (!pressedKeys.includes(event.key)) {
    pressedKeys.push(event.key);
  }
});
// celui là sert a retirer la valeur de la touche relachée
window.addEventListener("keyup", function (event) {
  let index = pressedKeys.indexOf(event.key);
  if (index > -1) {
    pressedKeys.splice(index, 1);
  }
});

// cette fonction retourne un boolean qui est vrai si la touche demandé est dans le tableau
// des touches appuyés
function isKeyPressed(key) {
  return pressedKeys.includes(key);
}

// ce morceau sert a lancer la balle quand elle est en position de départ
document.addEventListener("keydown", (event) => {
  if (event.key === " ") {
    console.log(speedX);
    console.log(speedY);
  }
  if (event.key === " " && speedX == 0 && speedY == 0) {
    if (ballX > window.innerWidth / 2) {
      speedX = -2 - (Math.random() - 0.5) * 2;
    } else {
      speedX = 2 + rebondissementsX * 1 * 0.1 + (Math.random() - 0.5) * 2;
    }

    speedY = (Math.random() - 0.5) * 3;
  }
});

// cette partie joue la fonction update() toutes les 10ms
let intervalUpdate = setInterval(update, 10);

// la fonction update() sert a actualiser les variables et l'affichage
// de tout ce qui doit bouger.
// les colisions sont aussi gérés ici.
function update() {
  // gère le déplacement du joueur, notamment en comparant la touche au tableau mentionné plus haut.
  if (posYp1 > 0 && isKeyPressed("z")) {
    posYp1 -= step;
  }
  if (posYp1 + 130 < window.innerHeight && isKeyPressed("s")) {
    posYp1 += step;
  }
  player1.style.top = posYp1 + "px";
  if (posYp2 > 0 && isKeyPressed("ArrowUp")) {
    posYp2 -= step;
  }
  if (posYp2 + 130 < window.innerHeight && isKeyPressed("ArrowDown")) {
    posYp2 += step;
  }
  player2.style.top = posYp2 + "px";

  // collision de la balle contre les joueurs.
  if (
    (speedX < 0 &&
      rectIntersect(
        ballX,
        ballY,
        ballD,
        ballD,
        20,
        posYp1,
        playersWidth,
        playersHeight
      )) ||
    (speedX > 0 &&
      rectIntersect(
        ballX,
        ballY,
        ballD,
        ballD,
        window.innerWidth - 40,
        posYp2,
        playersWidth,
        playersHeight
      ))
  ) {
    // sert a modifier le comportement du rebond en fonction de la section des joueurs.

    if (ballX > window.innerWidth / 2) {
      if (ballY + ballD / 2 <= posYp2 + 26) {
        speedY -= 1.8;
        console.log(
          "right -1.8" + ` pos player:${posYp2} pos ball:${ballY + ballD / 2}`
        );
      } else if (
        posYp2 + 26 > ballY + ballD / 2 &&
        ballY + ballD / 2 <= posYp2 + 52
      ) {
        speedY -= 0.2;
        console.log(
          "right  -0.2" + ` pos player:${posYp2} pos ball:${ballY + ballD / 2}`
        );
      } else if (
        posYp2 + 78 > ballY + ballD / 2 &&
        ballY + ballD / 2 <= posYp2 + 104
      ) {
        speedY += 0.2;
        console.log(
          "right  +0.2" + ` pos player:${posYp2} pos ball:${ballY + ballD / 2}`
        );
      }
      //  (posYp2 + 104 > ballY + ballD / 2)
      else {
        speedY += 1.8;
        console.log(
          "right  +1.8" + ` pos player:${posYp2} pos ball:${ballY + ballD / 2}`
        );
      }
    }
    if (ballX < window.innerWidth / 2) {
      if (ballY + ballD / 2 <= posYp1 + 26) {
        speedY -= 1.8;
        console.log(
          "left -1.8" + ` pos player:${posYp1} pos ball:${ballY + ballD / 2}`
        );
      } else if (
        posYp1 + 26 > ballY + ballD / 2 &&
        ballY + ballD / 2 <= posYp1 + 52
      ) {
        speedY -= 0.2;
        console.log(
          "left -0.2" + ` pos player:${posYp1} pos ball:${ballY + ballD / 2}`
        );
      }
      // if (posYp1 + 52 > ballY (+ ballD/2) && ballY (+ ballD/2) <= posYp1 + 78) {}
      else if (
        posYp1 + 78 > ballY + ballD / 2 &&
        ballY + ballD / 2 <= posYp1 + 104
      ) {
        speedY += 0.2;
        console.log(
          "left +0.2" + ` pos player:${posYp1} pos ball:${ballY + ballD / 2}`
        );
      }
      //  (posYp1 + 104 > ballY + ballD / 2)
      else {
        speedY += 1.8;
        console.log(
          "left +1.8" + ` pos player:${posYp1} pos ball:${ballY + ballD / 2}`
        );
      }
    }

    speedX = -speedX;
    rebondissementsX += 1;
    console.log(`${rebondissementsX}`);
  }

  // gère les rebondissements sur les bords verticaux de l'affichage
  if (ballY + ball.clientHeight > window.innerHeight || ballY < 0) {
    speedY = -speedY;
  }
  ballX += speedX;
  ballY += speedY;

  ball.style.left = `${ballX}px`;
  ball.style.top = `${ballY}px`;

  // sert arrêter la partie quand la balle touche le camp d'un joueur.

  if (ballX + ballD > window.innerWidth) {
    scoreP1++;
    resetGameState2();
    // clearInterval(intervalUpdate);
    // setInterval(intervalUpdate); // ça marche pas pour le moment, a réparer à la maison
  }
  if (ballX < 0) {
    scoreP2++;
    resetGameState1();
  }
}

function resetGameState1() {
  rebondissementsX = 0;
  ballX = 50;
  ballY = 295;
  ball.style.top = ballY;
  ball.style.left = ballX;
  posYp1 = 250;
  posYp2 = 250;
  player1.style.top = posYp1 + "px";
  player2.style.top = posYp2 + "px";
  displayScoreP1.innerText = scoreP1;
  displayScoreP2.innerText = scoreP2;
  speedX = 0;
  speedY = 0;
}

function resetGameState2() {
  rebondissementsX = 0;
  ballX = window.innerWidth - 80;
  ballY = 295;
  ball.style.top = ballY;
  ball.style.left = ballX;
  posYp1 = 250;
  posYp2 = 250;
  player1.style.top = posYp1 + "px";
  player2.style.top = posYp2 + "px";
  displayScoreP1.innerText = scoreP1;
  displayScoreP2.innerText = scoreP2;
  speedX = 0;
  speedY = 0;
}

function rectIntersect(x1, y1, w1, h1, x2, y2, w2, h2) {
  // Check x and y for overlap
  if (x2 > w1 + x1 || x1 > w2 + x2 || y2 > h1 + y1 || y1 > h2 + y2) {
    return false;
  }
  return true;
}

const body = document.querySelector("body");

// const myInterval = setInterval(setColor, 50);

// function setColor() {
//   let x = document.body;
//   x.style.backgroundColor =
//     x.style.backgroundColor == "yellow" ? "red" : "yellow";
// }

// function stopColor() {
//   clearInterval(myInterval);
// } // mettre une variable boolean pour décider si on veut activer ou stopper le setInterval
