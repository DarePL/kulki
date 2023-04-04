const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

let radnomRed = [];
let radnomGreen = [];
let radnomBlue = [];
let elementRadius = [];

let x = [];
let y = [];
let dx = [];
let dy = [];
let tablica = [];
let speed = 1;
let i = -1;

function addRandom() {
  i++;
  radnomRed[i] = parseInt(Math.random() * 255 + 0);
  radnomGreen[i] = parseInt(Math.random() * 255 + 0);
  radnomBlue[i] = parseInt(Math.random() * 255 + 0);
  elementRadius.push(parseInt(Math.random() * 40 + 20));
  x.push(parseInt(CANVAS_WIDTH / 2));
  y.push(parseInt(CANVAS_HEIGHT / 2));
  dx.push(parseInt((Math.random() * 4 + 1)));
  dy.push(parseInt((Math.random() * 4 + 1)));
  addTable(i);
}

function create(i) {
  ctx.strokeStyle = "grey";
  ctx.fillStyle = "red";
  ctx.beginPath();
  ctx.arc(x[i], y[i], elementRadius[i], 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
  console.log(x);
}

animate();

function animate() {
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

  for (let k = 0; k < x.length; k++) {
    ctx.strokeStyle = "grey";
    ctx.fillStyle = "rgb(" + radnomRed[0] + ", " + radnomGreen[0] + ", " + radnomBlue[0] + ")";
    ctx.beginPath();
    ctx.arc(x[k], y[k], elementRadius[k], 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    x[k] = x[k] + dx[k] * speed;
    y[k] = y[k] + dy[k] * speed;

    for (let t = 0; t < elementRadius.length; t++) {

      $("#tr" + t + "").html("<td>" + t + "</td><td>x: " + parseInt(x[t]) +
        "</td><td>y: " + parseInt(y[t]) +
        "</td><td>radius: " + parseInt(elementRadius[t]) +
        "</td><td>dx: " + parseInt(dx[t]) +
        "</td><td>dy: " + parseInt(dy[t]) + "</td>");
    }


    if ((x[k] >= CANVAS_WIDTH - elementRadius[k]) || (x[k] - elementRadius[k] <= 0)) {
      dx[k] = -dx[k];
      if (x[k] < 0) {
        x[k] = 0;
      }
      if (x[k] > CANVAS_WIDTH - elementRadius[k]) {
        x[k] = CANVAS_WIDTH - elementRadius[k];
      }
    }

    if ((y[k] >= CANVAS_HEIGHT - elementRadius[k]) || (y[k] - elementRadius[k] <= 0)) {
      dy[k] = -dy[k];
      if (y[k] < 0) {
        y[k] = 0;
      }
      if (y[k] > CANVAS_HEIGHT - elementRadius[k]) {
        y[k] = CANVAS_HEIGHT - elementRadius[k];
      }
    }
  }
  requestAnimationFrame(animate);
}


function addTable(i) {
  $("#table-kulki").append("<tr id=\"tr" + i + "\">");

}

function clearTable() {
  i = -1;
  radnomRed = [];
  radnomGreen = [];
  radnomBlue = [];
  elementRadius = [];

  x = [];
  y = [];
  dx = [];
  dy = [];
  tablica = [];
  $("#table-kulki").html("");
}