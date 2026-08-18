export default function Footer() {
  return (
    <footer className="text-center text-xs text-muted py-8 border-t border-cardBorder">
      © {new Date().getFullYear()} Kartik Gundla. Built with React & Tailwind CSS.
    </footer>
  );
}