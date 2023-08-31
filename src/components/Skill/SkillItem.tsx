import Image from 'next/image';

type SkillItemProps = {
  text: string;
  img: string;
};

export const SkillItem = ({ text, img }: SkillItemProps) => {
  return (
    <li className="flex flex-col justify-center items-center text-lg text-center tracking-wide gap-2">
      <Image src={img} alt={`${text} icon`} width={80} height={80} />
      {text}
    </li>
  );
};
