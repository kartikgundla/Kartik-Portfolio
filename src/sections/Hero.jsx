import { Linkedin, Github, Mail, MessageCircle, ArrowRight, Download, LayoutGrid, FolderOpen, Clock, Sparkles } from "lucide-react";
import Button from "../components/Button";

const stats = [
  { icon: LayoutGrid, value: "24+", label: "Skills" },
  { icon: FolderOpen, value: "4", label: "Projects" },
  { icon: Clock, value: "2+", label: "Years Learning" },
  { icon: Sparkles, value: "∞", label: "Curiosity" },
];

export default function Hero() {
  return (
    <section id="home" className="section grid md:grid-cols-2 gap-12 items-center">
      <div>
        <span className="badge mb-4 inline-block">Computer Technology Student</span>

        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Hi, I'm</h1>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Kartik <span className="gradient-text">Gundla</span>
        </h1>

        <p className="text-muted mb-4">Diploma Student at Government Polytechnic, Solapur</p>

        <p className="text-muted mb-8 leading-relaxed">
          Passionate about coding, building real-world applications and learning
          new technologies. Currently working on Kaarya-Siddhi — a Task
          Management App for Indian Railways.
        </p>

        <div className="flex flex-wrap gap-4 mb-8">
          <Button href="#projects" variant="primary">
            View My Work <ArrowRight size={16} />
          </Button>
          <Button href="/resume.pdf" download variant="secondary">
            Download CV <Download size={16} />
          </Button>
        </div>

        <p className="text-sm text-muted mb-3">Connect with me</p>
        <div className="flex gap-3 mb-10">
          <a href="https://linkedin.com/in/kartikgundla" className="icon-circle" aria-label="LinkedIn">
            <Linkedin size={16} />
          </a>
          <a href="https://github.com/kartikgundla" className="icon-circle" aria-label="GitHub">
            <Github size={16} />
          </a>
          <a href="mailto:kartik.gundla@example.com" className="icon-circle" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href="https://wa.me/9193000XXXXX" className="icon-circle" aria-label="WhatsApp">
            <MessageCircle size={16} />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-3">
          {stats.map(({ icon: Icon, value, label }) => (
            <div key={label} className="card p-3 text-center">
              <Icon className="text-accent mx-auto mb-1" size={18} />
              <p className="font-bold text-sm">{value}</p>
              <p className="text-xs text-muted">{label}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full border border-accent/30 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
          <img
            src="/profile.jpg"
            alt="Kartik Gundla"
            className="relative w-full h-full object-cover rounded-full border-2 border-accent/40 shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}
