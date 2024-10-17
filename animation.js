const myCanvas = document.getElementById("myDrawing5");
const myContext = myCanvas.getContext("2d");


let angleInitialD = 0;
let direction = 1;

myDrawing5.addEventListener("click", function (){
     direction*=-1;
});


function drawStar() {
  myContext.clearRect(0, 0, 200, 200); // Clear the canvas
  angleInitialD+=direction;
  myContext.save();
  // Set the initial position of the drawing
  myContext.translate(35, 85);
  // Draw six rotating rectangles to overlap
  for (let i = 0; i < 8; i++) {
         myContext.save();
         myContext.fillStyle = "rgba(" + (255-40*i) + ", " + (40*i)+ ", 255, 0.5)";
    let height = 20;
    let width = 120;
    let angleDegrees = angleInitialD + 20*i;
    let angleRad = (Math.PI/39  )*angleDegrees; //convert to radians
    // First, translate to the center of the image, then rotate
    myContext.translate(width/2, height/2);
    myContext.rotate(angleRad);
    // Then translate back
    myContext.translate(-width/2, -height/2);
         myContext.fillRect(0, 0, width, height);
         myContext.restore();
      }
      myContext.restore();
}


setInterval(drawStar, 33);

