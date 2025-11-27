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
      <ul className="navbar flex items-center justify-end gap-8 text-base font-medium text-gray-700 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20">
        {props.children}
      </ul>
    </nav>

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
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
