import Link from 'next/link';
import type { ReactNode } from 'react';

import { AppConfig } from '../utils/AppConfig';

type IConstructionFooterProps = {
  logo: ReactNode;
  children: ReactNode;
};

const ConstructionFooter = (props: IConstructionFooterProps) => (
  <footer className="bg-gray-900 text-gray-300">
    <div className="mx-auto max-w-screen-xl px-3 py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Company Info */}
        <div>
          <div className="mb-4">{props.logo}</div>
          <p className="mb-4 text-sm">
            Professional concrete and foundation construction services in New Jersey since 1991.
          </p>
          <div className="text-sm">
            <p className="mb-1">
              <strong>Address:</strong>
            </p>
            <p className="mb-4">
              {AppConfig.company.address}<br />
              {AppConfig.company.city}, {AppConfig.company.state} {AppConfig.company.zip}
            </p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Quick Links</h3>
          <nav>
            <ul className="space-y-2 text-sm">
              {props.children}
            </ul>
          </nav>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="mb-4 text-lg font-bold text-white">Contact Us</h3>
          <div className="space-y-3 text-sm">
            <p>
              <strong>Phone:</strong>{' '}
              <a
                href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                {AppConfig.company.phone}
              </a>
            </p>
            <p>
              <strong>Alt. Phone:</strong>{' '}
              <a
                href={`tel:${AppConfig.company.altPhone.replace(/[^0-9]/g, '')}`}
                className="text-primary-400 hover:text-primary-300 transition-colors"
              >
                {AppConfig.company.altPhone}
              </a>
            </p>
            <p className="mt-4">
              <a
                href={AppConfig.company.bluebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-400 hover:text-primary-300 transition-colors underline"
              >
                View on BlueBook →
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
        <p>
          © {new Date().getFullYear()} {AppConfig.company.name}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export { ConstructionFooter };

