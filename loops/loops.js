console.log("function js is called");


//draw circle x, y, r, fillC(rgb string), strokeC(rgb string), lWidth
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

var i = 0;
drawCircle(100 + 70*i, 200, 30, colArray[0][5], colArray[0][6], 0, true, true);
 
i=1;
drawCircle(100 + 70*i, 200, 30, colArray[0][5], colArray[0][6], 0, true, true);

i=2;
drawCircle(100 + 70*i, 200, 30, colArray[0][5], colArray[0][6], 0, true, true);

i=3;
drawCircle(100 + 70*i, 200, 30, colArray[0][5], colArray[0][6], 0, true, true);

//for loop, 10 circles going horizontally
for(var i=0 ; i<10 ; i++){
    console.log(i);
    drawCircle(100 + 50*i, 400, 20, colArray[5], colArray[6], 0, true, true);
}

//for loop, 10 circles going vertically
for(var i=0 ; i<10 ; i++){
    console.log(i);
    drawCircle(500, 10 + i*30, 10, colArray[5], colArray[6], 0, true, true);
}

for(var i=0; i<5; i++){
    for (var j =0; j<5; j++){
       
            drawCircle(10 + 30*i, 10 + 30*j, 20, colArray[5], colArray[6], 0, true, true);     
    }
}