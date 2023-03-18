function preload(){
fruit=loadImage('organicfruitbasket_1_3.jpg');
}
function setup(){
canvas=createCanvas(400, 300);
canvas.center();
objectdetector=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="Status: objects are equal to = detected";
}
function draw(){
image(fruit, 0, 0, 400, 300);
if (status!="") {
for(i=0; i<objects.length; i++){
r=random(255);
g=random(255);
b=random(255);
fill(r, g, b);
confidence_percentage=Math.floor(objects[i].confidence*100);
text(objects[i].label+ " "+confidence_percentage+ "%",objects[i].x+15,objects[i].y+15);
noFill();
stroke(r, g, b);
rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
}
objectdetector.detect(fruit, gotResult);
document.getElementById("number_of_objects").innerHTML="Number of Objects is equal to = "+objects.length;
}
}
function modelLoaded(){
console.log("Model is Loaded!");
status=true;
}
function gotResult(error, results){
if(error){
console.error(error);
}
console.log(results);
objects=results;
}