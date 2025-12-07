export default function Eventos() {
  return (
    <section
      id="eventos"
      className="py-20 bg-black text-white flex flex-col items-center px-4"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">
        Próximo Encontro
      </h2>

      <div className="w-full max-w-2xl bg-black/60 border border-white/20 rounded-xl p-8 shadow-xl backdrop-blur-md">
        <div className="flex items-center gap-3 text-yellow-400 text-xl font-semibold mb-4">
          <span>🔥</span>
          <span>Culto Jovem — Sábado às 20h</span>
        </div>

        <p className="text-gray-300 mb-2">📍 Vida Church — Canoas / RS</p>
        <p className="text-gray-300">Av. A.J. Renner, 935 - Estância Velha, Canoas - RS, 92030-010</p>

        <a
          href="https://maps.app.goo.gl/VXhzqZGpTjLtfh3j8"
          target="_blank"
          className="inline-block mt-6 text-yellow-400 hover:text-yellow-300 transition font-medium"
        >
          Ver no mapa →
        </a>
      </div>
    </section>
  );
}
