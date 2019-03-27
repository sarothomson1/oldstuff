console.log("Main is called");

var myT = new ControlObjectPush(canvas);
//var myT = new TestObject(canvas);

//this is the base code for animation loop
//it is running but at present it is not having any impact
//the listeners in the object are independent of the animation

function animate(){
    ctx.clearRect(0, 0, width, height);
    myT.update();



    window.requestAnimationFrame(animate);

}

animate();