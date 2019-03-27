console.log("Point is called");

class Point{
    constructor(x, y, r, c1, c2){
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = c1;
        this.over = c2;

        this.xMouse = 0;
        this.yMouse = 0;


        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

        this.insideCircle = false;
        this.oktoDrag = false;
    }

    mDown(e){
        if (this.insideCircle == true){
            this.oktoDrag = true;
        }
   
    }

    mMove(e){
    
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        var dist = this.distanceCheck(this.x, this.y, this.xMouse, this.yMouse);
        if (dist <= this.r){
            this.insideCircle = true;

        }else{this.insideCircle = false;}

        
        console.log(this.insideCircle);
      

 
  
    }

    mUp(e){
        this.oktoDrag = false;
 console.log("Mouse up")
        
    }

    update(){

        if (this.oktoDrag == true){
            this.x = this.xMouse;
            this.y = this.yMouse;
        }
   
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

    distanceCheck(x, y, xM, yM){
        var d = Math.sqrt(Math.pow(xM - x,2)+ Math.pow(yM-y,2));
        return d;
    }
}
