const my3Canvas = document.getElementById("myDrawing3");
const my3Context = my3Canvas.getContext("2d");

my3Context.save();
my3Context.translate(25,75);

for(let i = 0; i < 16; i++){
    my3Context.save();
    my3Context.fillStyle = "rgba(" + (255-10*i) + ", 215, " + (15*i) + ", 0.9)";
    let height = 70;
    let width = 150;
    let angleDegrees = 10*i;
    let angleRad = (Math.PI/90)*angleDegrees;

    my3Context.translate(width/2, height/2.5);
    my3Context.rotate(angleRad);

    my3Context.translate(-width/2, -height/2.5);
        my3Context.fillRect(0,20, width, height);
        my3Context.restore();
}
my3Context.restore();