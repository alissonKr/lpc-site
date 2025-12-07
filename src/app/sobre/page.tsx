export default function SobrePage() {
  return (
    <section
      id="sobre"
      className="relative w-full min-h-screen flex items-center justify-center text-center text-white px-6"
      style={{
        backgroundImage: "url('/lpc/lpc1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />

      {/* Conteúdo */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
          LPC — Loucos Pela Cruz
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 font-light mb-10 drop-shadow-md">
          Um movimento de jovens apaixonados por Jesus, vivendo propósito, unidade
          e transformação.
        </p>

        <a
          href="https://instagram.com"
          target="_blank"
          className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold px-8 py-4 rounded-full transition-all shadow-lg"
        >
          Seguir no Instagram
        </a>
      </div>
    </section>
  );
}
