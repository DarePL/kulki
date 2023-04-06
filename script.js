const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let balls = [];
let speed = 1;
let i = -1;
animate();

//tworzy nową kulkę
function createBall() {
  //losuje kolor
  let randomColor = {
    red: parseInt(Math.random() * 255 + 0),
    green: parseInt(Math.random() * 255 + 0),
    blue: parseInt(Math.random() * 255 + 0),
    rgb() {
      return "rgb(" + this.red + "," + this.green + "," + this.blue + ")";
    }
  }
  //ustawia parametry i dodaje nową kulkę do tablicy 'balls' 
  let ball = {
    x: parseInt(CANVAS_WIDTH / 2),
    y: parseInt(CANVAS_HEIGHT / 2),
    dx: (Math.random() * 4 + 1),
    dy: (Math.random() * 4 + 1),
    radius: parseInt(Math.random() * 40 + 5),
    speed: 1,
    randomColor: randomColor.rgb(),
  }
  balls.push(ball);
  i++;
}
//rysuje kulki
function drawBalls(i) {
  ctx.strokeStyle = "grey";
  ctx.fillStyle = balls[i].randomColor;
  ctx.beginPath();
  ctx.arc(balls[i].x, balls[i].y, balls[i].radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}

//tworzy wiele kulek
function createManyBalls() {
  let i = parseInt(document.getElementById("numberOfBalls").value);
  if (i > 500) {
    alert("Trochę za dużo kulek.\nProgram może zacząć zamulać komputer ;-)\nmaksymalna liczba to 500");
  }
  else if ((balls.length > 500) || (i + balls.length > 500)) {
    alert("Może już wystarczy kulek?\nProgram może zacząć zamulać komputer ;-)\nmaksymalna liczba to 500")
  }
  else {
    for (let j = 0; j < i; j++) {
      createBall();
    }
  }
}

//animacja canvas
function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (let k = 0; k < balls.length; k++) {
    drawBalls(k);

    balls[k].x = balls[k].x + balls[k].dx * speed;
    balls[k].y = balls[k].y + balls[k].dy * speed;

    $("#table-kulki").html("<td>Ilość kulek na ekranie: " + balls.length + "</td>");

    if ((balls[k].x >= CANVAS_WIDTH - balls[k].radius) || (balls[k].x - balls[k].radius <= 0)) {
      balls[k].dx = -balls[k].dx;
      if (balls[k].x < 0) {
        balls[k].x = 0;
      }
      if (balls[k].x > CANVAS_WIDTH - balls[k].radius) {
        balls[k].x = CANVAS_WIDTH - balls[k].radius;
      }
    }

    if ((balls[k].y >= CANVAS_HEIGHT - balls[k].radius) || (balls[k].y - balls[k].radius <= 0)) {
      balls[k].dy = -balls[k].dy;
      if (balls[k].y < 0) {
        balls[k].y = 0;
      }
      if (balls[k].y > CANVAS_HEIGHT - balls[k].radius) {
        balls[k].y = CANVAS_HEIGHT - balls[k].radius;
      }
    }
  }
  requestAnimationFrame(animate);
}

//czyszczenie canvasa z kulek
function clearTable() {
  i = -1;
  balls = [];
}