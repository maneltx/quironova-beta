'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/quiromancia', label: 'Quiromancia' },
    { href: '/tarot', label: 'Tarot' },
    { href: '/alquimia', label: 'Alquimia' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-q-indigo/30 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src="/brand/logo.png" alt="Quir\xF3Nova" width={180} height={40} priority />
        </Link>

        <div className="hidden md:flex items-center gap-6 font-sans-clean">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-q-lila transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/explorar"
            className="bg-q-lila text-q-indigo px-4 py-2 rounded-md hover:bg-q-magenta transition-colors"
          >
            Explorar
          </Link>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(true)}
            aria-label="Abrir men\xFA"
            className="text-q-lila"
          >
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-q-indigo flex flex-col items-center justify-center gap-8 text-xl font-sans-clean">
          <button
            onClick={() => setIsOpen(false)}
            aria-label="Cerrar men\xFA"
            className="absolute top-4 right-4 text-q-lila"
          >
            <X size={32} />
          </button>
          {navLinks.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/explorar"
            className="bg-q-lila text-q-indigo px-4 py-2 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            Explorar
          </Link>
        </div>
      )}
    </nav>
  );
}
