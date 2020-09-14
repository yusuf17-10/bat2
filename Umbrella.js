class Umbrella {
    constructor(x,y) {
      var options = {
          isStatic: true
      }
      this.radius = 110;
      this.body = Bodies.circle(x,y,this.radius,options);
      World.add(world, this.body);
      this.image = loadImage("Umbrella4.png-removebg-preview.png");
      World.add(world, this.body);
      

    }
    display(){
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      image(this.image,pos.x,pos.y, this.radius+100, this.radius+110);
      pop();
      
    }
  };


  /*imageMode(CENTER);
      image(this.image, 200, 500, this.width, this.height);*/