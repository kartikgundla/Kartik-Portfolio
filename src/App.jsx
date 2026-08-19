import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Achievements from "./sections/Achievements";
import Projects from "./sections/Projects";
import Goals from "./sections/Goals";
import Contact from "./sections/Contact";
import CustomCursor from "./components/CustomCursor";

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Achievements />
      <Projects />
      <Goals />
      <Contact />
      <Footer />
    </div>
  );
}