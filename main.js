function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  calssifier=ml5.imageClassifier('MobileNet' , modelloaded);
}

function modelloaded(){
  console.log("modelLoaded");
}
function draw()
{
  image(video , 0 , 0 , 300, 300);
  calssifier.classify(video, gotResult);
}
function gotResult(error, results){
  if (error) {
    console.error(error);
  }else{
    console.log(results);
    document.getElementById("result_object_nme").innerHTML=results[0].label;
    document.getElementById("result_object_accurary").innerHTML=results[0].confidence.toFixed(3);
  }
}



