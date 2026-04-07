console.log("Script is ready");

// Canvas API - Basic Physics
const canvas = document.querySelector("canvas"); // #myCanvas:  <canvas id="myCanvas"></canvas>
const ctx = canvas.getContext("2d");

let balls = [
    { x: 50, y: 50, v: 0, color: "red", r: 10 },
    { x: 100, y: 150, v: 0, color: "blue", r: 20}
]

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(const ball of balls) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.r, 0, 2 * Math.PI);
        ctx.fillStyle = ball.color;
        ctx.fill();
    }
}

draw();


let last = performance.now();

function gameLoop() {
    const now = performance.now();
    const dt = now - last; // delta time / time elapsed
    draw();
    update(dt);

    last = now;
    requestAnimationFrame(gameLoop);
}

gameLoop();

function update(dt) {
    if(dt > 100) return;

    for(const ball of balls) {
        if(ball.y + ball.r > canvas.height) {
            ball.v *= -1;
            ball.y = canvas.height - ball.r;
        }
        ball.v += 0.0001 * dt;
        ball.y += ball.v * dt;
    }
}

canvas.addEventListener("click", function (event) {
    const ball = {
        x: event.offsetX,
        y: event.offsetY,
        v: 0,
        r: Math.floor(10 + Math.random() * 10),
        color: `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` // rgb(0, 0, 0) -> black | rgb(255, 255, 255) -> white 
    };

    balls.push(ball);
})