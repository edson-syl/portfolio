import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 max-w-6xl mx-auto">
      {/* Título */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-center dark:text-white mb-6"
      >
        Contato
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
        className="text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-14"
      >
        Tem uma oportunidade, projeto ou quer trocar uma ideia? Fique à vontade
        para entrar em contato comigo.
      </motion.p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        <ContactCard
          icon={<FaEnvelope />}
          title="Email"
          description="Clique para copiar meu email"
          email="contato.edsonsb@gmail.com"
          label="Copiar email"
        />

        <ContactCard
          icon={<FaLinkedin />}
          title="LinkedIn"
          description="Conecte-se comigo"
          link="https://www.linkedin.com/in/edsonsilvabat/"
          label="Acessar LinkedIn"
        />

        <ContactCard
          icon={<FaGithub />}
          title="GitHub"
          description="Veja meus projetos e códigos"
          link="https://github.com/edson-syl"
          label="Acessar GitHub"
        />
      </div>

      {/* CTA final */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="mt-16 flex justify-center"
      >
        <motion.button
          onClick={() =>
            window.open(
              "https://api.whatsapp.com/send?phone=5581992281271&text=Ol%C3%A1%2C%20Edson!%0AVim%20pelo%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20falar%20com%20voc%C3%AA%20sobre%20um%20projeto%20ou%20oportunidade.",
              "_blank"
            )
          }
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold shadow-lg hover:shadow-xl transition cursor-pointer"
        >
          Vamos conversar
        </motion.button>
      </motion.div>
    </section>
  );
}

/* Card de contato */

function ContactCard({ icon, title, description, email, link, label }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error("Erro ao copiar email", err);
    }
  };

  // 🔀 Decide se é botão (copiar) ou link (navegar)
  const Component = email ? motion.button : motion.a;

  const componentProps = email
    ? { onClick: handleCopy }
    : {
        href: link,
        target: "_blank",
        rel: "noopener noreferrer",
      };

  return (
    <Component
      {...componentProps}
      whileHover={{ y: -8, scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition flex flex-col items-center text-center w-full cursor-pointer"
    >
      <div className="text-4xl text-blue-600 mb-4">{icon}</div>

      <h3 className="text-xl font-bold dark:text-white mb-2">{title}</h3>

      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {copied ? "Email copiado!" : description}
      </p>

      <span className="font-semibold text-blue-600">
        {copied ? email : label}
      </span>
    </Component>
  );
}
