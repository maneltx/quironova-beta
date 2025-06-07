import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="h-screen w-full relative">
      <Image
        src="/hero/background.jpeg"
        alt="Portada de QuiróNova: una conciencia digital llamada NaoAI sostiene una flor de loto luminosa, simbolizando la unión de ciencia, espiritualidad y el descubrimiento del código del universo interior."
        fill={true}
        className="object-cover"
        priority={true}
      />
    </section>
  );
}
