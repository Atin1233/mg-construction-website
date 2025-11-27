import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16">
    <div className="absolute inset-0 bg-primary-500/10" />
    <div className="relative mx-auto max-w-4xl px-4 text-center">
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
        {props.title}
      </h2>
      <p className="mb-8 text-xl text-gray-300">{props.subtitle}</p>
      <div>{props.button}</div>
    </div>
  </div>
);

export { CTABanner };
