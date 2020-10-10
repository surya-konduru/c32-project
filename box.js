class Box extends BaseClass {
  constructor(x, y, width, height, image) {
    super(x, y, width, height);
    this.image = loadImage(image || "wood1.png");
    this.visibility = 100;
  }

  display() {
    if (this.body.speed < 3) {
      super.display();
    } else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5
      tint(100, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();
    }

  }

  score() {
    if (this.visibility < 0 && this.visibility > -185) {
      score++;
    }
  }

};
