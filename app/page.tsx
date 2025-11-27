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
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive concrete and foundation solutions built to last. We deliver quality results for every project.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
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

          <div className="text-center mt-16">
            <Link href="/services" className="btn-secondary text-lg px-10 py-4">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding bg-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <div className="inline-block px-4 py-2 bg-navy/10 text-navy rounded-full text-sm font-semibold mb-6">
                About Us
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-tight">
                Built on Relationships,<br />Driven by Excellence
              </h2>
              <div className="space-y-5 text-lg text-gray-700 leading-relaxed mb-8">
                {ABOUT_CONTENT.story.slice(0, 2).map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              <Link href="/about" className="btn-outline text-lg px-8 py-4">
                Learn More About Us
              </Link>
            </AnimatedSection>

            <AnimatedSection className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder Image with Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-700 to-navy-900">
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white p-8">
                    <svg
                      className="w-32 h-32 mx-auto mb-6 opacity-40"
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
                    <p className="text-xl font-medium">Construction Project Image</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
              Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
              Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See examples of our quality craftsmanship across New Jersey
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <ImageGridItem key={item} index={item} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link href="/gallery" className="btn-secondary text-lg px-10 py-4">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-navy via-navy-800 to-navy-900 text-white relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>
        
        <div className="container-custom text-center relative z-10">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 leading-relaxed">
              Get in touch for a free consultation and quote. We're here to bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/contact" className="btn-primary text-lg px-10 py-4 bg-accent hover:bg-accent-600">
                Get Free Quote
              </Link>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/\s/g, '')}`}
                className="px-10 py-4 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-white/20 hover:scale-105"
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
