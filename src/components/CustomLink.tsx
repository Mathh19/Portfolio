import { ComponentProps } from 'react';

type CustomLinkProps = {
  children: React.ReactNode;
} & ComponentProps<'a'>;

export const CustomLink = ({ children, ...rest }: CustomLinkProps) => {
  return (
    <a {...rest}>
      <div className="flex justify-center items-center gap-1.5 px-2.5 py-1.5 border border-background-color transition-all bg-white-color text-background-color font-semibold rounded hover:bg-black hover:text-white hover:border-white">
        {children}
      </div>
    </a>
  );
};
