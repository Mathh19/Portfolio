type InputComponentProps = {
  name: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, ...rest }: InputComponentProps) => {
  return (
    <input
      id={name}
      {...rest}
      className="w-full flex-grow px-4 py-1.5 rounded-lg bg-transparent border-2 border-white font-light"
    />
  );
};
