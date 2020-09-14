class Drop {
    constructor(x,y) {
      var options = {
          isStatic: false,
          friction:0.1
          
      }
      this.radius = 1.8;
      this.body = Bodies.circle(x,y,1.8,options);
      World.add(world, this.body);
      
      
      
    }
    display(){
      var pos =this.body.position;
      push();
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x,pos.y, this.radius, this.radius);
      pop();
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
    }
    }
  };