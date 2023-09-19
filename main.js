Nose_X=0;
Nose_Y=0;

function preload(){
 gorro=loadImage('https://i.postimg.cc/cJWnsRCr/gorro.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

    
}
function gotPoses(results){
    if(results.length > 0 ){
     console.log(results);
     Nose_X=results[0].pose.nose.x-40;
     Nose_Y=results[0].pose.nose.y-130;
     console.log("Nose X= " + Nose_X);
     console.log("Nose Y= " + Nose_Y);
    }
}

function draw(){
image(video , 0 , 0 , 300 , 300);
image(gorro, Nose_X,Nose_Y,90,90);
}

function take_snapshot(){
    save('FilterImage.png');
}

function modelLoaded(){
    console.log("poseNet esta inicialisado");
}

