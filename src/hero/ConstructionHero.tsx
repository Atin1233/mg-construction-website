import type { ReactNode } from 'react';

type IConstructionHeroProps = {
  title: ReactNode;
  description: string;
  phone?: string;
};

const ConstructionHero = (props: IConstructionHeroProps) => (
  <header className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
    {/* Background overlay with pattern */}
    <div className="absolute inset-0 bg-black opacity-60"></div>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.08) 1px, transparent 0)',
        backgroundSize: '50px 50px',
      }}
    ></div>

    <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 sm:py-40 lg:px-8 lg:py-48">
      <div className="text-center">
        <h1 className="lg:text-7xl mb-6 whitespace-pre-line text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          {props.title}
        </h1>
        <p className="mx-auto mb-12 max-w-3xl text-xl text-gray-200 sm:text-2xl md:text-3xl">
          {props.description}
        </p>
        {props.phone && (
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${props.phone.replace(/[^0-9]/g, '')}`}
              className="rounded-lg bg-primary-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all hover:scale-105 hover:bg-primary-700 hover:shadow-2xl sm:px-12 sm:py-5 sm:text-xl"
            >
              Call Us: {props.phone}
            </a>
            <a
              href="#contact"
              className="rounded-lg border-2 border-white bg-transparent px-10 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-white hover:text-gray-900 sm:px-12 sm:py-5 sm:text-xl"
            >
              Get A Free Quote
            </a>
          </div>
        )}
      </div>
    </div>
  </header>
);

export { ConstructionHero };
