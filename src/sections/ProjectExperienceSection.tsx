import { Section } from '../layout/Section';

type IProjectExperienceSectionProps = {
  title?: string;
};

const ProjectExperienceSection = (props: IProjectExperienceSectionProps) => (
  <div className="relative">
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/commercial-construction.jpg')",
      }}
    />
    <div className="absolute inset-0 bg-gray-900/75" />
    <Section title={props.title} yPadding="py-20">
      <div className="relative mx-auto max-w-4xl text-white">
        <h3 className="mb-6 text-2xl font-bold">Commercial Construction</h3>
        <div className="space-y-6 text-lg leading-relaxed">
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
      </div>
    </Section>
  </div>
);

export { ProjectExperienceSection };
