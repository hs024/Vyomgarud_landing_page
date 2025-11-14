import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { to: "#about", label: "About" },
    { to: "#capabilities", label: "Capabilities" },
    { to: "#highlights", label: "Highlights" }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[rgba(11,15,18,0.6)] backdrop-blur-md border-b border-white/6">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hero" className="text-xl font-bold tracking-wide text-white">
          VyomGarud
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="text-sm hover:text-vyomOrange transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-4 py-2 rounded-md bg-vyomOrange text-black text-sm font-semibold"
          >
            Contact
          </a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="menu"
            className="p-2"
          >
            {open ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6">
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.to} href={l.to} className="py-2 text-base">
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="py-2 px-4 rounded-md bg-vyomOrange text-black w-max"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
