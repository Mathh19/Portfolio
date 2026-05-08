import { cn } from '@utils/cn';

import { Divisor } from './Divisor';

type SectionHeaderProps = {
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  children: React.ReactNode;
};

export const SectionHeader = ({
  as: Heading = 'h2',
  className,
  children
}: SectionHeaderProps) => (
  <>
    <Heading className={cn('text-[42px] text-center', className)}>
      {children}
    </Heading>
    <Divisor />
  </>
);
