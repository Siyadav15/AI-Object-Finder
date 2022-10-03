status="";
objects=[];

function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(380,380);
    video.hide();
}
function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting objects...";
   
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(video,gotResults);
}
function draw(){
    image(video,0,0,380,380);
    if(object!=""){
       for(i=0;i<objects.length;i++){
        document.getElementById("status").innerHTML="Status: Object detected...";
        document.getElementById("")
       percent=floor(objects[i].confidence*100);
       text(objects[i].label+" "+percent+"% ",objects[i].x,objects[i].y);
       r=random(1,255);
       g=random(1,255);
       b=random(1,255);
       stroke(r,g,b);
       fill(r,g,b);
       noFill();
       rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
       }
       if(objects[i].label==object){
        video.stop();
        objectDetector.detect(gotResults);
        document.getElementById("status_of_object").innerHTML=objects+" Found";
        synth=window.speechSynthesis;
        SpeechSynthesisUtterance(objects);
        
    }
    }
}
function gotResults(error,results){
    if(error){
        console.log(error);
    }
    else{
        console.log(results);
        objects=results;
    }
}
