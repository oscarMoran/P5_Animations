var song;
var slider;
var button;
var amp;
let trail;
let effectValue = 1;
let trails = [];
let stars = [];
let starsNumber = 450;
var w = window.innerWidth;
var h = window.innerHeight;

function setup(){
    let canvas = createCanvas(w,h);
    amp = new p5.Amplitude();
    slider = createSlider(0,1,0.5,0.01);
    song = loadSound('./assets/jsLibrary/10densParis.mp3', Loaded );

        var div = document.getElementById("musicAnimation");
        if(div){
          canvas.parent(div);
        }

    
    StarsLoad();
}

function Loaded()
{
    let divContent = document.getElementById("contentButton");
    button = document.createElement("button");
    button.textContent = "play!";
    button.classList.add('btn-primary');
    button.addEventListener('click',TogglePlaying);
    divContent.append(button);
}

function TogglePlaying()
{
    if(!song.isPlaying()){
        song.play();
        button.textContent ="pause";
    }else{
        song.pause();
        button.textContent ="play";
    }
}

function draw(){
    w = window.innerWidth;
    h = window.innerHeight;
    var baseX = width /2; let baseY = height /2;
    background(0);
    var vol = amp.getLevel();
    var diam = map(vol,0,0.3,35,140);
    let randomColor = color(56,random(diam),random(diam));
    let currentXvalue = 0;
    song.setVolume(slider.value());

    stars.forEach(t => {
        t.Apear();
    });
    Saturn(baseX,baseY,diam);
    if(diam > 120){
        trails.push(new Chemtrail(width /2, height / 2));
    }

    beginShape();
    trails.forEach((t, v) => {
        t.Update(diam);
        t.Show(diam,effectValue, randomColor);
        if(t.IsDeleteit()){
            trails.splice(t,1);
        }

    });
    endShape();
}

function Saturn(baseX, baseY, diam){
    fill(0);
    stroke(255);
    ellipse(baseX, baseY , diam, diam);
    line((baseX - diam), baseY, (baseX + diam), baseY);
}

function StarsLoad(){
    let starColors = color(255,0,0);
    for(let s = 0; s < starsNumber; s++){
        let randomStarPositionX = random(width); 
        let randomStarPositionY = random(height); 
        stars.push(new Stars(randomStarPositionX, randomStarPositionY, random(0,1), starColors));
    }
}
function mousePressed  (){
    trails.push(new Chemtrail(width /2, height / 2));
}

function mouseWheel(){
    effectValue = effectValue > 0 ? effectValue -1 : effectValue +1;
}

function windowResized() {
    stars = [];
    StarsLoad();
    resizeCanvas(w, h, true);
  }