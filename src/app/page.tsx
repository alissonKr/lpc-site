"use client";

import { motion } from "framer-motion";
import Eventos from "./components/Eventos";
import Sobre from "./components/Sobre";
import GC from "./components/GC";

export default function Home() {
  return (
    <main className="w-full">

      {/* ==== HERO ==== */}
      <section
        className="relative w-full h-screen flex flex-col items-center text-white overflow-hidden"
        style={{
          backgroundImage: "url('/lpc/lpc3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/90" />

        <motion.p
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-lg md:text-3xl max-w-4xl mt-10 px-6 text-center leading-relaxed drop-shadow-[0_3px_4px_rgba(0,0,0,0.8)]"
        >
          A LPC é um movimento de jovens LOUCOS PELA CRUZ e apaixonados por Jesus,
          espalhando a mensagem do sacrifício de Cristo
        </motion.p>

        <motion.a
          href="https://instagram.com/somos_lpc"
          target="_blank"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-20 bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-10 py-4 rounded-full text-lg shadow-xl animate-pulse transition hover:scale-105"
        >
          Fale conosco pelo Instagram
        </motion.a>
      </section>

      {/* IMPORTA OS MÓDULOS */}
      <Eventos />
      <Sobre />
      <GC/>

      <footer className="py-10 bg-black text-center">
        <p className="text-orange-400 font-semibold tracking-wide text-lg">
          @somos_lpc
        </p>
      </footer>

    </main>
  );
}
