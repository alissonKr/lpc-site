export default function GaleriaPage() {
  return (
    <div className="min-h-screen bg-black text-white pt-28 px-6">
      <h1 className="text-4xl font-bold mb-10 text-center">
        GC de Fotos
      </h1>

      {/* LOGO LPC */}
      <div className="flex justify-center mb-10">
        <img
          src="/lpc/logoLPC.png"
          alt="Logo Loucos Pela Cruz"
          className="w-48 h-auto object-contain"
        />
      </div>

      {/* GRID DAS FOTOS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* FOTO 1 */}
        <img
          src="/lpc/lpc1.jpg"
          alt="LPC Foto 1"
          className="w-full h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition"
        />

        {/* FOTO 2 */}
        <img
          src="/lpc/lpc2.jpg"
          alt="LPC Foto 2"
          className="w-full h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition"
        />

        {/* FOTO 3 */}
        <img
          src="/lpc/lpc3.jpg"
          alt="LPC Foto 3"
          className="w-full h-72 object-cover rounded-lg shadow-lg hover:scale-105 transition"
        />

      </div>
    </div>
  );
}
