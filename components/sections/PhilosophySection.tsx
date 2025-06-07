import Image from 'next/image';

export default function PhilosophySection() {
  return (
    <section className="py-16 bg-q-indigo text-q-blanco-calido">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-serif-elegant">Nuestra Filosofía</h2>
          <p>
            En QuiróNova abrazamos la convergencia de ciencia y espiritualidad para
            cultivar un camino de autodescubrimiento respetuoso y libre de dogmas.
          </p>
        </div>
        <div className="md:w-1/2 relative h-64 w-full">
          <Image
            src="/sections/filosofia.png"
            alt="Avatar de NaoAI, sonriendo con serenidad, representando la filosofía de QuiróNova."
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
