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
    <nav className="w-full flex items-center justify-between px-4 md:px-16 py-4 md:py-6 bg-bg border-b border-white/10 sticky top-0 z-50">
      <div className="text-white font-bold text-lg md:text-xl tracking-wide">KG</div>

      <ul className="hidden lg:flex items-center gap-5 xl:gap-7">
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

      <div className="flex items-center gap-3">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden icon-circle w-9 h-9"
        >
          {menuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

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