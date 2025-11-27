import { Section } from '../layout/Section';

type ITestimonialsSectionProps = {
  title?: string;
};

const testimonials = [
  {
    name: 'Commercial Developer',
    location: 'Central New Jersey',
    text: 'M.G. Construction Co. has been our go-to partner for concrete and foundation work on multiple commercial projects. Their attention to detail, professionalism, and ability to meet tight deadlines is exceptional. Highly recommended.',
  },
  {
    name: 'General Contractor',
    location: 'Monmouth County, NJ',
    text: 'We have worked with M.G. Construction Co. for over a decade. Their expertise in concrete and foundation work is unmatched. They consistently deliver high-quality work that meets our strict standards and timelines.',
  },
  {
    name: 'Municipality Representative',
    location: 'Middlesex County, NJ',
    text: 'M.G. Construction Co. has completed several municipal infrastructure projects for us. Their team is professional, reliable, and their work quality is outstanding. They truly understand the demands of public projects.',
  },
];

const TestimonialsSection = (props: ITestimonialsSectionProps) => (
  <Section title={props.title || 'Client Testimonials'} yPadding="py-16">
    <div className="mx-auto max-w-7xl">
      <div className="mb-12 text-center">
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Don&apos;t just take our word for it. See what our clients have to say
          about our work.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="rounded-lg bg-white p-8 shadow-lg transition-shadow hover:shadow-xl"
          >
            <div className="mb-6 flex items-center justify-center">
              <svg
                className="size-12 text-primary-500"
                fill="currentColor"
                viewBox="0 0 32 32"
              >
                <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
              </svg>
            </div>
            <p className="mb-6 italic text-gray-700">{testimonial.text}</p>
            <div className="border-t border-gray-200 pt-4">
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-sm text-gray-600">{testimonial.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export { TestimonialsSection };
