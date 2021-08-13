// Obtener el canvas del HTML
let canvas = document.getElementById("canvas");

// Para hacer figuras en 2d
let ctx = canvas.getContext("2d");

// Dimensiones
canvas.width = 700;
canvas.height = 700;

let score = 0;
let isGameOver = false;
let snake = {
  size: 3,
  direction: "d",
  tail: [],
};
let apple = {
  x: 0,
  y: 0,
  spawned: false,
};

const restart = () => {
  score = 0;
  isGameOver = false;
  snake = {
    size: 3,
    direction: "d",
    tail: [],
  };
  apple = {
    x: 0,
    y: 0,
    spawned: false,
  };

  for (let i = 0; i < 3; i++) {
    snake.tail.push({ x: 0, y: 0 });
  }
};
const draw = () => {
  ctx.clearRect(0, 0, 700, 700);
  ctx.fillStyle = "white";
  for (let i = 0; i < snake.tail.length; i++) {
    let point = snake.tail[i];
    ctx.fillRect(point.x, point.y, 20, 20);
  }

  ctx.fillStyle = "red";
  ctx.fillRect(apple.x, apple.y, 20, 20);
};

const input = (e) => {
  const { key } = e;
  snake.direction = key;
};

function update() {
  for (let i = snake.tail.length - 1; i > 0; i--) {
    let point = snake.tail[i];
    let nextPoint = snake.tail[i - 1];

    point.x = nextPoint.x;
    point.y = nextPoint.y;

    switch (snake.direction) {
      case "d":
        snake.tail[0].x += 20;
        break;
      case "w":
        snake.tail[0].y -= 20;
        break;
      case "a":
        snake.tail[0].x -= 20;
        break;
      case "s":
        snake.tail[0].y += 20;
        break;
    }
  }

  if (apple.spawned == false) {
    apple.x = Math.floor(Math.random() * (700 / 20)) * 20;
    apple.y = Math.floor(Math.random() * (700 / 20)) * 20;
    apple.spawned = true;
  }

  if (isColliding(snake.tail[0], apple)) {
    apple.spawned = false;
    score = score + 1;
    snake.tail.push({
      x: snake.tail[0].x,
      y: snake.tail[0].y,
    });
  }
  draw();
}

const isColliding = (rect1, rect2) => {
  return (
    rect1.x < rect2.x + 20 &&
    rect1.x + 20 > rect2.x &&
    rect1.y < rect2.y + 20 &&
    rect1.y + 20 > rect2.y
  );
};

restart();
document.addEventListener("keydown", input);
setInterval(update, 1000 / 5);
