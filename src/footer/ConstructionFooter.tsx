import type { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type IConstructionFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const ConstructionFooter = (props: IConstructionFooterProps) => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-10 md:py-12">
      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Company Info */}
        <div className="sm:col-span-2 md:col-span-1">
          <div className="mb-4">{props.logo}</div>
          <p className="mb-4 text-xs sm:text-sm">
            Professional concrete and foundation construction services in New
            Jersey since 1991.
          </p>
          <div className="text-xs sm:text-sm">
            <p className="mb-1">
              <strong>Address:</strong>
            </p>
            <p className="mb-4">
              {AppConfig.company.address}
              <br />
              {AppConfig.company.city}, {AppConfig.company.state}{' '}
              {AppConfig.company.zip}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white sm:text-lg">
            Quick Links
          </h3>
          <nav>
            <ul className="space-y-2 text-xs sm:text-sm">{props.children}</ul>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-base font-bold text-white sm:text-lg">
            Contact Us
          </h3>
          <div className="space-y-2 text-xs sm:space-y-3 sm:text-sm">
            <p>
              <strong>Phone:</strong>{' '}
              <a
                href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
                className="text-primary-400 transition-colors hover:text-primary-300"
              >
                {AppConfig.company.phone}
              </a>
            </p>
            <p>
              <strong>Alt. Phone:</strong>{' '}
              <a
                href={`tel:${AppConfig.company.altPhone.replace(/[^0-9]/g, '')}`}
                className="text-primary-400 transition-colors hover:text-primary-300"
              >
                {AppConfig.company.altPhone}
              </a>
            </p>
            <p className="mt-3 sm:mt-4">
              <a
                href={AppConfig.company.bluebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 underline transition-colors hover:text-primary-300"
              >
                View on BlueBook →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 border-t border-gray-800 pt-6 text-center text-xs sm:mt-8 sm:pt-8 sm:text-sm">
        <p>
          © {new Date().getFullYear()} {AppConfig.company.name}. All rights
          reserved.
        </p>
        <p className="mt-2 text-gray-500">
          Built by{' '}
          <a
            href="https://linyr.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary-400 transition-colors hover:text-primary-300"
          >
            Linyr Digital Web Design Agency
          </a>
        </p>
      </div>
    </div>
  </footer>
);

export { ConstructionFooter };
