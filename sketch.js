var bk
var doll,dollimg,d2,d3
var k, k1,k2,kimg
var snakeimg,snake,alien,alienimg,monster,monsterimg
var virus,virusimg,thunder,thunderimg



function preload(){
    bk=loadImage("./assets/bk.jfif")
dollimg=loadImage("./assets/doll.png")
kimg=loadImage("./assets/k.png")
thunderimg=loadImage("./assets/thunder.png")
alienimg=loadImage("./assets/alien.png")
virusimg=loadImage("./assets/virus.png")
snakeimg=loadImage("./assets/snake.png")
monsterimg=loadImage("./assets/monster.png")
}


function setup (){
canvas=createCanvas(1200,1000)

doll=createSprite(180,100)
doll.addImage("doll",dollimg)

d2=createSprite(520,100)
 d2.addImage("doll",dollimg)

 d3=createSprite(870,100)
 d3.addImage("doll",dollimg)

k=createSprite(50,100)
k.addImage("k",kimg)
k.scale=0.5

k2=createSprite(330,100)
k2.addImage("k",kimg)
k2.scale=0.5

k1=createSprite(700,100)
 k1.addImage("k",kimg)
 k1.scale=0.5

snakeGroup=new Group()
}


function draw(){
background("pink");
k.velocityX=3;
drawSprites()

}

  