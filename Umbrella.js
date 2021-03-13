class Umbrella{
    constructor(x, y) {
        var options = {
            'isStatic':true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 50, options);
        this.radius = 100;
        World.add(world, this.body);
        this.image = loadImage("images/Walking Frame/walking_1.png");

    }
    display(){

        imageMode(CENTER);
        image(this.image,this.body.position.x, this.body.position.y+50,this.radius+this.radius+40,this.radius+this.radius+40);
        
    }
}