setInterval((touche) => {
  for (let i = 0; i < 1000; i++) {
    if (touche == true && i < 400) {
      return "trop tôt";
    }
    if (touche == true && 400 < i < 600) {
      return "bon timing";
    }
    if (touche == true && i > 600) {
      return "trop tard";
    } else {
      return "raté";
    }
  }
}, 10);
