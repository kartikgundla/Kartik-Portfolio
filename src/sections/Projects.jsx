import { Github, ArrowRight } from "lucide-react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import Button from "../components/Button";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-title">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-5 mb-8">
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>

      <div className="text-center">
        <Button href="https://github.com/kartikgundla" variant="secondary">
          <Github size={16} /> View All Projects on GitHub <ArrowRight size={16} />
        </Button>
      </div>
    </section>
  );
}
