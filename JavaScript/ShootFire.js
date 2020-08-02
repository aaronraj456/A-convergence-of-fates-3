class  ShootFire{
    constructor(x,y,width,height) {

    //   var options = {
    //        'friction' : 0.5,
    //        'restitution' : 0.5
              
     //   }
       this.body1 = Bodies.rectangle(x,y,width,height);
       this.width = width;
       this.height = height;
       this.image = loadImage("Photos/FireBall.PNG");
       World.add(world, this.body1);
    
    }
    display() {
     //console.log("Hi");
     var pos = this.body1.position;
  
     push();
     imageMode(CENTER);
     image(this.image,pos.x,pos.y,this.width,this.height);
     pop();

     /*this.body1.speed = 10;

     console.log(this.body1.speed)*/

     Matter.Body.setVelocity(this.body1,{x:10,y:0})

     if(pos.x > 1000){
        World.remove(world,this.body1);
      }

    }
   
     
 }