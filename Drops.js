class Drops{
    constructor(x, y) {
        var options = {
            'isStatic':false,
            'restitution':0.01,
            'friction':0.01,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, 3, options);
        this.radius = 3;
        World.add(world, this.body);

    }
    update(){
        if(this.body.position.y>600){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
    display(){

        stroke("blue");
        fill("blue");
        ellipse(this.body.position.x, this.body.position.y,this.radius,this.radius);
        
    }
}