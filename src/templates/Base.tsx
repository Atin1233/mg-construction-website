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
    <div className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="mx-auto max-w-screen-xl">
        <NavbarTwoColumns
          logo={
            <div className="flex items-center">
              <span className="text-2xl font-bold text-gray-900">
                {AppConfig.site_name}
              </span>
            </div>
          }
          ctaButton={
            <a
              href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
              className="rounded-md bg-primary-600 px-6 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-primary-700 hover:shadow-lg lg:px-8 lg:py-3 lg:text-base"
            >
              Get A Quote
            </a>
          }
        >
          <li className="px-3 md:px-4 lg:px-6">
            <Link href="/" className="hover:text-primary-600">
              Home
            </Link>
          </li>
          <li className="px-3 md:px-4 lg:px-6">
            <a href="#about" className="hover:text-primary-600">
              About Us
            </a>
          </li>
          <li className="px-3 md:px-4 lg:px-6">
            <a href="#services" className="hover:text-primary-600">
              Services
            </a>
          </li>
          <li className="px-3 md:px-4 lg:px-6">
            <a href="#experience" className="hover:text-primary-600">
              Experience
            </a>
          </li>
          <li className="px-3 md:px-4 lg:px-6">
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
