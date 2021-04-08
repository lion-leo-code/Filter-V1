function setup(){
    canvas = createCanvas(500, 500);
    canvas.position(500, 205);
}
function take_snapshot(){
    save('myFilterImg.png');
}