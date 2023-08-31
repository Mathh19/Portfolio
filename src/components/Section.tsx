type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export const Section = ({ title, children }: SectionProps) => {
  return (
    <section className="w-full flex flex-col justify-center items-center gap-6 py-8 px-4">
      <h2 className="text-4xl text-center">{title}</h2>
      <div className="w-full h-[2px] max-w-[240px] bg-gray-color"></div>
      {children}
    </section>
  );
};
