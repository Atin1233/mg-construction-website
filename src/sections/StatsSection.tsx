import { Section } from '../layout/Section';

const stats = [
  {
    number: '30+',
    label: 'Years of Experience',
    icon: (
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: '500+',
    label: 'Projects Completed',
    icon: (
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
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    number: '100%',
    label: 'Client Satisfaction',
    icon: (
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
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
    ),
  },
  {
    number: '24/7',
    label: 'Service Availability',
    icon: (
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
          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

const StatsSection = () => (
  <Section yPadding="py-16">
    <div className="mx-auto max-w-7xl">
      <div className="rounded-2xl bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 p-12 shadow-2xl">
        <div className="mb-8 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white">
            Our Track Record Speaks for Itself
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-primary-100">
            Decades of excellence in concrete and foundation construction
            throughout New Jersey
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl bg-white bg-opacity-10 p-8 text-center backdrop-blur-sm transition-all hover:scale-105 hover:bg-opacity-20"
            >
              <div className="mb-4 flex justify-center">{stat.icon}</div>
              <div className="mb-2 text-5xl font-extrabold text-white">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-primary-100">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </Section>
);

export { StatsSection };
