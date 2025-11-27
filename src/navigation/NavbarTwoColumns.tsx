'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import { useState } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="flex flex-wrap items-center justify-between bg-white shadow-md">
      <div className="flex w-full items-center justify-between px-4 py-3 md:w-auto md:px-6">
        <Link href="/" className="transition-opacity hover:opacity-80">
          {props.logo}
        </Link>

        {/* Hamburger Menu Button - Mobile Only */}
        <button
          type="button"
          className="flex flex-col justify-center gap-1.5 rounded p-2 md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span
            className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'translate-y-2 rotate-45' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? 'opacity-0' : ''
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-gray-700 transition-all duration-300 ${
              isMenuOpen ? '-translate-y-2 -rotate-45' : ''
            }`}
          />
        </button>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden flex-1 px-6 md:block">
        <ul className="navbar flex items-center justify-end gap-8 text-base font-medium text-gray-700 lg:gap-12 xl:gap-16">
          {props.children}
        </ul>
      </nav>

      {/* Mobile Navigation Menu */}
      <div
        className={`w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="border-t border-gray-200 bg-white p-4">
          <ul className="flex flex-col space-y-2" onClick={closeMenu}>
            {props.children}
          </ul>
        </nav>
      </div>

      <style jsx>
        {`
          .navbar :global(li) {
            @apply mt-0;
          }

          .navbar :global(a) {
            @apply px-3 py-2 whitespace-nowrap;
          }

          .navbar :global(a:hover) {
            @apply text-primary-600 transition-colors;
          }

          /* Mobile menu links */
          nav :global(li > a) {
            @apply block rounded p-4 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-primary-600;
          }
        `}
      </style>
    </div>
  );
};

export { NavbarTwoColumns };
