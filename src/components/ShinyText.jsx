export default function ShinyText({
  text,
  textColor = "#a855f7",
  shineColor = "#ec4899",
  speed = 2.5,
  className = "",
}) {
  return (
    <span className={`relative inline-block ${className}`}>
      <style>{`
        @keyframes shinySweep {
          0% { -webkit-mask-position: 200%; mask-position: 200%; }
          100% { -webkit-mask-position: -100%; mask-position: -100%; }
        }
      `}</style>

      {/* Base layer - your normal text color */}
      <span style={{ color: textColor }}>{text}</span>

      {/* Shine layer - bright sweep masked over the same text */}
      <span
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          color: shineColor,
          pointerEvents: "none",
          WebkitMaskImage:
            "linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",
          maskImage:
            "linear-gradient(to right, transparent 30%, #000 50%, transparent 70%)",
          WebkitMaskSize: "150% auto",
          maskSize: "150% auto",
          animation: `shinySweep ${speed}s ease-in-out infinite`,
        }}
      >
        {text}
      </span>
    </span>
  );
}