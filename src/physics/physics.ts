export function setupPhysicsSimulation(ctx: CanvasRenderingContext2D) {
  const GRAVITY = 0.4;
  const dt = 1;
  const a = 0.005; // courbure du bol y = ax²

  type Ball = {
    x: number;
    y: number;
    vx: number;
    vy: number;
    color: string;
    path: { x: number; y: number }[];
  };

  const balls: Ball[] = [
    {
      x: 0,
      y: 100,
      vx: 1.0,
      vy: 0,
      color: "red",
      path: [],
    },
    {
      x: 0.1,
      y: 100,
      vx: 1.0,
      vy: 0,
      color: "blue",
      path: [],
    },
  ];

  function drawBowl() {
    ctx.beginPath();
    for (let x = -400; x <= 400; x++) {
      const y = a * x * x;
      if (x === -400) ctx.moveTo(x + 400, y);
      else ctx.lineTo(x + 400, y);
    }
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  function updateBall(ball: Ball) {
    ball.vy += GRAVITY * dt;
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;

    const surfaceY = a * ball.x * ball.x;
    if (ball.y >= surfaceY) {
      ball.y = surfaceY;
      ball.vy *= -1;
    }
    ball.path.push({ x: ball.x, y: ball.y });
  }

  function drawBall(ball: Ball) {
    ctx.beginPath();
    for (let i = 0; i < ball.path.length - 1; i++) {
      const p1 = ball.path[i],
        p2 = ball.path[i + 1];
      ctx.moveTo(p1.x + 400, p1.y);
      ctx.lineTo(p2.x + 400, p2.y);
    }
    ctx.strokeStyle = ball.color;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(ball.x + 400, ball.y, 5, 0, 2 * Math.PI);
    ctx.fillStyle = ball.color;
    ctx.fill();
  }

  function loop() {
    ctx.clearRect(0, 0, 800, 600);
    drawBowl();
    for (const ball of balls) {
      updateBall(ball);
      drawBall(ball);
    }
    requestAnimationFrame(loop);
  }

  loop();
}
