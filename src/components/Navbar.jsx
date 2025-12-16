import React, { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed w-full top-0 z-50 backdrop-blur-lg bg-white/70 dark:bg-gray-900/70 shadow-sm border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <h1 className="text-2xl font-extrabold tracking-tight bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Edson Silva
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-gray-700 dark:text-gray-200 font-medium">
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#home">Home</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#projects">Projetos</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#about">Sobre</a>
          <a className="hover:text-blue-600 dark:hover:text-blue-400 transition" href="#contact">Contato</a>
        </div>

        {/* Mobile button */}
        <button 
          onClick={() => setOpen(!open)}
          className="md:hidden text-3xl text-gray-800 dark:text-gray-200"
        >
          ☰
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden flex flex-col gap-6 py-6 px-6 text-white bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-300/20">
          <a onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition" href="#home">Home</a>
          <a onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition" href="#projects">Projetos</a>
          <a onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition" href="#about">Sobre</a>
          <a onClick={() => setOpen(false)} className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition" href="#contact">Contato</a>
        </div>
      )}
    </header>
  );
}
