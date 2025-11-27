import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between bg-white shadow-md">
    <div className="px-6 py-3">
      <Link href="/" className="transition-opacity hover:opacity-80">
        {props.logo}
      </Link>
    </div>

    <nav className="flex-1 px-6">
      <ul className="navbar flex items-center justify-end gap-6 text-lg font-medium text-gray-800 sm:gap-8 lg:gap-10">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mt-0;
        }

        .navbar :global(a:hover) {
          @apply text-primary-600 transition-colors;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
