import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';
import { ConstructionFooter } from '../footer/ConstructionFooter';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';

type IBaseTemplateProps = {
  children: ReactNode;
  showFooter?: boolean;
};

const Base = (props: IBaseTemplateProps) => (
  <div className="antialiased text-gray-600">
    {/* Navigation */}
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl px-3 py-3">
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
          <Link href="/" className="hover:text-primary-400 transition-colors">
            Home
          </Link>
        </li>
        <li>
          <a href="#about" className="hover:text-primary-400 transition-colors">
            About Us
          </a>
        </li>
        <li>
          <a href="#services" className="hover:text-primary-400 transition-colors">
            Services
          </a>
        </li>
        <li>
          <a href="#experience" className="hover:text-primary-400 transition-colors">
            Experience
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-primary-400 transition-colors">
            Contact
          </a>
        </li>
      </ConstructionFooter>
    )}
  </div>
);

export { Base };

