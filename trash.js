class Trash{

    constructor(x,y,w,h){

        var options = {
            isStatic:true

        }

        this.body = Bodies.rectangle(x,y,w,h, options);
        this.w = w;
        this.h = h;
        World.add(world,this.body);
        fill("blue");
        
    }

    show(){

        var pos =this.body.position;

        push();

        rectMode(CENTER);
        stroke(255);
        fill("red");
        rect(pos.x , pos.y, this.w, this.h);

        pop();

    }












}