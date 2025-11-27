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
    {/* Demo Banner */}
    <div className="bg-primary-500 py-2 text-center text-xs text-white sm:text-sm">
      <p>
        Demo website by{' '}
        <a
          href="https://linyr.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold underline transition-opacity hover:opacity-80"
        >
          Linyr Digital Web Design Agency
        </a>
      </p>
    </div>

    {/* Navigation */}
    <div className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto max-w-screen-xl p-3">
        <NavbarTwoColumns
          logo={
            <div className="flex items-center">
              <span className="text-lg font-bold text-gray-900 sm:text-xl md:text-2xl">
                {AppConfig.site_name}
              </span>
            </div>
          }
        >
          <li>
            <Link
              href="/"
              className="text-gray-700 transition-colors hover:text-primary-600"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="text-gray-700 transition-colors hover:text-primary-600"
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="text-gray-700 transition-colors hover:text-primary-600"
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="text-gray-700 transition-colors hover:text-primary-600"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-gray-700 transition-colors hover:text-primary-600"
            >
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
