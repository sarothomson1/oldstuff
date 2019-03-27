console.log("main is called");


var objectSet = [];
//allows object to exist
var myRectangleA = new Rectangle(100, 100, 100, 40, colArray[0][3]);

//to put on canvas
//myRectangleA.update();

var myRectangleB = new Rectangle(250, 200, 40, 60, "rgb(0,0,255)");
//myRectangleB.update();

//declare array


var myROne = new Rectangle(150, 350, 100, 20, colArray[0][3]);
var myRTwo = new Rectangle(200, 400, 40, 60, colArray[2][1]);

objectSet.push(myROne, myRTwo, myRectangleB , myRectangleA);


for(var i = 0; i < 3; i++){
    objectSet[i].update()

}