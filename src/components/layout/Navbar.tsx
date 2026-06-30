import { NavLink } from "react-router-dom";
import { navLinks } from "../../data/navLinks";

export function Navbar() {
  return (
    <nav className="flex h-14 items-center justify-between bg-neutral-950 px-6 text-sm text-white">
      <NavLink
        to="/"
        className="flex h-16 w-16 -translate-y-2 items-center justify-center rounded-full bg-neutral-900 shadow-lg"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-pink-500 text-2xl font-bold">
          C
        </span>
      </NavLink>

      <div className="flex gap-6 font-mono text-xs tracking-wide">
        {navLinks.map((link) => (
          <NavLink
            key={link.href}
            to={link.href}
            className={({ isActive }) =>
              isActive
                ? "text-blue-400"
                : "text-neutral-300 transition hover:text-blue-400"
            }
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}