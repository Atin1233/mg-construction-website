import type { ReactNode } from 'react';

type IConstructionHeroProps = {
  title: ReactNode;
  description: string;
  phone?: string;
};

const ConstructionHero = (props: IConstructionHeroProps) => (
  <header className="relative overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white">
    {/* Background overlay pattern */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
    <div
      className="absolute inset-0"
      style={{
        backgroundImage:
          'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.05) 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }}
    ></div>

    <div className="relative mx-auto max-w-screen-xl px-3 py-24 sm:py-32">
      <div className="text-center">
        <h1 className="lg:text-7xl mb-6 whitespace-pre-line text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          {props.title}
        </h1>
        <div className="mb-8 text-xl text-gray-200 sm:text-2xl md:text-3xl">
          {props.description}
        </div>
        {props.phone && (
          <div className="mt-8">
            <a
              href={`tel:${props.phone.replace(/[^0-9]/g, '')}`}
              className="inline-block rounded-lg bg-primary-500 px-8 py-4 text-xl font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-primary-600 hover:shadow-xl"
            >
              Call Us: {props.phone}
            </a>
          </div>
        )}
      </div>
    </div>
  </header>
);

export { ConstructionHero };
