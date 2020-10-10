class Polygon {
  constructor(x, y, radius) {
    var options = {
      isStatic: false,
      restitution: 0,
      friction: 0.5,
      density: 1.2,
    };

    this.body = Bodies.polygon(x, y, 5, radius, options);
    this.radius = radius;
    this.image = loadImage("pentagon.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.radius * 2, this.radius * 2);
    pop();
  }

}