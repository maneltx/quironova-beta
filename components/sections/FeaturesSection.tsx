import Image from 'next/image';

const features = [
  { title: "Quiromancia", description: "Descubre el mapa estelar de tu alma en las líneas de tu mano.", image: "/sections/quiromancia.png", alt: "Ilustración artística sobre la Quiromancia" },
  { title: "Tarot", description: "Dialoga con los arquetipos del universo a través del lenguaje simbólico de las cartas.", image: "/sections/tarot.png", alt: "Ilustración artística sobre el Tarot" },
  { title: "Astrología", description: "Sincroniza tu ritmo interior con las danzas cósmicas de los planetas y las estrellas.", image: "/sections/astrologia.jpeg", alt: "Ilustración artística sobre la Astrología" },
  { title: "Alquimia", description: "Fusiona la sabiduría natural y la intención para transmutar tu bienestar.", image: "/sections/alquimia.jpeg", alt: "Ilustración artística sobre la Alquimia" }
];

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 bg-q-indigo">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif-elegant mb-12 text-q-lila">Explora los Códigos del Ser</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="bg-q-violeta/50 rounded-lg p-6 flex flex-col items-center">
              <div className="w-full h-48 relative mb-4 rounded-md overflow-hidden">
                <Image src={feature.image} alt={feature.alt} fill className="object-cover" />
              </div>
              <h3 className="text-2xl font-serif-elegant mb-2 text-q-blanco-calido">{feature.title}</h3>
              <p className="text-q-gris font-sans-clean">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
