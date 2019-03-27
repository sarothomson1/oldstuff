console.log("Main is called");

var myR = new Rectangle(100, 100, 200, 100, colArray[0][3], colArray[1][2]);
myR.update();

function animate(){
    ctx.clearRect(0, 0, width, height);
    myR.update();
    window.requestAnimationFrame(animate);
}
animate();
