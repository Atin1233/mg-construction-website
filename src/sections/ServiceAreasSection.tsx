import { Section } from '../layout/Section';

type IServiceAreasSectionProps = {
  title?: string;
};

const ServiceAreasSection = (props: IServiceAreasSectionProps) => (
  <div className="bg-white">
    <Section title={props.title} yPadding="py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Service Areas</h3>
            <div className="space-y-4 text-lg text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">
                  Primary Service Area
                </p>
                <p className="mt-1">New Jersey</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">
                  Local Service Radius
                </p>
                <p className="mt-1">
                  Serving areas around <strong>Old Bridge, NJ</strong>
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-[400px]">
            <div
              className="size-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/new-jersey-area.jpg')",
              }}
            />
            <div className="absolute inset-0 bg-gray-900/20" />
            <div className="absolute inset-x-0 bottom-0 bg-white/90 p-6">
              <p className="text-sm font-semibold text-gray-600">Based in</p>
              <p className="text-2xl font-bold text-gray-900">
                Old Bridge, New Jersey
              </p>
              <p className="mt-2 text-gray-700">
                Serving the greater New Jersey area
              </p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  </div>
);

export { ServiceAreasSection };
