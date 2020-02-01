class Cone {
    constructor(x,y,sides,size){
        var options = {
            'restitution':1,
            'friction':0.8,
            'density':1.0
        }
        //this.body = Bodies.triangle(x, y, sides,size, options);
      //this.sides = size;
      //this.sides =sides;
      
     // World.add(world, this.body);
    }
    display(){
     // var pos =this.body.position;

      //var angle = this.body.angle;
      push();
     // translate(pos.x,pos.y);
      //rotate(angle);
      
      //rectMode(CENTER);
      fill("grey");
      //rect(0, 0, this.width, this.height);
      pop()
      
      fill("grey");
      strokeWeight(2);
      
     // regularPolygon(720, 200, 3, 50);
    }
}