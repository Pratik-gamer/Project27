class Rope{
    constructor(body1,body2,offsetX,offsetY){
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB: {x:this.offsetX , y:this.offsetY}
        }
   
        this.rope = Matter.Constraint.create(options);
        World.add(world,this.rope);
       }
       display(){
           var pos1 = this.rope.bodyA.position;
           var pos2 = this.rope.bodyB.position;
           
           strokeWeight(2);

           var bodyAX = pos1.x;
           var bodyAY = pos1.y;
           var bodyBX = pos2.x + this.offsetX;
           var bodyBY = pos2.y + this.offsetY;

           line(bodyAX,bodyAY,bodyBX,bodyBY);
           
       }
   
   }