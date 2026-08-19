import Reveal from "../components/Reveal";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
import Typewriter from "typewriter-effect";
import myPhoto from "../assets/images/myPhoto.png";

const nameVariant = {
  hidden: { opacity: 0, y: 0, scale: 1.4 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: "easeOut" } },
});

const photoVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.9, delay: 0.4, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="home" className="section grid md:grid-cols-2 gap-12 items-center">
      <div>
        <motion.span
          initial="hidden"
          animate="visible"
          variants={fadeUp(0)}
          className="badge mb-4 inline-block"
        >
          Computer Technology Student
        </motion.span>

        <motion.h1
          initial="hidden"
          animate="visible"
          variants={nameVariant}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight"
        >
          Hi, I'm <span className="text-accent2">Kartik Gundla</span>
        </motion.h1>

        <motion.h2
          initial="hidden"
          animate="visible"
          variants={fadeUp(0.3)}
          className="text-2xl text-gray-300 mb-4 h-10"
        >
          <Typewriter
            options={{
              strings: ["Diploma Student", "React Developer", "Python Enthusiast", "Problem Solver"],
              autoStart: true,
              loop: true,
              delay: 60,
            }}
          />
        </motion.h2>

        <motion.p initial="hidden" animate="visible" variants={fadeUp(0.4)} className="text-muted mb-4">
          Diploma Student at Government Polytechnic, Solapur
        </motion.p>

        <motion.p initial="hidden" animate="visible" variants={fadeUp(0.5)} className="text-muted mb-8 leading-relaxed">
          Passionate about coding, building real-world applications and learning
          new technologies. Currently working on Kaarya-Siddhi — a Task
          Management App for Indian Railways.
        </motion.p>

        <motion.div initial="hidden" animate="visible" variants={fadeUp(0.6)} className="flex flex-wrap gap-4 mb-8">
          <a href="#projects" className="btn-primary">
            View My Work <ArrowRight size={16} />
          </a>
        </motion.div>

        <motion.div initial="hidden" animate="visible" variants={fadeUp(0.7)}>
          <p className="text-sm text-muted mb-3">Connect with me</p>
          <div className="flex gap-3 mb-10">
            <a
              href="https://linkedin.com/in/kartik-gundla"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle"
              aria-label="LinkedIn"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href="https://github.com/kartikgundla"
              target="_blank"
              rel="noopener noreferrer"
              className="icon-circle"
              aria-label="GitHub"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6.01 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.81 1.1.81 2.22 0 1.6-.01 2.89-.01 3.29 0 .32.21.7.83.58C20.56 21.79 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href="mailto:kartik.gundla@example.com" className="icon-circle" aria-label="Email">
              <Mail size={16} />
            </a>
          </div>
        </motion.div>

        {/* <motion.div initial="hidden" animate="visible" variants={fadeUp(0.8)} className="grid grid-cols-4 gap-3">
          <div className="card text-center"><p className="text-2xl font-bold text-white">24+</p><p className="text-sm text-muted">Skills</p></div>
          <div className="card text-center"><p className="text-2xl font-bold text-white">4</p><p className="text-sm text-muted">Projects</p></div>
          <div className="card text-center"><p className="text-2xl font-bold text-white">2+</p><p className="text-sm text-muted">Years Learning</p></div>
          <div className="card text-center"><p className="text-2xl font-bold text-white">∞</p><p className="text-sm text-muted">Curiosity</p></div>
        </motion.div> */}
      </div >

      <motion.div initial="hidden" animate="visible" variants={photoVariant} className="flex justify-center items-center">
        <div className="group relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem]">
          <div className="absolute inset-0 rounded-full border-2 border-accent/30 scale-110" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-transparent blur-2xl" />
          <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-accent/40 shadow-glow">
            <img src={myPhoto} alt="Kartik Gundla" className="w-full h-full object-cover" />
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </motion.div>
    </section >
  );
}