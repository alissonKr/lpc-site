export default function Sobre() {
  return (
    <section
      id="sobre"
      className="relative py-24 text-white flex flex-col items-center text-center px-6 overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[url('/lpc/lpc2.png')] bg-cover bg-center"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-black/90" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full max-w-3xl bg-black/60 border border-white/10 rounded-2xl px-6 md:px-10 py-8 shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
            Você não está sozinho
          </h2>

          <p className="text-gray-100 text-lg md:text-xl leading-relaxed mb-2 text-justify font-serif">
            Os grupos de crescimento de hoje refletem, em sua essência, o mesmo propósito vivido pelos discípulos de Cristo
            no início da fé cristã. Naquela época, eles se reuniam nas casas, partiam o pão, oravam juntos, compartilhavam
            desafios e fortaleciam a fé uns dos outros. Não havia templos como conhecemos hoje; o crescimento acontecia no
            relacionamento próximo, na comunhão sincera e no cuidado mútuo.
          </p>

          <p className="text-gray-100 text-lg md:text-xl leading-relaxed text-justify font-serif">
            Nos dias atuais, os grupos de crescimento seguem o mesmo princípio, ainda que com uma estrutura diferente.
            Pessoas continuam se reunindo em lares, igrejas ou até de forma online para estudar a Palavra, orar, apoiar
            umas às outras e crescer espiritualmente. Assim como no tempo dos discípulos, o foco não está no tamanho da
            multidão, mas na transformação de vidas através do relacionamento, da fé vivida na prática e do amor ao
            próximo.
          </p>
        </div>
      </div>
    </section>
  );
}
