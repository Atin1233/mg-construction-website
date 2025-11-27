import type { Metadata } from 'next';
import Link from 'next/link';
import { COMPANY_INFO, SERVICES } from '@/lib/constants';
import { AnimatedSection } from '@/components/section';

export const metadata: Metadata = {
  title: 'Services',
  description: `Professional concrete and foundation services by ${COMPANY_INFO.name}. From reinforced concrete to block foundations, we deliver quality construction solutions.`,
  openGraph: {
    title: `Services | ${COMPANY_INFO.name}`,
    description: 'Professional concrete and foundation services for commercial and residential projects.',
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy-700 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Comprehensive concrete and foundation solutions built to last
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-concrete-200">
                  <div className="p-8 md:p-12">
                    <div className="flex items-start justify-between mb-6">
                      <h2 className="text-3xl md:text-4xl font-bold text-navy">
                        {service.category}
                      </h2>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-8 max-w-3xl">
                      {service.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start p-4 bg-concrete-50 rounded-lg"
                        >
                          <svg
                            className="w-6 h-6 text-accent mr-3 mt-0.5 flex-shrink-0"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-gray-800 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="section-padding bg-concrete-50">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-white rounded-lg p-8 md:p-12 shadow-lg">
              <h2 className="text-3xl font-bold text-navy mb-6">
                Why Choose Our Services?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    Quality Materials
                  </h3>
                  <p className="text-gray-700">
                    We use only the highest quality concrete and materials, ensuring durability and longevity for every project.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    Expert Craftsmanship
                  </h3>
                  <p className="text-gray-700">
                    Our experienced team brings decades of knowledge to every job, delivering results that exceed expectations.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    Timely Completion
                  </h3>
                  <p className="text-gray-700">
                    We understand the importance of deadlines and work efficiently to complete projects on schedule.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-navy mb-3">
                    Competitive Pricing
                  </h3>
                  <p className="text-gray-700">
                    Fair, transparent pricing with no hidden fees. We provide detailed quotes so you know exactly what to expect.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-navy to-navy-700 text-white">
        <div className="container-custom text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Discuss Your Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a free consultation and quote on your concrete or foundation project.
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

