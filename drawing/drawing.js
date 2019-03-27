console.log("drawing js called")
canvas = document.querySelector('#myCanvas');
// ctx allows to connect to canvas
var ctx = canvas.getContext('2d');
var width = 800;
var height = 600;
canvas.width = width;
canvas.height = height;

//complete drawing of rectangle
ctx.strokeStyle = "rgb(255,100,90)";
ctx.fillStyle = 'rgb(50,255,90)';
ctx.lineWidth = 10;
ctx.beginPath();
ctx.rect(10,10,100,50);
ctx.stroke();
ctx.fill();

//draw circle
ctx.fillStyle='rgb(255,204,51)'
ctx.strokeStyle='rgb(51,51,255)'
ctx.lineWidth=10;
// x,y (coordinates), radius, 0 to draw full circle 0-360
ctx.beginPath();
ctx.arc(200,60, 50, 0, 2*Math.PI);
ctx.stroke();
ctx.fill();

//add text
ctx.fillStyle="rgb(0,0,255)";
var myFont= "bold 30px monospace";
ctx.font=myFont;
ctx.fillText("Hello World", 300, 500);

//draw line
ctx.strokeStyle="(255, 0, 0)";
ctx.lineWidth=10;
ctx.beginPath();
ctx.moveTo(0, 200);
ctx.lineTo(750,200)
ctx.stroke();


//draw line
//ctx.strokeStyle="rgb(255,102,102)";
//ctx.fillStyle= "rgb(255,255,153)";
//ctx.lineWidth=10