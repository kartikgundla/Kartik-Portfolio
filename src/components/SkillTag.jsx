export default function SkillTag({ label }) {
  return (
    <span className="px-4 py-2 rounded-lg bg-card border border-cardBorder text-sm hover:border-accent/50 transition-colors">
      {label}
    </span>
  );
}
