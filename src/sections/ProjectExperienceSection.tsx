import { Section } from '../layout/Section';

type IProjectExperienceSectionProps = {
  title?: string;
};

const ProjectExperienceSection = (props: IProjectExperienceSectionProps) => (
  <Section title={props.title} yPadding="py-16">
    <div className="mx-auto max-w-6xl">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 via-gray-900 to-gray-800 p-10 text-white shadow-2xl lg:p-12">
        <div className="mb-6 flex items-center">
          <div className="mr-4 flex size-16 items-center justify-center rounded-full bg-primary-500">
            <svg
              className="size-8 text-white"
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
          <h3 className="text-3xl font-bold text-primary-400">
            Primary Sector: Commercial Construction
          </h3>
        </div>
        <div className="space-y-6 text-lg leading-relaxed text-gray-100">
          <p>
            With decades of experience, M.G. Construction Co. has established
            itself as a trusted partner in delivering exceptional concrete and
            foundation work for commercial developers, general contractors, and
            municipalities throughout New Jersey. Our expertise spans a wide
            range of commercial construction projects, from large-scale
            developments to municipal infrastructure improvements.
          </p>
          <p>
            We understand the unique demands of commercial construction,
            including strict timelines, budget constraints, and quality
            requirements. Our team is equipped to handle complex projects while
            maintaining our commitment to quality, safety, and customer
            satisfaction.
          </p>
        </div>
        <div className="mt-8 flex flex-wrap gap-4">
          <div className="rounded-lg bg-primary-600 px-6 py-3">
            <span className="font-semibold">30+ Years Experience</span>
          </div>
          <div className="rounded-lg bg-primary-600 px-6 py-3">
            <span className="font-semibold">Commercial Focus</span>
          </div>
          <div className="rounded-lg bg-primary-600 px-6 py-3">
            <span className="font-semibold">Municipal Projects</span>
          </div>
        </div>
      </div>
    </div>
  </Section>
);

export { ProjectExperienceSection };
