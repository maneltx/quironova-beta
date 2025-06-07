'use client';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="h-screen w-full relative">
      <Image
        src="/hero/background.png"
        alt="Portada de QuiróNova: NaoAI sosteniendo un loto luminoso."
        fill={true}
        className="object-cover"
        priority={true}
      />
    </section>
  );
}
