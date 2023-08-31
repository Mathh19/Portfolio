type SkillContainerProps = {
  children: React.ReactNode;
};

export const SkillContainer = ({ children }: SkillContainerProps) => {
  return <ul className="flex flex-wrap justify-center gap-8">{children}</ul>;
};
