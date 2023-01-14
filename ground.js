class Ground{

 constructor(x,y,w,h){
    this.x=x 
    this.y=y 
    this.body= Bodies.rectangle(x,y,w,h)
    this.width=w
    this.height=h
    World.add(world,this.body)
}
display(){
push()
rect(this.body.position.x,this.body.position.y, this.width,this.height)
pop()
}
}