const my4Canvas = document.getElementById("myDrawing4");
const my4Context = my4Canvas.getContext("2d");


my4Context.translate(25, 75);
my4Context.scale(0.7, 0.3);

my4Context.save();
my4Context.translate(25,75);


for(let i = 0; i < 16; i++){
    my4Context.save();
    my4Context.fillStyle = "rgba(" + (255-10*i) + ", 215, " + (15*i) + ", 0.9)";
    let height = 70;
    let width = 150;
    let angleDegrees = 10*i;
    let angleRad = (Math.PI/90)*angleDegrees;

    my4Context.translate(width/2, height/2.5);
    my4Context.rotate(angleRad);

    my4Context.translate(-width/2, -height/2.5);
        my4Context.fillRect(0,20, width, height);
        my4Context.restore();
}
my4Context.restore();