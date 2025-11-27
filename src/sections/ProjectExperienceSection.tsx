import { Section } from '../layout/Section';

type IProjectExperienceSectionProps = {
  title?: string;
};

const ProjectExperienceSection = (props: IProjectExperienceSectionProps) => (
  <Section
    title={props.title}
    yPadding="py-16"
  >
    <div className="mx-auto max-w-4xl">
      <div className="rounded-lg bg-gradient-to-r from-gray-800 to-gray-900 p-8 text-white shadow-xl">
        <h3 className="mb-4 text-2xl font-bold text-primary-400">
          Primary Sector: Commercial Construction
        </h3>
        <p className="text-lg leading-relaxed text-gray-100">
          With decades of experience, M.G. Construction Co. has established itself as a trusted partner in delivering exceptional concrete and foundation work for commercial developers, general contractors, and municipalities throughout New Jersey. Our expertise spans a wide range of commercial construction projects, from large-scale developments to municipal infrastructure improvements.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-100">
          We understand the unique demands of commercial construction, including strict timelines, budget constraints, and quality requirements. Our team is equipped to handle complex projects while maintaining our commitment to quality, safety, and customer satisfaction.
        </p>
      </div>
    </div>
  </Section>
);

export { ProjectExperienceSection };

