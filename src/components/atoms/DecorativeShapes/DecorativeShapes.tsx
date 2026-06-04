import styles from "./DecorativeShapes.module.css";

function seededRandom(seed: number) {
  let s = seed;
  return () => {
    s = (s * 16807 + 0) % 2147483647;
    return s / 2147483647;
  };
}

function generateShapes() {
  const rand = seededRandom(42);
  const shapes: {
    type: "circle" | "logo";
    top: string;
    left: string;
    size: number;
    opacity: number;
    dx: number;
    dy: number;
    duration: number;
  }[] = [];

  for (let i = 0; i < 20; i++) {
    const angle = rand() * Math.PI * 2;
    const dist = 20 + rand() * 40;
    shapes.push({
      type: "circle",
      top: `${(rand() * 95).toFixed(1)}%`,
      left: `${(rand() * 90).toFixed(1)}%`,
      size: Math.round(60 + rand() * 140),
      opacity: 0.8,
      dx: Math.round(Math.cos(angle) * dist),
      dy: Math.round(Math.sin(angle) * dist),
      duration: Math.round(8 + rand() * 12),
    });
  }

  for (let i = 0; i < 3; i++) {
    const angle = rand() * Math.PI * 2;
    const dist = 15 + rand() * 30;
    shapes.push({
      type: "logo",
      top: `${(rand() * 90).toFixed(1)}%`,
      left: `${(rand() * 85).toFixed(1)}%`,
      size: Math.round(60 + rand() * 80),
      opacity: 0.8,
      dx: Math.round(Math.cos(angle) * dist),
      dy: Math.round(Math.sin(angle) * dist),
      duration: Math.round(8 + rand() * 12),
    });
  }

  return shapes;
}

const SHAPES = generateShapes();

export function DecorativeShapes() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      {SHAPES.map((shape, i) => (
        <div
          key={i}
          className={styles.shape}
          style={{
            top: shape.top,
            left: shape.left,
            width: shape.size,
            height: shape.size,
            opacity: shape.opacity,
            "--dx": `${shape.dx}px`,
            "--dy": `${shape.dy}px`,
            "--duration": `${shape.duration}s`,
          } as React.CSSProperties}
        >
          {shape.type === "circle" ? (
            <div className={styles.circle} />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img src="/logo-symbol.svg" alt="" className={styles.logo} />
          )}
        </div>
      ))}
    </div>
  );
}
