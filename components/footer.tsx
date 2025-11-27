import Link from 'next/link';
import { COMPANY_INFO, NAV_LINKS } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">{COMPANY_INFO.name}</h3>
            <p className="text-white/80 mb-4">
              Concrete & Foundation Specialists since {COMPANY_INFO.founded}
            </p>
            <p className="text-white/80 text-sm">
              {COMPANY_INFO.fullAddress}
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <a
                  href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                  className="hover:text-accent transition-colors"
                >
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${COMPANY_INFO.altPhone.replace(/\s/g, '')}`}
                  className="hover:text-accent transition-colors"
                >
                  {COMPANY_INFO.altPhone}
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={COMPANY_INFO.bluebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  BlueBook Profile
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white/80 hover:text-accent transition-colors"
                >
                  Request a Quote
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">
              © {currentYear} {COMPANY_INFO.name}. All rights reserved.
            </p>
            <p className="text-white/60 text-sm">
              Serving New Jersey since {COMPANY_INFO.founded}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

