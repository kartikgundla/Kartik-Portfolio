import { NavLink } from "react-router-dom";

function Navbar() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Goals", path: "/goals" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-[#0D0B14] border-b border-white/10">
      <div className="text-white font-bold text-lg tracking-wide">KG</div>

      <ul className="flex gap-6">
        {navLinks.map((link) => (
          <li key={link.path}>
            <NavLink
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive
                    ? "text-purple-400"
                    : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <button className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-gray-300 hover:text-white">
        ☀
      </button>
    </nav>
  );
}

export default Navbar;