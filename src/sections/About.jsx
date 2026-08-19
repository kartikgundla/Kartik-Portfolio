import { GraduationCap, Code2, Briefcase, Award } from "lucide-react";
import myPhoto from "../assets/images/myPhoto.png";
import Reveal from "../components/Reveal";
const stats = [
  { icon: GraduationCap, value: "2nd Year", label: "Diploma" },
  { icon: Code2, value: "4+", label: "Projects" },
  { icon: Briefcase, value: "1+", label: "Internship" },
  { icon: Award, value: "4+", label: "Achievements" },
];

export default function About() {
  return (
    <section id="about" className="section">
      {/* min-h-screen flex flex-col justify-center"> */}
      <h2 className="section-title text-center md:text-left">About Me</h2>

      <div className="grid md:grid-cols-[0.9fr_1.1fr] gap-16 items-center flex-1">
        <Reveal type="slideLeft">

          <div className="flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-accent/30" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/40 shadow-glow">
                <img src={myPhoto} alt="Kartik Gundla" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal type="slideRight" delay={0.15}>
        <div>
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Code with Purpose, Build for Impact
          </h3>

          <p className="text-muted leading-relaxed mb-4 text-lg">
            Motivated and detail-oriented Computer Technology student with a
            strong foundation in React, Python, and modern web development.
            Passionate about building real-world applications and solving
            problems through code.
          </p>

          <p className="text-muted leading-relaxed mb-10 text-lg">
            I enjoy turning ideas into working products — currently building
            Kaarya-Siddhi, a Task Management App for Indian Railways. My
            focus is on writing clean, efficient code and growing through
            hands-on, real-world experience.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map(({ icon: Icon, value, label }) => (
              <div key={label} className="card text-center py-6">
                <Icon className="text-accent2 mx-auto mb-3" size={26} />
                <p className="text-2xl font-bold text-white">{value}</p>
                <p className="text-xs text-muted mt-1">{label}</p>
              </div>
            ))}
          </div>

        </div>
      </Reveal>
    </div>
      
    </section >
  );
}