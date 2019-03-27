console.log("Ball is called");

class Ball{
    
    constructor(x, y, r, col){
        this.x = x;
        this.y = y;
        this.r = r;
        this.fill = col;
        console.log("hello");
    }
    
    update(){
        this.x +=3;
        this.x = this.x%800;

        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();

    }

}