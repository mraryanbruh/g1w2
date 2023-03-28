noseX= 0;
noseY= 0;
difference= 0;
rightWristX= 0;
leftWristX= 0;

function setup(){
    canvas= createCanvas(550,551);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550,500);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function gotPoses(results){
    if(results.length>0){
      console.log(results);
     noseX= results[0].pose.nose.x;
     noseY = results[0].pose.nose.y;
     console.log("nose x= "+ noseX +"nose y= "+ noseY);

     leftwristX= results[0].pose.leftWrist.x;
     rightwristX=results[0].pose.rightWrist.x;
     difference= floor(leftWristX-rightWrist);
     console.log("left wrist x= "+ leftwristX + "right wrist x= "+ rightWristX +"difference= "+ difference);
    }
}

function modelLoaded(){
    console.log('poseNet is working');
}

function draw(){
    background('#969A97');
    document.getElementById("square_side").innerHTML="width and height of a square will be = "+ difference+"px";
    fill("#F90093");
    stroke("#F90093");
    square(noseX,noseY,difference)
}