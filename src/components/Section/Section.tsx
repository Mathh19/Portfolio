import { Divisor } from './Divisor';

type SectionProps = {
  id: string;
  title: string;
  children: React.ReactNode;
};

export const Section = ({ id, title, children }: SectionProps) => {
  return (
    <section
      id={id}
      className="w-full flex flex-col justify-center py-8 items-center gap-6"
    >
      <h2 className="text-[42px] text-center">{title}</h2>
      <Divisor />
      {children}
    </section>
  );
};
