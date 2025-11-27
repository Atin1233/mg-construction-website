import { Section } from '../layout/Section';

type IServiceAreasSectionProps = {
  title?: string;
};

const ServiceAreasSection = (props: IServiceAreasSectionProps) => (
  <Section title={props.title} yPadding="py-16">
    <div className="mx-auto max-w-6xl">
      <div className="mb-12 text-center">
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Serving commercial developers, general contractors, and municipalities
          throughout New Jersey and the surrounding areas.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-white p-8 shadow-lg">
          <div className="mb-6 flex items-center">
            <div className="mr-4 flex size-14 items-center justify-center rounded-full bg-primary-100">
              <svg
                className="size-7 text-primary-600"
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
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Service Areas</h3>
          </div>
          <ul className="space-y-4 text-lg text-gray-700">
            <li className="flex items-center">
              <svg
                className="mr-3 size-6 shrink-0 text-primary-500"
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
              <span>
                <strong className="text-gray-900">Primary:</strong> New Jersey
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-3 size-6 shrink-0 text-primary-500"
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
              <span>
                Local service radius around{' '}
                <strong className="text-gray-900">Old Bridge, NJ</strong>
              </span>
            </li>
            <li className="flex items-center">
              <svg
                className="mr-3 size-6 shrink-0 text-primary-500"
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
              <span>
                Serving <strong className="text-gray-900">Monmouth</strong>,{' '}
                <strong className="text-gray-900">Middlesex</strong>, and
                surrounding counties
              </span>
            </li>
          </ul>
        </div>
        <div className="flex items-center justify-center">
          <div className="from-primary-50 rounded-xl bg-gradient-to-br to-primary-100 p-8 shadow-lg">
            <div className="text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex size-20 items-center justify-center rounded-full bg-primary-600">
                  <svg
                    className="size-10 text-white"
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
                </div>
              </div>
              <p className="mb-2 text-lg font-semibold text-gray-600">
                Based in
              </p>
              <p className="mb-4 text-3xl font-bold text-gray-900">
                Old Bridge, New Jersey
              </p>
              <p className="text-lg text-gray-700">
                Serving the greater New Jersey area since 1991
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { ServiceAreasSection };
