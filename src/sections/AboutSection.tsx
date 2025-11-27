import { Section } from '../layout/Section';

type IAboutSectionProps = {
  title?: string;
};

const AboutSection = (props: IAboutSectionProps) => (
  <div className="relative bg-white">
    <Section title={props.title} yPadding="py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Text Content */}
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p className="text-xl font-semibold text-gray-900">
              Founded in 1991, M.G. Construction Co. has built its reputation on
              long-term personal relationships with clients, employees, and
              suppliers. With a rich heritage of superior performance, we have
              become known for delivering high-quality, cost-effective
              construction solutions.
            </p>

            <p>
              We are dedicated to exceptional care and craftsmanship for both
              residential and commercial projects. While we embrace new
              technology and modern construction methods, we prioritize
              one-on-one interaction and personal dialogue with every client.
            </p>

            <div className="mt-10 border-t border-gray-300 pt-8">
              <h3 className="mb-6 text-2xl font-bold text-gray-900">
                Our Core Values
              </h3>
              <dl className="space-y-5">
                <div>
                  <dt className="mb-2 text-lg font-semibold text-gray-900">
                    Reliability
                  </dt>
                  <dd className="text-gray-700">
                    Dependable service you can count on, every time
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 text-lg font-semibold text-gray-900">
                    Craftsmanship
                  </dt>
                  <dd className="text-gray-700">
                    Attention to detail in every project we undertake
                  </dd>
                </div>
                <div>
                  <dt className="mb-2 text-lg font-semibold text-gray-900">
                    Integrity
                  </dt>
                  <dd className="text-gray-700">
                    Honest communication and ethical business practices
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[500px]">
            <div
              className="size-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/construction-about.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gray-900/20" />
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export { AboutSection };
