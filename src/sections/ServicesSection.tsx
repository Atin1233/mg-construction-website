import { Section } from '../layout/Section';

type IServicesSectionProps = {
  title?: string;
};

type ServiceItem = {
  title: string;
  items: string[];
  image: string;
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
    image: '/assets/images/concrete-work.jpg',
  },
  {
    title: 'Foundation Work',
    items: ['Concrete foundations', 'Block foundations'],
    image: '/assets/images/foundation-work.jpg',
  },
];

const ServicesSection = (props: IServicesSectionProps) => (
  <div className="bg-gray-50">
    <Section title={props.title} yPadding="py-20">
      <div className="grid gap-0 md:grid-cols-2">
        {services.map((service, index) => (
          <div key={index} className="relative">
            {/* Background Image with Overlay */}
            <div
              className="h-[500px] bg-cover bg-center"
              style={{
                backgroundImage: `url('${service.image}')`,
              }}
            >
              <div className="absolute inset-0 bg-gray-900/60" />
              <div className="absolute inset-0 flex flex-col justify-end p-8 text-white sm:p-12">
                <h3 className="mb-6 text-3xl font-bold">{service.title}</h3>
                <ul className="space-y-3 text-lg">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`border-l-4 pl-4 ${
                        index % 2 === 0
                          ? 'border-primary-400'
                          : 'border-accent-400'
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  </div>
);

export { ServicesSection };
