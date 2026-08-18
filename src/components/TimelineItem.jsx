export default function TimelineItem({ school, detail, tag, period }) {
  return (
    <div className="relative card">
      <span className="absolute -left-[27px] top-6 w-3 h-3 rounded-full bg-accent" />
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <div>
          <h3 className="font-semibold">{school}</h3>
          <p className="text-sm text-muted">{detail}</p>
          <p className="text-xs text-muted mt-1">{period}</p>
        </div>
        {tag && <span className="badge">{tag}</span>}
      </div>
    </div>
  );
}
