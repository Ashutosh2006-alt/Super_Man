class Monster {
   constructor(x, y, w, h) {
      var options = {
         'restitution': 1,
         'friction': 0,
         'frictionAir': 0,
         'density': 0.2
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w;
      this.h = h;
      World.add(world,this.body);
   }
   display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle);
    fill(0,0,0,0);
    noStroke();
    rectMode(CENTER);
    rect(0,0,this.w,this.h);
    pop();
   }
}