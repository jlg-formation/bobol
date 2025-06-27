import type { Ball} from '../types';

export function setupPhysicsSimulation(ctx: CanvasRenderingContext2D) {
  const GRAVITY = 0.4;
  const dt = 1;
  const a = 0.003; // courbure du bol y = ax² (forme de U)
  const BOWL_OFFSET =550; // Décalage vers le bas pour centrer le bowl

  const balls: Ball[] = [
    {
      x: -100,
      y: 100, // Position au-dessus du bowl
      vx: 1.0,
      vy: 0,
      color: "red",
      path: [],
    },
    {
      x: -90,
      y: 100, // Position au-dessus du bowl
      vx: 1.0,
      vy: 0,
      color: "blue",
      path: [],
    },
  ];

  function drawBowl() {
    ctx.beginPath();
    for (let x = -400; x <= 400; x++) {
      const y = BOWL_OFFSET - a * x * x; // Soustraire pour avoir une forme de U
      if (x === -400) ctx.moveTo(x + 400, y);
      else ctx.lineTo(x + 400, y);
    }
    ctx.strokeStyle = "black";
    ctx.stroke();
  }

  function updateBall(ball: Ball) {
    ball.vy += GRAVITY * dt;
    
    // Calculer la pente de la surface au point x de la balle
    // Pour y = BOWL_OFFSET - a * x², la dérivée est dy/dx = -2 * a * x
    const slope = -2 * a * ball.x;
    
    // Ajouter une force horizontale basée sur la pente pour garder la balle dans le bowl
    const slopeForce = slope * 0.1; // Facteur d'ajustement pour la force de la pente
    ball.vx += slopeForce * dt;
    
    ball.x += ball.vx * dt;
    ball.y += ball.vy * dt;

    const surfaceY = BOWL_OFFSET - a * ball.x * ball.x; // Même formule que pour le dessin
    if (ball.y >= surfaceY) {
      ball.y = surfaceY;
      ball.vy *= -0.9; // Léger amortissement pour éviter les rebonds infinis
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