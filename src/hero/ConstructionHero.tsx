import type { ReactNode } from 'react';

type IConstructionHeroProps = {
  title: ReactNode;
  description: string;
  phone?: string;
};

const ConstructionHero = (props: IConstructionHeroProps) => (
  <header className="relative h-[600px] overflow-hidden">
    {/* Construction site background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/construction-hero.jpg')",
      }}
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-gray-900/70" />
    {/* Subtle texture overlay */}
    <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-900/80" />

    <div className="relative mx-auto flex h-full max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="md:text-7xl mb-6 text-5xl font-bold leading-tight text-white sm:text-6xl">
          {props.title}
        </h1>
        <p className="mb-10 text-xl text-gray-200 sm:text-2xl">
          {props.description}
        </p>
        {props.phone && (
          <div>
            <a
              href={`tel:${props.phone.replace(/[^0-9]/g, '')}`}
              className="inline-block bg-white px-8 py-4 text-lg font-semibold text-gray-900 transition-colors hover:bg-gray-100"
            >
              Call {props.phone}
            </a>
          </div>
        )}
      </div>
    </div>
  </header>
);

export { ConstructionHero };
