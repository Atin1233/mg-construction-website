import type { ReactNode } from 'react';

type IConstructionHeroProps = {
  title: ReactNode;
  description: string;
  phone?: string;
};

const ConstructionHero = (props: IConstructionHeroProps) => (
  <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    {/* Background texture */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h100v100H0z' fill='%23334155'/%3E%3Cpath d='M0 0h50v50H0z' fill='%231f2937'/%3E%3C/svg%3E")`,
      }}
    ></div>

    {/* Animated pattern */}
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
        backgroundSize: '50px 50px',
      }}
    ></div>

    {/* Gradient overlays */}
    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/20 via-transparent to-primary-900/20"></div>

    {/* Decorative blurs */}
    <div className="absolute right-0 top-0 size-96 -translate-y-1/2 translate-x-1/2 rounded-full bg-primary-600 opacity-10 blur-3xl"></div>
    <div className="absolute bottom-0 left-0 size-96 -translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600 opacity-10 blur-3xl"></div>

    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8 lg:py-48">
      <div className="text-center">
        {/* Trust badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-primary-600/20 px-6 py-2 backdrop-blur-sm">
          <span className="size-2 animate-pulse rounded-full bg-primary-400"></span>
          <span className="text-sm font-semibold">
            Trusted Since 1991 • New Jersey&apos;s Premier Contractor
          </span>
        </div>

        <h1 className="lg:text-7xl mb-6 whitespace-pre-line bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-4xl font-extrabold leading-tight text-transparent sm:text-5xl md:text-6xl">
          {props.title}
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-200 sm:text-2xl md:text-3xl">
          {props.description}
        </p>
        {props.phone && (
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${props.phone.replace(/[^0-9]/g, '')}`}
              className="group relative overflow-hidden rounded-lg bg-primary-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-primary-700 hover:shadow-2xl sm:px-12 sm:py-5 sm:text-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Call Us: {props.phone}
                <svg
                  className="size-5 transition-transform group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform group-hover:translate-x-full"></div>
            </a>
            <a
              href="#contact"
              className="rounded-lg border-2 border-white bg-white/10 px-10 py-4 text-lg font-bold text-white shadow-lg backdrop-blur-sm transition-all hover:scale-105 hover:bg-white hover:text-gray-900 sm:px-12 sm:py-5 sm:text-xl"
            >
              Get A Free Quote
            </a>
          </div>
        )}

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-gray-300">
          <div className="flex items-center gap-2">
            <svg
              className="size-5 text-primary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="size-5 text-primary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Commercial & Municipal</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="size-5 text-primary-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>30+ Years Experience</span>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export { ConstructionHero };
