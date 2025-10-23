// script.js - Birthday Wish Page Scripts
// Handles curtain animation and confetti effect

// Curtain animation
window.onload = function() {
    setTimeout(function() {
        document.getElementById('curtain').classList.add('open');
    }, 1200);
};

// Confetti animation
const canvas = document.getElementById('confetti');
const ctx = canvas.getContext('2d');
let W = window.innerWidth;
let H = window.innerHeight;
canvas.width = W;
canvas.height = H;

// Confetti particle settings
let particles = [];
let colors = ['#d16ba5','#c777b9','#a8327e','#f8e1f4','#fff','#6d2177'];
for(let i=0;i<120;i++){
    particles.push({
        x: Math.random()*W,
        y: Math.random()*H,
        r: Math.random()*8+4,
        d: Math.random()*W,
        color: colors[Math.floor(Math.random()*colors.length)],
        tilt: Math.floor(Math.random()*10)-10
    });
}

// Draw confetti particles
function draw(){
    ctx.clearRect(0,0,W,H);
    for(let i=0;i<particles.length;i++){
        let p = particles[i];
        ctx.beginPath();
        ctx.arc(p.x,p.y,p.r,0,Math.PI*2,false);
        ctx.fillStyle = p.color;
        ctx.fill();
    }
    update();
}

// Update confetti positions
function update(){
    for(let i=0;i<particles.length;i++){
        let p = particles[i];
        p.y += Math.cos(p.d)+2+p.r/2;
        p.x += Math.sin(p.d);
        if(p.y > H){
            p.x = Math.random()*W;
            p.y = -10;
        }
    }
}

setInterval(draw,30);

// Responsive canvas
window.onresize = function(){
    W = window.innerWidth;
    H = window.innerHeight;
    canvas.width = W;
    canvas.height = H;
};
