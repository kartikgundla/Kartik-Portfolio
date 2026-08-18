// import { Linkedin, Mail, MessageCircle, ArrowRight, Download, LayoutGrid, FolderOpen, Clock, Sparkles } from "lucide-react";
// import Button from "../components/Button";

// const stats = [
//   { icon: LayoutGrid, value: "24+", label: "Skills" },
//   { icon: FolderOpen, value: "4", label: "Projects" },
//   { icon: Clock, value: "2+", label: "Years Learning" },
//   { icon: Sparkles, value: "∞", label: "Curiosity" },
// ];

// export default function Hero() {
//   return (
//     <section id="home" className="section grid md:grid-cols-2 gap-12 items-center">
//       <div>
//         <span className="badge mb-4 inline-block">Computer Technology Student</span>

//         <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-2">Hi, I'm</h1>
//         <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
//           Kartik <span className="gradient-text">Gundla</span>
//         </h1>

//         <p className="text-muted mb-4">Diploma Student at Government Polytechnic, Solapur</p>

//         <p className="text-muted mb-8 leading-relaxed">
//           Passionate about coding, building real-world applications and learning
//           new technologies. Currently working on Kaarya-Siddhi — a Task
//           Management App for Indian Railways.
//         </p>

//         <div className="flex flex-wrap gap-4 mb-8">
//           <Button href="#projects" variant="primary">
//             View My Work <ArrowRight size={16} />
//           </Button>
//           <Button href="/resume.pdf" download variant="secondary">
//             Download CV <Download size={16} />
//           </Button>
//         </div>

//         <p className="text-sm text-muted mb-3">Connect with me</p>
//         <div className="flex gap-3 mb-10">
//           <a href="https://linkedin.com/in/kartikgundla" className="icon-circle" aria-label="LinkedIn">
//             <Linkedin size={16} />
//           </a>
//           <a href="https://github.com/kartikgundla" className="icon-circle" aria-label="GitHub">
//             <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
//               <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
//             </svg>
//           </a>
//           <a href="mailto:kartik.gundla@example.com" className="icon-circle" aria-label="Email">
//             <Mail size={16} />
//           </a>
//           <a href="https://wa.me/9193000XXXXX" className="icon-circle" aria-label="WhatsApp">
//             <MessageCircle size={16} />
//           </a>
//         </div>

//         <div className="grid grid-cols-4 gap-3">
//           {stats.map(({ icon: Icon, value, label }) => (
//             <div key={label} className="card p-3 text-center">
//               <Icon className="text-accent mx-auto mb-1" size={18} />
//               <p className="font-bold text-sm">{value}</p>
//               <p className="text-xs text-muted">{label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="flex justify-center">
//         <div className="relative w-72 h-72 md:w-80 md:h-80">
//           <div className="absolute inset-0 rounded-full border border-accent/30 animate-pulse" />
//           <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
//           <img
//             src="/profile.jpg"
//             alt="Kartik Gundla"
//             className="relative w-full h-full object-cover rounded-full border-2 border-accent/40 shadow-glow"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

import { Mail, MessageCircle, ArrowRight, Download } from "lucide-react";
import myPhoto from "../assets/images/myPhoto.png";
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
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
          <a href="/resume.pdf" download className="btn-secondary">
            Download CV <Download size={16} />
          </a>
        </div>

        <p className="text-sm text-muted mb-3">Connect with me</p>
        <div className="flex gap-3 mb-10">
          <a href="https://linkedin.com/in/kartikgundla" className="icon-circle" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z"/>
            </svg>
          </a>
          <a href="https://github.com/kartikgundla" className="icon-circle" aria-label="GitHub">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
          <a href="mailto:kartik.gundla@example.com" className="icon-circle" aria-label="Email">
            <Mail size={16} />
          </a>
          <a href="https://wa.me/9193000XXXXX" className="icon-circle" aria-label="WhatsApp">
            <MessageCircle size={16} />
          </a>
        </div>

        <div className="grid grid-cols-4 gap-3">
          <div className="card p-3 text-center">
            <p className="font-bold text-sm">24+</p>
            <p className="text-xs text-muted">Skills</p>
          </div>
          <div className="card p-3 text-center">
            <p className="font-bold text-sm">4</p>
            <p className="text-xs text-muted">Projects</p>
          </div>
          <div className="card p-3 text-center">
            <p className="font-bold text-sm">2+</p>
            <p className="text-xs text-muted">Years Learning</p>
          </div>
          <div className="card p-3 text-center">
            <p className="font-bold text-sm">∞</p>
            <p className="text-xs text-muted">Curiosity</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          <div className="absolute inset-0 rounded-full border border-accent/30 animate-pulse" />
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
          <img
            src={myPhoto}
            alt="Kartik Gundla"
            className="relative w-full h-full object-cover rounded-full border-2 border-accent/40 shadow-glow"
          />
        </div>
      </div>
    </section>
  );
}