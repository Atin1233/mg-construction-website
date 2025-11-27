import type { ReactNode } from 'react';

type IConstructionHeroProps = {
  title: ReactNode;
  description: string;
  phone?: string;
};

const ConstructionHero = (props: IConstructionHeroProps) => (
  <header className="relative h-[400px] overflow-hidden sm:h-[500px] md:h-[600px]">
    {/* Construction site background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/assets/images/construction-hero.jpg')",
      }}
    />
    {/* Dark overlay for text readability */}
    <div className="absolute inset-0 bg-gray-900/70" />
    {/* Subtle texture overlay with accent */}
    <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-gray-900/60 to-gray-900/80" />

    <div className="relative mx-auto flex h-full max-w-screen-xl items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <h1 className="xl:text-7xl mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl">
          {props.title}
        </h1>
        <p className="mb-6 text-base text-gray-200 sm:mb-8 sm:text-lg md:mb-10 md:text-xl lg:text-2xl">
          {props.description}
        </p>
        {props.phone && (
          <div>
            <a
              href={`tel:${props.phone.replace(/[^0-9]/g, '')}`}
              className="inline-block bg-primary-500 px-6 py-3 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary-600 hover:shadow-xl sm:px-8 sm:py-4 sm:text-lg"
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
