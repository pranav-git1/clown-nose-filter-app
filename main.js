noseX = 0;
noseY = 0;

function preload() {
    clownNose = loadImage('https://i.postimg.cc/wTZTLKTK/Clown-Nose-PNG-Background-Image.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(clownNose, noseX, noseY, 100, 100)
    fill(255, 0, 0);
    stroke(255, 0, 0)
}

function take_snapshot() {
    save('my_filtered_image');
}

function modelLoaded() {
    console.log('PoseNet is initialized');
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 50;
        noseY = results[0].pose.nose.y - 70;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}