function preload() {

}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture();
}

function draw() {
}

function take_snapshot() {
    save('Mustache_Filter.png');
}
