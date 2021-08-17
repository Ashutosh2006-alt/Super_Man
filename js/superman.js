class Sup {
   constructor(x, y, r) {
      var options = {
         'isStatic': true,
         'restitution': 0.5,
         'frictionAir': 0.002,
         'density': 100
      }
      this.body = Bodies.circle(x, y, r / 2, options);
      this.r = r;
      World.add(world, this.body);
   }
   display() {
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(CENTER);
      fill(0, 0, 0,0);
      noStroke();
      ellipse(0, 0, this.r, this.r);
      pop();
   }
}