import { cn } from '@utils/cn';

type SectionProps = React.ComponentPropsWithoutRef<'section'>;

export const Section = ({ className, children, ...props }: SectionProps) => (
  <section
    className={cn(
      'w-full flex flex-col justify-center py-8 items-center gap-6',
      className
    )}
    {...props}
  >
    {children}
  </section>
);
