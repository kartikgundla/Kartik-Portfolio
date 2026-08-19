import { useEffect, useRef, useState } from "react";

function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const cursorRef = useRef(null);
  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      const target = e.target;
      setIsPointer(window.getComputedStyle(target).cursor === "pointer");
    };
    window.addEventListener("mousemove", move);

    let rafId;
    const animate = () => {
      // smoothly ease toward the actual mouse position instead of snapping
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border-2 border-accent2 transition-[width,height] duration-200 ease-out"
      style={{
        width: isPointer ? "40px" : "24px",
        height: isPointer ? "40px" : "24px",
        boxShadow: "0 0 12px rgba(168, 85, 247, 0.6)",
      }}
    />
  );
}

export default CustomCursor;