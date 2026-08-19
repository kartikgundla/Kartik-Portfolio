import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Education", id: "education" },
  { name: "Experience", id: "experience" },
  { name: "Skills", id: "skills" },
  { name: "Achievements", id: "achievements" },
  { name: "Projects", id: "projects" },
  { name: "Goals", id: "goals" },
  { name: "Contact", id: "contact" },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="w-full bg-bg border-b border-white/10 sticky top-0 z-50 px-6 lg:px-8 py-4 md:py-6">
      {/* Container aligned with page content */}
      <div className="max-w-7xl mx-auto relative flex items-center justify-between">
        
        {/* Name aligned to the left edge of the content container */}
        <div className="text-white font-bold text-base lg:text-xl tracking-wide whitespace-nowrap">
          Kartik Gundla
        </div>

        {/* Links positioned toward the right/center */}
        <ul className="hidden lg:flex items-center gap-5 xl:gap-7 ml-auto">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-sm font-semibold text-gray-300 hover:text-accent2 transition-colors whitespace-nowrap"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:!hidden icon-circle w-9 h-9 ml-auto"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <ul className="absolute top-full left-0 w-full bg-bg border-b border-white/10 flex flex-col items-center gap-5 py-6 lg:hidden max-h-[70vh] overflow-y-auto">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => scrollToSection(link.id)}
                className="text-base font-semibold text-gray-300 hover:text-accent2 transition-colors"
              >
                {link.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;