import { Section } from '../layout/Section';

type IServicesSectionProps = {
  title?: string;
};

type ServiceItem = {
  title: string;
  items: string[];
};

const services: ServiceItem[] = [
  {
    title: 'Concrete Work',
    items: [
      'Reinforced concrete',
      'Poured concrete',
      'Masonry work',
      'Block walls',
      'Concrete sidewalks & curbs',
      'Construction services',
      'Misc. concrete projects',
    ],
  },
  {
    title: 'Foundation Work',
    items: ['Concrete foundations', 'Block foundations'],
  },
];

const ServicesSection = (props: IServicesSectionProps) => (
  <Section title={props.title} yPadding="py-16">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Comprehensive concrete and foundation solutions for commercial and
          residential projects.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-2xl border-2 border-gray-200 bg-white shadow-xl transition-all hover:border-primary-500 hover:shadow-2xl"
          >
            {/* Background gradient on hover */}
            <div className="from-primary-50 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity group-hover:opacity-100"></div>

            {/* Decorative corner */}
            <div className="absolute right-0 top-0 size-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-100 opacity-0 blur-2xl transition-opacity group-hover:opacity-50"></div>

            <div className="relative p-8">
              {/* Icon header */}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 shadow-lg">
                  <svg
                    className="size-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {index === 0 ? (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    ) : (
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    )}
                  </svg>
                </div>
                <h3 className="border-b-2 border-primary-500 pb-3 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="flex items-start text-gray-700 transition-all group-hover:text-gray-900"
                  >
                    <svg
                      className="mr-3 mt-1 size-5 shrink-0 text-primary-500 transition-transform group-hover:scale-110"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export { ServicesSection };
