'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#E95922] shadow-md">
      <div className="flex justify-between items-center px-4 py-3 max-w-screen-xl mx-auto">
        <Link
          href="/"
          className="text-[#F3EFE0] text-xl md:text-3xl font-cursive"
        >
          Isaac Felipe
        </Link>
        <ul className="hidden md:flex md:space-x-6">
          <li>
            <Link
              href="/"
              className={`text-[#F3EFE0] hover:text-argila transition-colors duration-200 ${pathname === '/' ? 'underline' : ''}`}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className={`text-[#F3EFE0] hover:text-argila transition-colors duration-200 ${pathname === '/timeline' ? 'underline' : ''}`}
            >
              Desenvolvedor
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className={`text-[#F3EFE0] hover:text-argila transition-colors duration-200 ${pathname === '/skills' ? 'underline' : ''}`}
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              href="/publications"
              className={`text-[#F3EFE0] hover:text-argila transition-colors duration-200 ${pathname === '/publicacoes' ? 'underline' : ''}`}
            >
              Publicações
            </Link>
          </li>
        </ul>

        <button
          className="md:hidden text-caulim focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Menu de navegação"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`md:hidden bg-[#1A202C] transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-40 py-2' : 'max-h-0 py-0'
        }`}
      >
        <ul className="flex flex-col space-y-2 px-4">
          <li>
            <Link
              href="/"
              className="block text-[#F3EFE0] hover:text-[#D9A066] py-1 transition-colors duration-200"
              onClick={closeMenu}
            >
              Início
            </Link>
          </li>
          <li>
            <Link
              href="/timeline"
              className="block text-[#F3EFE0] hover:text-[#D9A066] py-1 transition-colors duration-200"
              onClick={closeMenu}
            >
              Desenvolvedor
            </Link>
          </li>
          <li>
            <Link
              href="/skills"
              className="block text-[#F3EFE0] hover:text-[#D9A066] py-1 transition-colors duration-200"
              onClick={closeMenu}
            >
              My Skills
            </Link>
          </li>
          <li>
            <Link
              href="/publications"
              className="block text-[#F3EFE0] hover:text-[#D9A066] py-1 transition-colors duration-200"
              onClick={closeMenu}
            >
              Publicações
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
