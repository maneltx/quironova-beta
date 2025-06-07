import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-q-violeta/20 p-8 mt-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <Image src="/brand/logo.png" alt="Quir\xF3Nova" width={150} height={40} />
        <nav className="flex gap-6 font-sans-clean">
          <Link href="/sobre-quironova" className="hover:text-q-lila">
            Sobre Quir\xF3Nova
          </Link>
          <Link href="/contacto" className="hover:text-q-lila">
            Contacto
          </Link>
          <Link href="/blog" className="hover:text-q-lila">
            Blog
          </Link>
        </nav>
        <p className="text-q-gris mt-4 text-sm">
          La tecnolog\xEDa y el esp\xEDritu, dos alas para volar m\xE1s alto.
        </p>
        <p className="text-xs text-q-gris mt-4">
          &copy; {new Date().getFullYear()} Quir\xF3Nova. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
