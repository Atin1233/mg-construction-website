import { Section } from '../layout/Section';

type IServiceAreasSectionProps = {
  title?: string;
};

const ServiceAreasSection = (props: IServiceAreasSectionProps) => (
  <Section title={props.title} yPadding="py-16">
    <div className="mx-auto max-w-4xl">
      <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-2xl font-bold text-gray-900">
              Service Areas
            </h3>
            <ul className="space-y-3 text-lg text-gray-700">
              <li className="flex items-center">
                <span className="mr-3 text-xl text-primary-500">📍</span>
                <span>
                  <strong>Primary:</strong> New Jersey
                </span>
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-xl text-primary-500">📍</span>
                <span>
                  Local service radius around <strong>Old Bridge, NJ</strong>
                </span>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-md">
              <p className="mb-2 text-center text-gray-600">Based in</p>
              <p className="text-center text-xl font-bold text-gray-900">
                Old Bridge, New Jersey
              </p>
              <p className="mt-2 text-center text-gray-600">
                Serving the greater New Jersey area
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { ServiceAreasSection };
