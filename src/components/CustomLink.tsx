import { ComponentProps } from 'react';

type CustomLinkProps = {
  children: React.ReactNode;
} & ComponentProps<'a'>;

export const CustomLink = ({ children, ...rest }: CustomLinkProps) => {
  return (
    <a {...rest}>
      <div className="flex items-center justify-center gap-1.5 rounded-md border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-white transition-all duration-200 hover:border-white/50 hover:bg-white/10">
        {children}
      </div>
    </a>
  );
};
