class Player {
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
  /**
   *
   * @param {number} posY > [retiré] position verticale du player (mis dans une variable privé plus bas)
   * @param {string} moveUp > touche a appuyer pour faire bouger vers le haut
   * @param {string} moveDown > touche a appuyer pour faire bouger vers le bas
   */
  constructor(moveUp, moveDown) {
    this.moveUp = moveUp;
    this.moveDown = moveDown;
  }

  /**
   * Cette fonction sert a créer les players sur l'écran
   *
   * @param {*} name > donne le nom du player qu'on veut générer. Ne prend que "player-1" et "player-2". Si autre chose est donné en paramètre, rien n'est crée et un message d'erreur est envoyé
   *
   */
  create(name) {
    const p = document.createElement("div");
    p.style.position = "absolute";
    p.style.top = this.#startPosY + "px";
    p.style.height = this.#height + "px";
    p.style.width = this.#width + "px";
    p.style.backgroundColor = "rgb(33, 126, 123)";
    p.style.transition = "20ms";
    p.classList.add("players");
    this.#gameArea.appendChild(p);
    if (name === "player-left") {
      p.classList.add(this.#leftStart.name);
      p.style.left = this.#leftStart.x + "px";
    } else if (name == "player-right") {
      p.classList.add(this.#rightStart.name);
      p.style.left = this.#rightStart.x + "px";
    } else {
      p.remove();
      console.log("error creation players");
    }
  }

  #posY = this.#startPosY;

  /**
   * un tableau pressedKeys est déclaré dans le fichier de gameplay; il sert a savoir quels touches sont pressés, si une touche est relachée, sa valeur associé dans le tableau se supprime.
   *
   * la fonction isKeyPressed(key) permet de férifier si le tableau contient certaines valeures de touches.
   *
   * cette méthode peut être mise dans la boucle d'actualisation.
   *
   * @param {number} stepY > step à chaque actualisation en px (permet d'ajuster la vitesse voir anticiper un élément de gameplay suplémentaire)
   */
  move(stepY) {
    if (isKeyPressed(this.moveUp) && this.#posY > 0) {
      this.#posY -= stepY;
    } else if (
      isKeyPressed(this.moveDown) &&
      this.#posY + this.#height < window.innerHeight
    ) {
      this.#posY += stepY;
    }
  }

  /**
   * Sert a actualiser l'affichage du player en fonction de ce qui a été calculé dans la fonction 'move(...)'
   *
   * @param {object} object > sert a préciser quel player doit être actualisé.
   */
  draw(object) {
    object.style.top = this.#posY + "px";
  }
  /**
   * pour détecter la collision entre le player et la balle.
   * @param {undefined} ball > [définir le type] sélécteur d'un objet ball qui dérive de la class Ball
   */
  isHit(object) {
    const player = this.getBoundingClientRect();
    const ball = object.getBoundingClientRect();

    if (
      ball.x > player.width + player.x ||
      player.x > ball.width + ball.x ||
      ball.y > player.height + player.y ||
      player.y > ball.height + ball.y
    ) {
      return false;
    }
    return true;
  }
}
