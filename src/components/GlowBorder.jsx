import { useEffect, useRef, useState } from "react";

export default function GlowBorder({ size = 400, className = "" }) {
  const hostRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    const layer = layerRef.current;
    if (!host || !layer) return;

    const sizeLayer = (w, h) => {
      const s = Math.ceil(Math.hypot(w, h)) + 24;
      layer.style.width = `${s}px`;
      layer.style.height = `${s}px`;
      layer.style.top = `calc(50% - ${s / 2}px)`;
      layer.style.left = `calc(50% - ${s / 2}px)`;
    };
    sizeLayer(host.clientWidth, host.clientHeight);

    const ro = new ResizeObserver((entries) => {
      const cr = entries[0]?.contentRect;
      sizeLayer(cr?.width ?? host.clientWidth, cr?.height ?? host.clientHeight);
    });
    ro.observe(host);

    let rotation = 0;
    let raf = 0;
    let last = performance.now();

    const frame = (now) => {
      const dt = Math.min(0.05, Math.max(0, (now - last) / 1000));
      last = now;
      rotation = (rotation + 36 * dt) % 360;
      layer.style.transform = `rotate(${rotation}deg)`;
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`absolute inset-0 rounded-full overflow-hidden pointer-events-none ${className}`}
      style={{
        padding: "2px",
        WebkitMaskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
        WebkitMaskClip: "content-box, border-box",
        WebkitMaskComposite: "xor",
        maskImage: "linear-gradient(#fff 0 0), linear-gradient(#fff 0 0)",
        maskClip: "content-box, border-box",
        maskComposite: "exclude",
      }}
    >
      <div
        ref={layerRef}
        className="absolute"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(168,85,247,0) 0deg, rgba(168,85,247,0.1) 240deg, #a855f7 300deg, #ec4899 330deg, rgba(168,85,247,0) 360deg)",
        }}
      />
    </div>
  );
}