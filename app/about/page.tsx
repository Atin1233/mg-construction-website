import type { Metadata } from 'next';
import { COMPANY_INFO, ABOUT_CONTENT, PROJECT_EXPERIENCE } from '@/lib/constants';
import { AnimatedSection } from '@/components/section';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Learn about ${COMPANY_INFO.name}'s story, values, and commitment to excellence in construction. Founded in ${COMPANY_INFO.founded}, we've built our reputation on relationships and quality craftsmanship.`,
  openGraph: {
    title: `About Us | ${COMPANY_INFO.name}`,
    description: 'Learn about our story, values, and commitment to excellence in construction.',
  },
};

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-navy to-navy-700 text-white">
        <div className="container-custom text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Built on relationships, driven by excellence. Three decades of trusted construction.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="space-y-8 text-gray-700 leading-relaxed">
            {ABOUT_CONTENT.story.map((paragraph, index) => (
              <AnimatedSection key={index}>
                <p className="text-lg">{paragraph}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-concrete-50">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ABOUT_CONTENT.values.map((value, index) => (
              <AnimatedSection key={index}>
                <div className="bg-white rounded-lg p-8 shadow-md hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mb-6">
                    <span className="text-2xl font-bold text-white">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-4">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Project Experience */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <AnimatedSection>
            <div className="bg-gradient-to-r from-accent/10 to-accent/5 rounded-lg p-8 md:p-12 border-l-4 border-accent">
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
                Project Experience
              </h2>
              <div className="space-y-4">
                <p className="text-lg font-semibold text-navy-700">
                  Primary Sector: {PROJECT_EXPERIENCE.primarySector}
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  {PROJECT_EXPERIENCE.description}
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-navy text-white">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Service Areas
            </h2>
            <p className="text-white/80 text-lg">
              Proudly serving New Jersey and surrounding areas
            </p>
          </AnimatedSection>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
              <ul className="space-y-4 text-lg">
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-accent mr-3"
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
                  <span className="font-semibold">New Jersey (Primary)</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-accent mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Local service radius around Old Bridge, NJ</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-6 h-6 text-accent mr-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>Commercial and residential projects throughout the region</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

