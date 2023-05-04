status1 = "";
status2 = "";

song1 = "";
song2 = "";

leftWristX = 0;
leftWristY = 0;

rightWristX = 0;
rightWristY = 0; 

scoreLeftWrist = 0;
scoreRightWrist = 0;

function preload() 
{
    song1 = loadSound("music2.mp3");
    song2 = loadSound("music.mp3");
}

function setup() 
{
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}


function draw() 
{
    image(video, 0, 0, 600, 500);
    fill("#FF0000");
    stroke("#FF0000");
 }

 function modelLoaded() 
 {
     console.log("Model is Inatialized");
 }

 
function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);
    }
}