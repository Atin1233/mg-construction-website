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
            <Link href="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
          </li>
          <li>
            <a href="#about" className="text-gray-700 hover:text-gray-900">
              About Us
            </a>
          </li>
          <li>
            <a href="#services" className="text-gray-700 hover:text-gray-900">
              Services
            </a>
          </li>
          <li>
            <a href="#experience" className="text-gray-700 hover:text-gray-900">
              Experience
            </a>
          </li>
          <li>
            <a href="#contact" className="text-gray-700 hover:text-gray-900">
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
          <Link
            href="/"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#about"
            className="text-gray-300 transition-colors hover:text-white"
          >
            About Us
          </a>
        </li>
        <li>
          <a
            href="#services"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Services
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Contact
          </a>
        </li>
      </ConstructionFooter>
    )}
  </div>
);

export { Base };
