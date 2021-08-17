function fly(s) {
   if (superMan.x > width / 2 + 50) {
      Matter.Body.setStatic(s.body, false);
   }
}
function ifstatement() {
   if (monsterSp.y < height - 50) {
      monsterSp.x = mon.body.position.x;
      monsterSp.y = mon.body.position.y;
   }

   if (car.x > width + 100) {
      car.x = -100
      car.y = random(height - 50, height - 100)
   }

   if (car1.x > width + 100) {
      car1.x = -100
      car1.y = random(height - 0, height - 50)
   }

   if (keyWentDown(RIGHT_ARROW)) {
      superMan.velocityX = 5;
      superMan.addAnimation("running", superManRun);
   }
   if (superMan.x > width / 2 + 50 && superMan.x < width / 2 + 380) {
      superMan.x = sup.body.position.x - 15;
      superMan.y = sup.body.position.y;
      superMan.velocityX = 0;
      superMan.addAnimation("running", superManfly);
   }

   if (superMan.x > width / 2 + 380) {
      Matter.Body.setStatic(sup.body, true)
      superMan.x !== sup.body.position.x;
      superMan.y !== sup.body.position.y;
      superMan.x = width / 2 + 380
      superMan.y = 260
      superMan.addAnimation("running", superManAni);

   }
}