export default function GC() {
  return (
    <section
      id="GC"
      className="py-20 bg-black text-white flex flex-col items-center px-6"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10">Grupos de Crescimento</h2>

      <div className="w-full max-w-5xl space-y-12">
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">GC Fortaleza</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/lpc/fortaleza1.jpg" className="rounded-xl shadow-lg" />
            <img src="/lpc/fortaleza2.jpg" className="rounded-xl shadow-lg" />
            <img src="/lpc/fortaleza3.jpg" className="rounded-xl shadow-lg" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">GC Cultura do Reino</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img src="/lpc/cultura1.jpg" className="rounded-xl shadow-lg" />
            <img src="/lpc/cultura2.jpg" className="rounded-xl shadow-lg" />
            <img src="/lpc/cultura3.jpg" className="rounded-xl shadow-lg" />
          </div>
        </div>
      </div>
    </section>
  );
}
