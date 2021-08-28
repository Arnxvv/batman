class Umbrella{
constructor(x,y){
    var option = {
        isStatic:true
    }
    this.image = loadImage("images/Walking Frame/walking_1.png")
    this.umbrella = Bodies.circle(x,y,50,option)
    this.radius = 50
    World . add(world,this.umbrella)
}
display(){
    var position = this.umbrella.position
    imageMode (CENTER)
    image (this.image,position.x,position.y+70,300,300)
}
}
