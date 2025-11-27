import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { ConstructionHero } from '../hero/ConstructionHero';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { AboutSection } from '../sections/AboutSection';
import { ProjectExperienceSection } from '../sections/ProjectExperienceSection';
import { ServiceAreasSection } from '../sections/ServiceAreasSection';
import { ServicesSection } from '../sections/ServicesSection';
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
            <span className="text-gray-300">Concrete & Foundation Experts</span>
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
      <div id="contact">
        <ServiceAreasSection title="Service Areas" />
      </div>

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
      <Section yPadding="py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Phone
              </h3>
              <p className="mb-2">
                <a
                  href={`tel:${AppConfig.company.phone.replace(/[^0-9]/g, '')}`}
                  className="text-2xl font-semibold text-gray-900 hover:text-gray-700"
                >
                  {AppConfig.company.phone}
                </a>
              </p>
              <p className="text-gray-600">Alt: {AppConfig.company.altPhone}</p>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900">
                Address
              </h3>
              <p className="text-lg leading-relaxed text-gray-700">
                {AppConfig.company.address}
              </p>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-300 pt-8 text-center">
            <a
              href={AppConfig.company.bluebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-semibold text-gray-900 hover:text-gray-700"
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
