type ButtonProps = {
  children: React.ReactNode;
} & React.HtmlHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...rest }: ButtonProps) => {
  return (
    <button
      {...rest}
      className="flex justify-center items-center gap-2 px-3 py-1.5 border border-background-color bg-white-color text-background-color font-semibold rounded-md"
    >
      {children}
    </button>
  );
};
