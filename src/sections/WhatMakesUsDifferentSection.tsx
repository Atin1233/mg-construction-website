import { Section } from '../layout/Section';

type IDifferenceItem = {
  title: string;
  description: string;
  icon?: string;
};

const differences: IDifferenceItem[] = [
  {
    title: 'Three Decades of Excellence',
    description:
      "Since 1991, we've built our reputation on long-term personal relationships with clients, employees, and suppliers. Our rich heritage of superior performance speaks for itself.",
  },
  {
    title: 'Personal Relationship Approach',
    description:
      'While we embrace new technology, we prioritize one-on-one interaction and personal dialogue. Every client receives dedicated attention from planning through completion.',
  },
  {
    title: 'Quality Craftsmanship Guaranteed',
    description:
      'We are dedicated to exceptional care and craftsmanship for both residential and commercial projects. Our attention to detail ensures superior results every time.',
  },
  {
    title: 'Proven Track Record',
    description:
      'With decades of experience delivering concrete and foundation work for commercial developers, general contractors, and municipalities, we understand the unique demands of every project.',
  },
  {
    title: 'Reliability & Integrity',
    description:
      'Our core values of reliability, craftsmanship, and integrity guide everything we do. We stand behind our work and maintain honest communication throughout the process.',
  },
  {
    title: 'Cost-Effective Solutions',
    description:
      'We deliver high-quality, cost-effective construction without compromising on materials or workmanship. Our experience allows us to maximize value for every project.',
  },
];

type IWhatMakesUsDifferentSectionProps = {
  title?: string;
};

const WhatMakesUsDifferentSection = (
  props: IWhatMakesUsDifferentSectionProps,
) => (
  <div className="bg-white">
    <Section
      title={props.title || 'What Makes M.G. Construction Different'}
      yPadding="py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {differences.map((item, index) => (
            <div
              key={index}
              className="group rounded-lg border-l-4 border-primary-500 bg-gray-50 p-6 transition-shadow hover:shadow-md"
            >
              <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-700 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export { WhatMakesUsDifferentSection };
