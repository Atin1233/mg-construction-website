import type { ReactNode } from 'react';

type ICTABannerProps = {
  title: string;
  subtitle: string;
  button: ReactNode;
};

const CTABanner = (props: ICTABannerProps) => (
  <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-primary-600 to-primary-700 p-8 text-center shadow-xl sm:p-12">
    <div className="mx-auto max-w-4xl">
      <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
        {props.title}
      </h2>
      <p className="mb-8 text-xl text-primary-100 sm:text-2xl">
        {props.subtitle}
      </p>
      <div className="flex justify-center">{props.button}</div>
    </div>
  </div>
);

export { CTABanner };
