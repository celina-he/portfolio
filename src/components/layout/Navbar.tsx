import { useState } from "react";
import { NavLink } from "react-router-dom";

import { navLinks } from "../../data/navLinks";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#171719] text-white">
      <div className="flex min-h-16 items-center justify-between px-6 md:px-10">
        {/* Placeholder logo */}
        <NavLink
          to="/"
          className="font-mono text-md font-semibold tracking-wide"
        >
          Celina He
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              className={({ isActive }) =>
                [
                  "font-mono text-md lowercase transition-colors",
                  isActive
                    ? "text-[#4278ff]"
                    : "text-neutral-300 hover:text-white",
                ].join(" ")
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setIsOpen((previous) => !previous)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
          <span className="h-0.5 w-6 bg-white" />
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-neutral-800 bg-[#171719] md:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-6 py-4 font-mono text-sm text-neutral-300 hover:bg-neutral-900 hover:text-white"
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}