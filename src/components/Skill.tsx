import Image from 'next/image';

type SkillProps = {
  img: string;
  text: string;
};

export const Skill = ({ img, text }: SkillProps) => {
  return (
    <div className="flex h-[140px] w-[140px] shrink-0 flex-col items-center justify-center gap-3 rounded-[6px] border border-white/10 transition-colors duration-300 hover:border-white">
      <Image
        src={img}
        alt={`${text} icon`}
        width={48}
        height={48}
        draggable={false}
        className="select-none"
      />
      <span className="text-center text-sm">{text}</span>
    </div>
  );
};
