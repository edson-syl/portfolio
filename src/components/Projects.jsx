import React from "react";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <section id="projects" className="py-18 px-4 max-w-5xl mx-auto">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold dark:text-white text-center mb-14"
      >
        Projetos
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Projeto Sneax */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
        >
          {/* Imagem */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="h-48 rounded-xl overflow-hidden mb-5"
          >
            <img
              src="https://sneax-sneackers.netlify.app/assets/airmax_ultra04.png"
              alt="Sneax Sneaker Project"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <h3 className="text-xl font-bold dark:text-white">Sneax Sneakers</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-5">
            Landing page de e-commerce de tênis desenvolvida com foco em design
            moderno, responsividade e boa experiência do usuário.
          </p>

          <motion.a
            href="https://sneax-sneackers.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Ver projeto
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
        >
          {/* Imagem */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="h-48 rounded-xl overflow-hidden mb-5"
          >
            <img
              src="https://finans-project-web.netlify.app/images/facil.png"
              alt="Finans"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <h3 className="text-xl font-bold dark:text-white">Finans</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-5">
            Landing page de plataforma financeira desenvolvida com foco em
            clareza, usabilidade e conversão, apresentando recursos de controle
            financeiro, categorização de gastos, alertas inteligentes e
            visualização por gráficos.
          </p>

          <motion.a
            href="https://sneax-sneackers.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Ver projeto
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
        >
          {/* Imagem */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4 }}
            className="h-48 rounded-xl overflow-hidden mb-5"
          >
            <img
              src="src\assets\nuvem-de-sol.png"
              alt="Skify"
              className="w-full h-full object-contain"
            />
          </motion.div>

          <h3 className="text-xl font-bold dark:text-white">Skify</h3>

          <p className="text-gray-600 dark:text-gray-300 mt-2 mb-5">
            Sistema full-stack para coleta, processamento e visualização de
            dados climáticos em tempo real, desenvolvido com arquitetura
            distribuída, foco em escalabilidade, automação e análise inteligente
            de dados.
          </p>

          <motion.a
            href="https://github.com/edson-syl/desafio-gdash-2025-02/tree/edson-silva"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition"
          >
            Ver projeto
          </motion.a>
        </motion.div>

        {/* Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-all flex items-center justify-center"
        >
          <span className="text-gray-400 dark:text-gray-500 text-lg">
            Próximo projeto em breve 🚀
          </span>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <motion.a
          href="https://github.com/edson-syl/projetos"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 rounded-xl bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold shadow-lg hover:shadow-xl transition"
        >
          Ver mais projetos no GitHub
        </motion.a>
      </motion.div>
    </section>
  );
}
