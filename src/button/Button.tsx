type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const className = props.xl ? 'px-10 py-4 text-lg' : 'px-8 py-3 text-base';

  return (
    <span
      className={`inline-block bg-white font-semibold text-gray-900 transition-colors hover:bg-gray-100 ${className}`}
    >
      {props.children}
    </span>
  );
};

export { Button };
