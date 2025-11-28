import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { ConstructionHero } from '../hero/ConstructionHero';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AboutSection } from '../sections/AboutSection';
import { BlogSection } from '../sections/BlogSection';
import { ProjectExperienceSection } from '../sections/ProjectExperienceSection';
import { ServiceAreasSection } from '../sections/ServiceAreasSection';
import { ServicesSection } from '../sections/ServicesSection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { WhatMakesUsDifferentSection } from '../sections/WhatMakesUsDifferentSection';
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

      {/* About Section */}
      <div id="about">
        <AboutSection title="About Us | Our Story" />
      </div>

      {/* Services Section */}
      <div id="services" className="bg-gray-50">
        <ServicesSection title="Our Services" />
      </div>

      {/* Project Experience Section */}
      <div id="experience">
        <ProjectExperienceSection title="Project Experience" />
      </div>

      {/* What Makes Us Different Section */}
      <WhatMakesUsDifferentSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Service Areas Section */}
      <div id="contact">
        <ServiceAreasSection title="Service Areas" />
      </div>

      {/* Blog Section */}
      <BlogSection />

      {/* CTA Section */}
      <CTABanner
        title="Ready to Start Your Project?"
        subtitle="Contact us today for a free consultation"
        button={
          <a href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}>
            <Button xl>{`Call ${AppConfig.company.phone}`}</Button>
          </a>
        }
      />

      {/* Contact Info Section */}
      <Section yPadding="py-12 sm:py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-900 sm:mb-10 sm:text-4xl">
            Get In Touch
          </h2>
          <div className="grid gap-8 sm:gap-10 md:grid-cols-2 md:gap-12">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">
                Phone
              </h3>
              <p className="mb-2">
                <a
                  href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
                  className="text-xl font-semibold text-primary-600 transition-colors hover:text-primary-700 sm:text-2xl"
                >
                  {AppConfig.company.phone}
                </a>
              </p>
              <p className="text-sm text-gray-600 sm:text-base">
                Alt: {AppConfig.company.altPhone}
              </p>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-gray-900 sm:mb-4 sm:text-xl">
                Address
              </h3>
              <p className="text-base leading-relaxed text-gray-700 sm:text-lg">
                {AppConfig.company.address}
              </p>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-300 pt-6 text-center sm:mt-10 sm:pt-8">
            <a
              href={AppConfig.company.bluebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base font-semibold text-primary-600 transition-colors hover:text-primary-700 sm:text-lg"
            >
              View our BlueBook Profile
            </a>
          </div>
        </div>
      </Section>
    </Base>
  </>
);

export default Index;
