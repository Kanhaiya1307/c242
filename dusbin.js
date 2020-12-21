class dusbin{
    constructor(x,y,w,h){
        this.dusbin1 = loadImage("dustbingreen.png")

       var options = {
            isStatic: true
        }

    this.body = Bodies.rectangle(x,y,w,h,options)
    World.add(world, this.body);
    }
    display(){
        var paperpos = this.body.position;

        push()
        translate(paperpos.x, paperpos.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill(255,0,255); 
        image(this.dusbin1,0,0,40,50)
        pop()
    }

}