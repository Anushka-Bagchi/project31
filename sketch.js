const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drop = [];
var maxDrops = 100;
var umbrella;
var thunder1,thunder2,thunder3,thunder4;
var thunder,rand;

function preload(){
    thunder1 = loadImage("1.png");
    thunder2 = loadImage("2.png");
    thunder3 = loadImage("3.png");
    thunder4 = loadImage("4.png");
}

function setup(){
    var canvas = createCanvas(400,600);
    
    engine = Engine.create();
    world = engine.world;
   
    if(frameCount%100==0){
        for(var i=0;i<maxDrops;i++){
            drop.push(new Drops(random(0,400),random(0,400)));
        }
    }
    

    umbrella = new Umbrella(200,450);


}

function draw(){
    background(0);
    Engine.update(engine);

    for(var i=0;i<maxDrops;i++){
        drop[i].display();
        drop[i].update();
    }
    rand = Math.round(random(1,4));
    if(frameCount%80==0){
        thunder = createSprite(random(10,370),random(10,30),10,10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break;
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = (random(0.3,0.6));
        thunder.lifetime = 10;
      
    }
    
    umbrella.display();   
    
    drawSprites();
    
}   

