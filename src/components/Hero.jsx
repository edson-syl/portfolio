import React from "react";
import ProgrammingSVG from "../assets/programming-hero.png";

export default function Hero() {
  return (
    <section id="home" className="w-full pt-28 pb-20 bg-linear-to-b from-white to-gray-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">

        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Olá, eu sou  
            <span className="bg-linear-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
              {" "}Edson Silva
            </span>
          </h1>

          <p className="mt-5 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl">
            Desenvolvedor Web especializado em criar aplicações modernas, rápidas e responsivas.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="#projects"
              className="px-6 py-3 rounded-xl font-semibold shadow-md bg-blue-600 hover:bg-blue-700 text-white transition-all"
            >
              Ver meus projetos
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-xl font-semibold border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all text-white"
            >
              Entrar em contato
            </a>
          </div>
        </div>

        {/* SVG */}
        <div className="flex-1 flex justify-center">
          <img
            src={ProgrammingSVG}
            alt="Programação"
            className="w-172 md:w-196 drop-shadow-xl"
          />
        </div>

      </div>
    </section>
  );
}
