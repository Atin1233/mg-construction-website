import { Section } from '../layout/Section';

type IAboutSectionProps = {
  title?: string;
};

const AboutSection = (props: IAboutSectionProps) => (
  <Section title={props.title} yPadding="py-16">
    <div className="mx-auto max-w-5xl">
      <div className="space-y-8 text-lg leading-relaxed text-gray-700">
        <div className="rounded-xl bg-gradient-to-r from-gray-50 to-gray-100 p-8 shadow-md">
          <p className="text-xl font-semibold text-gray-900">
            Founded in 1991, M.G. Construction Co. has built its reputation on
            long-term personal relationships with clients, employees, and
            suppliers. With a rich heritage of superior performance, we have
            become known for delivering high-quality, cost-effective
            construction solutions.
          </p>
        </div>

        <p className="text-lg">
          We are dedicated to exceptional care and craftsmanship for both
          residential and commercial projects. While we embrace new technology
          and modern construction methods, we prioritize one-on-one interaction
          and personal dialogue with every client.
        </p>

        <div className="mt-12">
          <h3 className="mb-8 text-center text-3xl font-bold text-gray-900">
            Our Core Values
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
                <svg
                  className="size-8 text-primary-600"
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
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Reliability
              </h4>
              <p className="text-gray-600">
                Dependable service you can count on, every time.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
                <svg
                  className="size-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Craftsmanship
              </h4>
              <p className="text-gray-600">
                Attention to detail in every project we undertake.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-lg transition-shadow hover:shadow-xl">
              <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary-100">
                <svg
                  className="size-8 text-primary-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              </div>
              <h4 className="mb-2 text-xl font-bold text-gray-900">
                Integrity
              </h4>
              <p className="text-gray-600">
                Honest communication and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { AboutSection };
