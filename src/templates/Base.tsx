import Link from 'next/link';
import type { ReactNode } from 'react';

import { ConstructionFooter } from '../footer/ConstructionFooter';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { AppConfig } from '../utils/AppConfig';

type IBaseTemplateProps = {
  children: ReactNode;
  showFooter?: boolean;
};

const Base = (props: IBaseTemplateProps) => (
  <div className="text-gray-600 antialiased">
    {/* Navigation */}
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl p-3">
        <NavbarTwoColumns
          logo={
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                {AppConfig.site_name}
              </span>
            </div>
          }
        >
          <li>
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="hover:text-primary-600">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-primary-600">
              Services
            </a>
          </li>
          <li>
            <a href="#experience" className="hover:text-primary-600">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-primary-600">
              Contact
            </a>
          </li>
        </NavbarTwoColumns>
      </div>
    </div>

    {/* Main Content */}
    <main>{props.children}</main>

    {/* Footer */}
    {props.showFooter !== false && (
      <ConstructionFooter
        logo={
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              {AppConfig.site_name}
            </span>
          </div>
        }
      >
        <li>
          <Link href="/" className="transition-colors hover:text-primary-400">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="transition-colors hover:text-primary-400">
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="transition-colors hover:text-primary-400"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="transition-colors hover:text-primary-400"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="transition-colors hover:text-primary-400"
          >
            Contact
          </a>
        </li>
      </ConstructionFooter>
    )}
  </div>
);

export { Base };
