import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { ConstructionHero } from '../hero/ConstructionHero';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AboutSection } from '../sections/AboutSection';
import { FeaturedServicesSection } from '../sections/FeaturedServicesSection';
import { ProjectExperienceSection } from '../sections/ProjectExperienceSection';
import { ProjectGallerySection } from '../sections/ProjectGallerySection';
import { ServiceAreasSection } from '../sections/ServiceAreasSection';
import { ServicesSection } from '../sections/ServicesSection';
import { StatsSection } from '../sections/StatsSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <>
    <Meta
      title={`${AppConfig.title} | Professional Construction Services in New Jersey`}
      description={AppConfig.description}
      canonical="https://mgconstruction.com/"
    />
    <Base>
      {/* Hero Section */}
      <ConstructionHero
        title={
          <>
            M.G. Construction Co.
            <br />
            <span className="text-primary-400">
              Concrete & Foundation Experts
            </span>
          </>
        }
        description="Serving New Jersey & Surrounding Areas Since 1991"
        phone={AppConfig.company.phone}
      />

      {/* Featured Services Cards */}
      <Section yPadding="py-16">
        <FeaturedServicesSection />
      </Section>

      {/* Stats Section */}
      <div className="bg-gray-50">
        <StatsSection />
      </div>

      {/* About Section */}
      <div id="about">
        <AboutSection title="About Us | Our Story" />
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50">
        <ServicesSection title="Our Services" />
      </div>

      {/* Project Gallery */}
      <div id="gallery">
        <ProjectGallerySection />
      </div>

      {/* Project Experience Section */}
      <div id="experience" className="bg-gray-50">
        <ProjectExperienceSection title="Project Experience" />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials">
        <TestimonialsSection title="What Our Clients Say" />
      </div>

      {/* Service Areas Section */}
      <div id="contact" className="bg-gray-50">
        <ServiceAreasSection title="Service Areas" />
      </div>

      {/* CTA Section */}
      <Section yPadding="py-16">
        <CTABanner
          title="Ready to Start Your Project?"
          subtitle="Contact us today for a free consultation"
          button={
            <a href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}>
              <Button xl>{`Call ${AppConfig.company.phone}`}</Button>
            </a>
          }
        />
      </Section>

      {/* Contact Info Section */}
      <Section yPadding="py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Ready to start your project? Contact us today for a free
              consultation and quote.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="size-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Phone
              </h3>
              <a
                href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
                className="block text-lg font-bold text-primary-600 transition-colors hover:text-primary-700"
              >
                {AppConfig.company.phone}
              </a>
              <p className="mt-2 text-sm text-gray-600">
                Alt: {AppConfig.company.altPhone}
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="size-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Address
              </h3>
              <p className="text-gray-700">
                {AppConfig.company.address}
                <br />
                {AppConfig.company.city}, {AppConfig.company.state}{' '}
                {AppConfig.company.zip}
              </p>
            </div>
            <div className="rounded-xl bg-white p-8 text-center shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex justify-center">
                <div className="flex size-16 items-center justify-center rounded-full bg-primary-100">
                  <svg
                    className="size-8 text-primary-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-gray-900">
                Online
              </h3>
              <a
                href={AppConfig.company.bluebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 underline transition-colors hover:text-primary-700"
              >
                View BlueBook Profile
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Base>
  </>
);

export default Index;
