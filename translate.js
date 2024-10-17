const my2Canvas = document.getElementById("myDrawing2");
const my2Context = my2Canvas.getContext("2d");

for (let i = 0; i < 7; i++){
    for (let j = 0; j < 5; j++){
        my2Context.save();
        my2Context.fillStyle = "rgb(255, " + (200-30*i) + ", " + (90+5*j) + ")";
    my2Context.translate(10 + i * 40, 10 + j * 40);
    my2Context.fillRect(0,0,35,35);
    my2Context.restore();
    }
}