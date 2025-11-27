
import { Meta } from '../layout/Meta';
import { Base } from '../templates/Base';
import { AppConfig } from '../utils/AppConfig';
import { ConstructionHero } from '../hero/ConstructionHero';
import { AboutSection } from '../sections/AboutSection';
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectExperienceSection } from '../sections/ProjectExperienceSection';
import { ServiceAreasSection } from '../sections/ServiceAreasSection';
import { CTABanner } from '../cta/CTABanner';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';

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
            <span className="text-primary-400">Concrete & Foundation Experts</span>
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
              <Button xl>Call {AppConfig.company.phone}</Button>
            </a>
          }
        />
      </Section>

      {/* Contact Info Section */}
      <Section yPadding="py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-lg bg-white border-2 border-gray-200 p-8 shadow-md">
            <h2 className="mb-6 text-center text-3xl font-bold text-gray-900">
              Get In Touch
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Phone</h3>
                <a
                  href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
                  className="text-lg text-primary-600 hover:text-primary-700 font-semibold"
                >
                  {AppConfig.company.phone}
                </a>
                <p className="mt-2 text-sm text-gray-600">Alt: {AppConfig.company.altPhone}</p>
              </div>
              <div className="text-center">
                <h3 className="mb-3 text-xl font-semibold text-gray-900">Address</h3>
                <p className="text-gray-700">
                  {AppConfig.company.address}<br />
                  {AppConfig.company.city}, {AppConfig.company.state} {AppConfig.company.zip}
                </p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <a
                href={AppConfig.company.bluebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 underline font-semibold"
              >
                View our BlueBook Profile →
              </a>
            </div>
          </div>
        </div>
      </Section>
    </Base>
  </>
);

export default Index;

