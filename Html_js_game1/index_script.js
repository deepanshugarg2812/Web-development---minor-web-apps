console.log("Script loaded")

let playbox = document.getElementById("playbox")
let context = playbox.getContext("2d")

class Box{
    constructor(size,color){
        this.size = size;
        this.color = color;
        this.x = 0;
        this.y = 0;
    }
}


class Player extends Box{
    constructor(){
        super(50,"blue");
        this.x = 0;
        this.y = 225;
        this.speed = 0;
    }
    move(){
        this.x += this.speed;
        if(this.x==500){
            alert("You won")
            this.x = 0;
        }
    }
}

class Enmey extends Box{
    constructor(speed){
        super(50,"red");
        this.speed = speed;
    }
    move(){
        if((this.y + this.size)>=500){
            this.speed = -1*this.speed;
        }
        this.y += this.speed;
        if(this.y==0){
            this.speed = -1*this.speed;
        }
    }
}

let p1 = new Player();
let e1 = new Enmey(1);
let e2 = new Enmey(2);
let e3 = new Enmey(3);
e1.x = 100;
e2.x = 200;
e3.x = 300;

function isCollided(box1,box2){
    if(((box1.x<=box2.x) && (box1.x+box1.size>=box2.x)) && box1.y==box2.y){
        return true;
    }
    return false;
}

function drawBox(Box){
    context.fillStyle = Box.color;
    context.fillRect(Box.x,Box.y,Box.size,Box.size);
}

playbox.addEventListener('mousedown',() => {
    p1.speed = 5;
})

playbox.addEventListener('mouseup',() => {
    p1.speed = 0;
})

function updateFrame(){
    window.requestAnimationFrame(() =>{
        context.clearRect(0,0,500,500);
        e1.move();
        e2.move();
        e3.move();
        p1.move();
        
        if(isCollided(e1,p1) || isCollided(e2,p1) || isCollided(e3,p1)){
            alert("You loose");
            p1.x = 0;
            context.clearRect(0,0,500,500);
        }
        
        
        drawBox(e1);
        drawBox(e2);
        drawBox(e3);
        drawBox(p1);
        updateFrame();
    })
}

updateFrame();

