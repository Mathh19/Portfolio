import Image from 'next/image';
import { IoIosLink, IoLogoGithub } from 'react-icons/io';

import { Project } from '@data/projects';

import { CustomLink } from './CustomLink';

export const ProjectCard = ({
  img,
  title,
  description,
  url,
  repository,
  techs
}: Project) => {
  return (
    <div className="w-full max-w-[700px] space-y-2.5">
      <div className="group relative bg-gradient-to-b rounded-md from-zinc-400 to-zinc-600 p-[1px]">
        <Image
          src={img}
          alt={`Imagem do projeto ${title}`}
          width={800}
          height={500}
          priority
          className="rounded-md"
        />
      </div>

      <h2 className="text-3xl font-medium">{title}</h2>
      <p className="font-light">{description}</p>

      <ul className="flex flex-wrap gap-3 py-2">
        {techs.map((tech) => (
          <li
            key={tech}
            className="text-sm border border-gray-color rounded-sm py-[2px] px-2.5"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex gap-2.5">
        <CustomLink href={url} target="_blank">
          Site <IoIosLink />
        </CustomLink>

        <CustomLink href={repository} target="_blank">
          GitHub <IoLogoGithub size={20} />
        </CustomLink>
      </div>
    </div>
  );
};
