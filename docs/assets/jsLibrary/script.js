
let particle;
let particleList = [];
var w = window.innerWidth;
var h = window.innerHeight;

function setup() {
  let canvas = createCanvas(w, h);
  setInterval(()=>{
    var div = document.getElementById("AnimationContainer");
    console.log(div);
    canvas.parent(div);
  }, 2000);
 
  
  }
  
function draw() {
  w = window.innerWidth;
  h = window.innerHeight;
    background(0);
    ColorBalloms();
  }

  function ColorBalloms(){
    //for(let j = 0; j < 5; j++){
    let p = new Particle();
    particleList.push(p);
    //}
    for(let e = particleList.length -1; e >= 0; e--){
      particleList[e].update();
      particleList[e].show();
      if(particleList[e].deleteParticle()){
        particleList.splice(e,1);
      }
    }

  }

  function windowResized() {
    resizeCanvas(w, h, true);
  }