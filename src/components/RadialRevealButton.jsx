import { useRef, useState, useLayoutEffect } from "react";
import { useAnimate, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function RadialRevealButton({ label, href, onClick }) {
  const [scope, animate] = useAnimate();
  const overlayRef = useRef(null);
  const clipCtrl = useRef(null);
  const reducedMotion = useReducedMotion();
  const clip = useRef({ r: 0, x: 100, y: 100, max: 160 });

  const applyClip = () => {
    const el = overlayRef.current;
    if (!el) return;
    const { r, x, y } = clip.current;
    el.style.clipPath = `circle(${r}% at ${x}% ${y}%)`;
  };

  const anchorTo = (e) => {
    const el = overlayRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (!r.width || !r.height) return;
    const px = e.clientX - r.left;
    const py = e.clientY - r.top;
    const unit = Math.hypot(r.width, r.height) / Math.SQRT2;
    const far = Math.max(
      Math.hypot(px, py),
      Math.hypot(r.width - px, py),
      Math.hypot(px, r.height - py),
      Math.hypot(r.width - px, r.height - py)
    );
    clip.current.x = (px / r.width) * 100;
    clip.current.y = (py / r.height) * 100;
    clip.current.max = (far / unit) * 100 + 2;
  };

  const growTo = (to) => {
    clipCtrl.current?.stop();
    if (reducedMotion) {
      clip.current.r = to;
      applyClip();
      return;
    }
    clipCtrl.current = animate(clip.current.r, to, {
      type: "tween",
      ease: "easeInOut",
      duration: 0.45,
      onUpdate: (v) => {
        clip.current.r = v;
        applyClip();
      },
    });
  };

  const onEnter = (e) => {
    anchorTo(e);
    applyClip();
    growTo(clip.current.max);
  };

  const onLeave = (e) => {
    if (clip.current.r >= clip.current.max - 0.5) {
      anchorTo(e);
      clip.current.r = clip.current.max;
      applyClip();
    }
    growTo(0);
  };

  useLayoutEffect(() => {
    applyClip();
    return () => clipCtrl.current?.stop();
  }, []);

  const Tag = href ? "a" : "button";

  return (
    <Tag
      ref={scope}
      href={href}
      onClick={onClick}
      className="relative inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium overflow-hidden border border-accent"
      onPointerEnter={onEnter}
      onPointerLeave={onLeave}
      style={{ backgroundColor: "transparent" }}
    >
      <span className="relative z-0 flex items-center gap-2 text-accent2">
        {label} <ArrowRight size={16} />
      </span>

      <span
        ref={overlayRef}
        aria-hidden
        className="absolute inset-0 flex items-center justify-center gap-2 bg-accent text-white pointer-events-none"
        style={{ clipPath: "circle(0% at 100% 100%)" }}
      >
        {label} <ArrowRight size={16} />
      </span>
    </Tag>
  );
}