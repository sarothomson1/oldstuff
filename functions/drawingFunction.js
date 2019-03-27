console.log("function js is called");


//draw circle x, y, r, fillC(rgb string), strokeC(rgb string), lWidtd
// fill(boolean), stroke(boolean)
function drawCircle(x,y,R,fillC,strokeC,lWidth,fill,stroke) {
    ctx.beginPath();
    ctx.arc(x,y,R,0,2*Math.PI);
    if(fill==true){
        ctx.fillStyle=fillC;
        ctx.fill();
    }

    if(stroke==true){
        ctx.strokeStyle=strokeC;
        ctx.lineWidth=lWidth;
        ctx.stroke();

    }
}

drawCircle(100, 200,50, colArray[5], colArray[6], 0, true, true);
drawCircle(50, 200,50, colArray[5], colArray[6], 0, false, true);
drawCircle(100, 100,50, colArray[4], colArray[4], 0, true, false);
drawCircle(500, 100,40, colArray[2], colArray[4], 0, true, true);