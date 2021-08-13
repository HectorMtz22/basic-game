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

function update() {}

setInterval(update, 1000 / 60);
