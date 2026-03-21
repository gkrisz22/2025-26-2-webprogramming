const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");


ctx.fillStyle = "green";
ctx.fillRect(0, 0, 100, 200); // fillRect(x, y, width, height);

ctx.fillStyle = "blue";
ctx.lineWidth = 2;
ctx.strokeRect(110, 0, 100, 200)

// Draw a text
ctx.font = "40px Arial";
ctx.fillText("Hello world!", 100, 300)
ctx.lineWidth = 1
ctx.strokeText("Hello", 100, 350)

// Draw Mario
const mario = new Image();
mario.src = "mario.png";

// If the image has loaded
mario.addEventListener("load", () => {
    ctx.drawImage(mario, 300, 100, 64, 64);
});

// Drawing a triangle
ctx.strokeStyle = "red";

ctx.beginPath(); // Put the pen on the paper
ctx.moveTo(80, 80);
ctx.lineTo(80, 150);
ctx.lineTo(150, 150);
ctx.lineTo(80,80);

//ctx.fill();
ctx.stroke();