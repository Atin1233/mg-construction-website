import { Section } from '../layout/Section';

type IAboutSectionProps = {
  title?: string;
};

const AboutSection = (props: IAboutSectionProps) => (
  <div className="relative bg-white">
    <Section title={props.title} yPadding="py-12 sm:py-16 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Text Content */}
          <div className="space-y-4 text-base leading-relaxed text-gray-700 sm:space-y-6 sm:text-lg">
            <p className="text-lg font-semibold text-gray-900 sm:text-xl">
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

            <div className="mt-8 border-t border-gray-300 pt-6 sm:mt-10 sm:pt-8">
              <h3 className="mb-4 text-xl font-bold text-gray-900 sm:mb-6 sm:text-2xl">
                Our Core Values
              </h3>
              <dl className="space-y-4 sm:space-y-5">
                <div className="border-l-4 border-primary-500 pl-4 sm:pl-5">
                  <dt className="mb-2 text-base font-semibold text-primary-600 sm:text-lg">
                    Reliability
                  </dt>
                  <dd className="text-sm text-gray-700 sm:text-base">
                    Dependable service you can count on, every time
                  </dd>
                </div>
                <div className="border-l-4 border-accent-500 pl-4 sm:pl-5">
                  <dt className="mb-2 text-base font-semibold text-accent-600 sm:text-lg">
                    Craftsmanship
                  </dt>
                  <dd className="text-sm text-gray-700 sm:text-base">
                    Attention to detail in every project we undertake
                  </dd>
                </div>
                <div className="border-l-4 border-primary-500 pl-4 sm:pl-5">
                  <dt className="mb-2 text-base font-semibold text-primary-600 sm:text-lg">
                    Integrity
                  </dt>
                  <dd className="text-sm text-gray-700 sm:text-base">
                    Honest communication and ethical business practices
                  </dd>
                </div>
              </dl>
            </div>
          </div>

          {/* Image Side */}
          <div className="relative h-[300px] sm:h-[400px] lg:h-[500px]">
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
