const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let CANVAS_WIDTH = canvas.width = 600;
let CANVAS_HEIGHT = canvas.height = 600;
let elementWidth = 30;
let elementHeight = 30;
let x = CANVAS_WIDTH / 2 - elementWidth / 2;
let y = CANVAS_HEIGHT / 2 - elementHeight / 2;
let xEnd = x + elementWidth;
let yEnd = y + elementHeight;
let dx = 0.1;
let dy = 0.0;
let speed = 50;



animate();

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.strokeStyle = "red";
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, elementWidth, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  //arc(ball.x,ball.y,ball.R,0,Math.PI*2,true);

  x = x + dx * speed;
  y = y + dy * speed;
  if ((x >= CANVAS_WIDTH - elementWidth) || (x - elementWidth <= 0)) {
    dx = -dx;
    if (x < 0) {
      x = 0;
    }
    if (x > CANVAS_WIDTH - elementWidth) {
      x = CANVAS_WIDTH - elementWidth;
    }
  }











  requestAnimationFrame(animate);
}



function addRandom() {

}