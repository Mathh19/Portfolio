import Image from 'next/image';

type SkillProps = {
  img: string;
  text: string;
};

export const Skill = ({ img, text }: SkillProps) => {
  return (
    <div className="flex justify-start items-center gap-2 bg-zinc-800 px-3 py-2 rounded">
      <Image
        src={img}
        alt={`${text} icon`}
        width={30}
        height={30}
        className="w-full max-w-[30px]"
      />
      <span>{text}</span>
    </div>
  );
};
