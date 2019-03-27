console.log("main is called");

//Incl (canvas) when adding listener
var myT = new Point(560, 300, 70, colArray[0][9], false);
var myS = new Point(200, 300, 70, colArray[0][7], false);
var myR = new Point(200, 60, 100, colArray[1][2], false);
var myY = new Point(300, 88, 200, colArray[2][2], false);
myT.update();
myS.update();
myR.update();
myY.update();

function animate(){
    ctx.clearRect(0, 0, width, height);
    myT.update();
    myS.update();
    myR.update();
    myY.update();

    window.requestAnimationFrame(animate);
}
animate();

