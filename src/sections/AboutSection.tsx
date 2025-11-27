import type { ReactNode } from 'react';

import { Section } from '../layout/Section';

type IAboutSectionProps = {
  title?: string;
};

const AboutSection = (props: IAboutSectionProps) => (
  <Section
    title={props.title}
    yPadding="py-16"
  >
    <div className="mx-auto max-w-4xl">
      <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
        <p className="text-xl font-semibold text-gray-900">
          Founded in 1991, M.G. Construction Co. has built its reputation on long-term personal relationships with clients, employees, and suppliers. With a rich heritage of superior performance, we have become known for delivering high-quality, cost-effective construction solutions.
        </p>
        
        <p>
          We are dedicated to exceptional care and craftsmanship for both residential and commercial projects. While we embrace new technology and modern construction methods, we prioritize one-on-one interaction and personal dialogue with every client.
        </p>
        
        <div className="mt-8 rounded-lg bg-gray-50 p-6 border-l-4 border-primary-500">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Our Core Values</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span><strong>Reliability:</strong> Dependable service you can count on, every time</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span><strong>Craftsmanship:</strong> Attention to detail in every project we undertake</span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-500 mr-2">✓</span>
              <span><strong>Integrity:</strong> Honest communication and ethical business practices</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </Section>
);

export { AboutSection };

