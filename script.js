const myCanvas2 = document.getElementById("myDrawing1");
const ctx = myCanvas2.getContext("2d");



//body
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(100,100,35,0, Math.PI*2)
ctx.fill();
//head
ctx.fillStyle = "white";

ctx.beginPath();
ctx.arc(100,50,25,0, Math.PI*2)
ctx.fill();
//tophat
ctx.fillStyle = "black";
ctx.beginPath();
ctx.rect(85, 10, 30, 30);
ctx.rect(75, 30, 50, 10);
ctx.stroke();
ctx.fill();

//smile
ctx.beginPath();
ctx.arc(100,60,10,0, Math.PI*1)
ctx.arc(100,60,10,0, Math.PI*1)
ctx.stroke();
//nose carrot thing
ctx.fillStyle = "orange";
ctx.beginPath();
ctx.moveTo(100, 50);
ctx.lineTo(130, 56);
ctx.lineTo(100, 55);
ctx.fill();
//eye
ctx.beginPath();
ctx.arc(90,45,5,0, Math.PI*1)
ctx.stroke();
//eye
ctx.beginPath();
ctx.arc(110,45,5,0, Math.PI*1)
ctx.stroke();
//lower body or legs i guess
ctx.fillStyle = "white";
ctx.beginPath();
ctx.arc(100,160,50,0, Math.PI*2)
ctx.fill();






