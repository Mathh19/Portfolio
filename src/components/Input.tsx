type InputComponentProps = {
  name: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ name, label, ...rest }: InputComponentProps) => {
  return (
    <div className="w-full flex flex-col text-3xl gap-2.5">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        {...rest}
        className="w-full px-4 py-1.5 rounded-lg bg-transparent border-2 border-white text-2xl font-light"
      />
    </div>
  );
};
