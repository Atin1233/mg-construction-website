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
            className="group rounded-xl border-2 border-gray-200 bg-white p-8 shadow-lg transition-all hover:border-primary-500 hover:shadow-xl"
          >
            <h3 className="mb-6 border-b-2 border-primary-500 pb-3 text-2xl font-bold text-gray-900">
              {service.title}
            </h3>
            <ul className="space-y-3">
              {service.items.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex items-start text-gray-700 transition-colors group-hover:text-gray-900"
                >
                  <svg
                    className="mr-3 mt-1 size-5 shrink-0 text-primary-500"
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
        ))}
      </div>
    </div>
  </Section>
);

export { ServicesSection };
