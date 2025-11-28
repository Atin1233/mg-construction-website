import { Section } from '../layout/Section';

type IBlogPost = {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image?: string;
};

const blogPosts: IBlogPost[] = [
  {
    title: 'Monmouth County Construction Company',
    excerpt:
      'Since being founded in 1991, M.G. Construction Co. has set out to provide Monmouth, Middlesex and Ocean counties with high-quality residential and commercial concrete and foundation work. Our commitment to excellence and customer satisfaction has made us a trusted name in New Jersey construction.',
    date: 'January 2024',
    category: 'Company News',
  },
  {
    title: 'The Importance of Quality Foundation Work',
    excerpt:
      'A strong foundation is the backbone of any construction project. At M.G. Construction Co., we understand that proper foundation work is critical for the long-term stability and safety of any structure. Learn why quality matters and how we ensure every foundation meets the highest standards.',
    date: 'December 2023',
    category: 'Expertise',
  },
  {
    title: 'Commercial Construction Best Practices',
    excerpt:
      'Delivering commercial construction projects requires precision, expertise, and attention to detail. With decades of experience serving commercial developers and municipalities, we share our insights on what makes a successful commercial construction project.',
    date: 'November 2023',
    category: 'Commercial',
  },
  {
    title: 'Concrete Work: Traditional Methods Meet Modern Technology',
    excerpt:
      'While we embrace new technology and modern construction methods, we maintain our commitment to traditional craftsmanship and one-on-one client relationships. Discover how we combine the best of both worlds to deliver exceptional results.',
    date: 'October 2023',
    category: 'Technology',
  },
];

type IBlogSectionProps = {
  title?: string;
};

const BlogSection = (props: IBlogSectionProps) => (
  <div className="bg-white">
    <Section
      title={props.title || 'Latest News & Insights'}
      yPadding="py-12 sm:py-16 md:py-20"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              {post.image ? (
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${post.image}')`,
                  }}
                />
              ) : (
                <div className="flex h-48 items-center justify-center bg-gray-100">
                  <div className="flex size-20 items-center justify-center rounded-full bg-primary-100 text-2xl font-bold text-primary-600">
                    {post.category.charAt(0)}
                  </div>
                </div>
              )}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary-600">
                  {post.category}
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900 group-hover:text-primary-600">
                  {post.title}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-600">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <time className="text-xs text-gray-500">{post.date}</time>
                  <span className="text-xs font-semibold text-primary-600">
                    Read More →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  </div>
);

export { BlogSection };
