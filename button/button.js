console.log("Button is called");

class Rectangle {
    constructor(x, y, w, h, c1){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.fill =c1;

        this.xMouse = 0;
        this.yMouse = 0;

        this.insideRectangle = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }

    mDown(e){
        console.log("Mouse is down");
        }
   
    mMove(e){
        console.log("Mouse is moving");
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        
        this.insideRectangle = this.checkBound(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
        console.log(this.insideRectangle);
    }

     mUp(e){
        console.log("Mouse up");    
    }


    update(){
        this.draw();

    }

    draw(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h)
        ctx.fillStyle = this.fill;
        ctx.fill();


    }

    //is mouse inside rectangle
    checkBound(xM, yM, x, y, w, h){
        if(xM > x && xM < x*w && yM > y && yM < y*h){
            return true;
        }
        else{
            return false;
        }
    }


}