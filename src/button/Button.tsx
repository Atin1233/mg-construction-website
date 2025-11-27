type IButtonProps = {
  xl?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const className = props.xl ? 'px-10 py-4 text-lg' : 'px-8 py-3 text-base';

  return (
    <span
      className={`inline-block bg-primary-500 font-semibold text-white shadow-md transition-all hover:bg-primary-600 hover:shadow-lg ${className}`}
    >
      {props.children}
    </span>
  );
};

export { Button };
