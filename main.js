video= "";
status="";
objects= [];

function preload(){
    song1= loadSound("alarm.mp3")

}

function setup(){
    video= createCapture(VIDEO);
    video.hide();
    canvas= createCanvas(380, 380);
    canvas.center();
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(objects = person){
        document.getElementById("status").innerHTML= "status: objects detected";
         document.getElementById("objects").innerHTML= "Baby found ";
        fill("#FF0000");
            percent= floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y +15);
            noFill();
            stroke("#FF0000");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
         song1.stop();
    }
    else{
        song1.play;
    }
}

