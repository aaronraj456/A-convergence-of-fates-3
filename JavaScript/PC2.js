class PC2{
    constructor(x,y,width,height){
        var options={
            "friction":0.5,
            "density":0.5
        }

        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("Blue");
        rect(pos.x, pos.y, this.width, this.height);
    }
}