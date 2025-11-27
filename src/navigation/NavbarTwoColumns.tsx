import Link from 'next/link';
import type { ReactNode } from 'react';

type INavbarProps = {
  logo: ReactNode;
  children: ReactNode;
  ctaButton?: ReactNode;
};

const NavbarTwoColumns = (props: INavbarProps) => (
  <div className="flex flex-wrap items-center justify-between bg-white shadow-lg">
    <div className="p-4 lg:px-6">
      <Link href="/" className="transition-opacity hover:opacity-80">
        {props.logo}
      </Link>
    </div>

    <nav className="flex flex-1 items-center justify-end px-4 lg:px-6">
      <ul className="navbar flex items-center text-base font-medium text-gray-800 lg:text-lg">
        {props.children}
      </ul>
      {props.ctaButton && (
        <div className="ml-6 hidden lg:block">{props.ctaButton}</div>
      )}
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
