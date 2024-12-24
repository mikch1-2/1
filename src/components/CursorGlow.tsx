import { useMousePosition } from '../hooks/useMousePosition';

export default function CursorGlow() {
  const { x, y } = useMousePosition();

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"
      style={{
        background: `
          radial-gradient(
            300px at ${x}px ${y}px,
            rgba(29, 78, 216, 0.15),
            rgba(29, 78, 216, 0.05) 40%,
            transparent 95%
          )
        `
      }}
    />
  );
}