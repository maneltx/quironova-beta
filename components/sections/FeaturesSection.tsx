import Image from 'next/image';

const features = [
  {
    title: 'Quiromancia',
    description: 'Descubre el mapa estelar de tu alma en las líneas de tu mano.',
    image: '/sections/quiromancia.png',
  },
  {
    title: 'Tarot',
    description: 'Dialoga con los arquetipos del universo a través del lenguaje simbólico de las cartas.',
    image: '/sections/tarot.png',
  },
  {
    title: 'Astrología',
    description: 'Sincroniza tu ritmo interior con las danzas cósmicas de los planetas y las estrellas.',
    image: '/sections/astrologia.png',
  },
  {
    title: 'Alquimia',
    description: 'Fusiona la sabiduría natural y la intención para transmutar tu bienestar.',
    image: '/sections/alquimia.png',
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 bg-q-violeta text-q-blanco-calido">
      <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4">
        {features.map(feature => (
          <div
            key={feature.title}
            className="bg-q-indigo rounded-lg overflow-hidden shadow-lg flex flex-col"
          >
            <div className="relative h-48 w-full">
              <Image
                src={feature.image}
                alt={`Ilustración de ${feature.title}`}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-serif-elegant text-xl mb-2">{feature.title}</h3>
              <p className="text-sm flex-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
