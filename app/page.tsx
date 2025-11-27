import type { Metadata } from 'next';
import Link from 'next/link';
import Hero from '@/components/hero';
import ServiceCard from '@/components/service-card';
import ImageGridItem from '@/components/image-grid-item';
import { COMPANY_INFO, SERVICES, ABOUT_CONTENT } from '@/lib/constants';
import { AnimatedSection } from '@/components/section';

export const metadata: Metadata = {
  title: 'Home',
  description: `${COMPANY_INFO.name} - Concrete & Foundation Specialists Since ${COMPANY_INFO.founded}. Quality craftsmanship for commercial and residential construction in New Jersey.`,
  openGraph: {
    title: `${COMPANY_INFO.name} | Concrete & Foundation Specialists`,
    description: 'Quality craftsmanship for commercial and residential construction in New Jersey.',
  },
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Concrete & Foundation Specialists Since 1991"
        subtitle="Quality craftsmanship for commercial and residential construction."
        primaryCta={{ text: 'Our Services', href: '/services' }}
        secondaryCta={{ text: 'Contact Us', href: '/contact' }}
      />

      {/* Services Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive concrete and foundation solutions built to last. We deliver quality results for every project.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <ServiceCard
                key={index}
                category={service.category}
                description={service.description}
                items={service.items}
                icon={service.icon}
                href="/services"
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/services" className="btn-secondary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-concrete-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Built on Relationships, Driven by Excellence
              </h2>
              <div className="space-y-4 text-gray-700">
                {ABOUT_CONTENT.story.slice(0, 2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Link href="/about" className="inline-block mt-6 btn-outline">
                Learn More About Us
              </Link>
            </AnimatedSection>

            <AnimatedSection className="relative h-96 rounded-lg overflow-hidden shadow-xl">
              {/* Placeholder Image */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy-700 to-navy-900 flex items-center justify-center">
                <div className="text-center text-white p-8">
                  <svg
                    className="w-24 h-24 mx-auto mb-4 opacity-50"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                  <p className="text-lg">Construction Project Image</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Work
            </h2>
            <p className="text-gray-600">
              See examples of our quality craftsmanship across New Jersey
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ImageGridItem key={item} index={item} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-secondary">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy-700 text-white">
        <div className="container-custom text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Get in touch for a free consultation and quote. We're here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary bg-accent hover:bg-accent-600">
                Get Free Quote
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="btn-outline border-white text-white hover:bg-white hover:text-navy"
              >
                Call {COMPANY_INFO.phone}
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}

