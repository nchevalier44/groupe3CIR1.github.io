

function gratter(event){
    let posX = event.offsetX;
    let posY = event.offsetY;
    context.save();
    context.beginPath();
    let radius = 10;
    context.arc(posX, posY, radius, 0, 2*Math.PI);
    context.clip();
    context.clearRect(posX - radius, posY - radius, 2 * radius, 2 * radius);
    context.restore();
}


let img = document.getElementById("AyoubKarine");
let canvas = document.createElement("canvas");
canvas.width = img.width+2;
canvas.height = img.height+2;
canvas.style.position = "absolute";
img.parentElement.insertBefore(canvas, img);
let context = canvas.getContext("2d");
context.fillStyle = "#CCCCCC";
context.beginPath();
context.arc(canvas.width/2, canvas.height/2, 0.5*canvas.width, 0, Math.PI*2);
context.closePath();
context.fill();

canvas.addEventListener("mousemove", function(event){
    gratter(event);
});

