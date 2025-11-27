import Link from 'next/link';

import { Section } from '../layout/Section';

const featuredServices = [
  {
    title: 'Commercial Foundations',
    description:
      'Expert concrete and block foundation work for commercial developments, retail centers, and office buildings.',
    icon: (
      <svg
        className="size-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      </svg>
    ),
    gradient: 'from-blue-600 to-blue-800',
    link: '#services',
  },
  {
    title: 'Municipal Infrastructure',
    description:
      'Trusted partner for municipalities delivering high-quality concrete work for public infrastructure projects.',
    icon: (
      <svg
        className="size-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
    gradient: 'from-green-600 to-green-800',
    link: '#experience',
  },
  {
    title: 'Concrete Sidewalks & Curbs',
    description:
      'Professional installation of concrete sidewalks, curbs, and paving for commercial and municipal projects.',
    icon: (
      <svg
        className="size-12 text-white"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
    gradient: 'from-orange-600 to-orange-800',
    link: '#services',
  },
];

const FeaturedServicesSection = () => (
  <Section yPadding="py-0">
    <div className="grid gap-6 lg:grid-cols-3">
      {featuredServices.map((service, index) => (
        <Link key={index} href={service.link}>
          <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br shadow-xl transition-all hover:scale-105 hover:shadow-2xl">
            {/* Background gradient */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-90`}
            ></div>

            {/* Pattern overlay */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px',
              }}
            ></div>

            {/* Content */}
            <div className="relative p-8 text-white">
              <div className="mb-6 flex size-20 items-center justify-center rounded-full bg-white bg-opacity-20 backdrop-blur-sm transition-transform group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
              <p className="mb-6 text-lg text-white text-opacity-90">
                {service.description}
              </p>
              <div className="inline-flex items-center text-white transition-transform group-hover:translate-x-2">
                <span className="font-semibold">Learn More</span>
                <svg
                  className="ml-2 size-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -right-12 -top-12 size-40 rounded-full bg-white bg-opacity-10 blur-2xl"></div>
            <div className="absolute -bottom-12 -left-12 size-40 rounded-full bg-white bg-opacity-10 blur-2xl"></div>
          </div>
        </Link>
      ))}
    </div>
  </Section>
);

export { FeaturedServicesSection };
