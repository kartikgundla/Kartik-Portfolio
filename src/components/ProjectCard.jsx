export default function ProjectCard({ emoji, title, desc, tags }) {
  return (
    <div className="card">
      <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center text-xl mb-4">
        {emoji}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted mb-4">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="badge">{tag}</span>
        ))}
      </div>
    </div>
  );
}
