import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between bg-white shadow-md">
    <div className="px-4 py-3">
      <Link href="/" className="transition-opacity hover:opacity-80">
        {props.logo}
      </Link>
    </div>

    <nav className="px-4">
      <ul className="navbar flex items-center text-lg font-medium text-gray-800">
        {props.children}
      </ul>
    </nav>

    <style jsx>
      {`
        .navbar :global(li:not(:first-child)) {
          @apply mt-0;
        }

        .navbar :global(li:not(:last-child)) {
          @apply mr-5;
        }

        .navbar :global(a:hover) {
          @apply text-primary-600 transition-colors;
        }
      `}
    </style>
  </div>
);

export { NavbarTwoColumns };
