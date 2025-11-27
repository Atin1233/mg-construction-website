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
    items: [
      'Concrete foundations',
      'Block foundations',
    ],
  },
];

const ServicesSection = (props: IServicesSectionProps) => (
  <Section
    title={props.title}
    yPadding="py-16"
  >
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
      {services.map((service, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg"
        >
          <h3 className="mb-4 text-2xl font-bold text-gray-900 border-b-2 border-primary-500 pb-2">
            {service.title}
          </h3>
          <ul className="space-y-2">
            {service.items.map((item, itemIndex) => (
              <li key={itemIndex} className="flex items-start text-gray-700">
                <span className="text-primary-500 mr-2 mt-1">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export { ServicesSection };

