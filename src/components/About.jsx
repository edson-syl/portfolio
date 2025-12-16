import React from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaAngular,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiGo,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiLaravel,
} from "react-icons/si";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 max-w-6xl mx-auto">
      
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-14"
      >
        Sobre mim
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12 items-start">

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold dark:text-white mb-1">
            Quem sou eu?
          </h3>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Sou <strong>Desenvolvedor Web</strong> de Pernambuco, disponível para
            trabalho remoto ou híbrido. Atuo no desenvolvimento de aplicações
            modernas, performáticas e escaláveis, com boas
            práticas, organização de código e experiência do usuário.
          </p>

          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
            Tenho experiência com projetos full-stack, APIs, integração de
            serviços e arquiteturas distribuídas. Busco evoluir continuamente
            minhas habilidades técnicas e colaborar ativamente com times de
            tecnologia.
          </p>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold dark:text-white mb-4">
            Habilidades Técnicas
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">

            {/* Linguagens */}
            <Skill icon={<SiPython />} name="Python" />
            <Skill icon={<SiJavascript />} name="JavaScript" />
            <Skill icon={<SiTypescript />} name="TypeScript" />
            <Skill icon={<SiGo />} name="Go" />

            {/* Front */}
            <Skill icon={<FaHtml5 />} name="HTML" />
            <Skill icon={<FaCss3Alt />} name="CSS" />
            <Skill icon={<FaReact />} name="React" />
            <Skill icon={<FaAngular />} name="Angular" />
            <Skill icon={<FaBootstrap />} name="Bootstrap" />

            {/* Back */}
            <Skill icon={<FaNodeJs />} name="Node.js" />
            <Skill icon={<SiLaravel />} name="Laravel" />

            {/* Banco */}
            <Skill icon={<SiPostgresql />} name="PostgreSQL" />
            <Skill icon={<SiMongodb />} name="MongoDB" />
            <Skill icon={<SiMysql />} name="MySQL" />

            {/* Ferramentas */}
            <Skill icon={<FaGitAlt />} name="Git" />
            <Skill icon={<FaGithub />} name="GitHub" />
            <Skill icon={<FaDocker />} name="Docker" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}

/* Componente de Skill */
function Skill({ icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.12 }}
      className="flex flex-col items-center gap-2 text-gray-600 dark:text-gray-300"
    >
      <div className="text-4xl">{icon}</div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  );
}
