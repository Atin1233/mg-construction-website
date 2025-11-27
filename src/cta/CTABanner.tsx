import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-12 sm:py-14 md:py-16">
    <div className="absolute inset-0 bg-primary-500/10" />
    <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
      <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
        {props.title}
      </h2>
      <p className="mb-6 text-lg text-gray-300 sm:mb-8 sm:text-xl">
        {props.subtitle}
      </p>
      <div>{props.button}</div>
    </div>
  </div>
);

export { CTABanner };
