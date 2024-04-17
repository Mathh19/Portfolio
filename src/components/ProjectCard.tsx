import Image from 'next/image';
import Link from 'next/link';

import { Project } from '@data/projects';

import { ContentLink } from './ContentLink';

export const ProjectCard = ({
  img,
  title,
  description,
  url,
  repository,
  techs
}: Project) => {
  return (
    <div className="max-w-[500px]">
      <div className="relative cursor-pointer">
        <Image
          src={img}
          alt={`Imagem do projeto ${title}`}
          width={800}
          height={500}
          className="rounded-md object-cover outline outline-1 outline-gray-color"
        />
        <div
          className="group content-[''] absolute top-0 w-full
        max-w-[500px] h-full rounded-md flex flex-col justify-center items-center gap-2 duration-300 ease-in-out hover:bg-black/30 hover:backdrop-blur-sm focus-within:bg-black/30 focus-within:backdrop-blur-sm"
        >
          <Link
            href={url}
            target="_blank"
            className="delay-150 ease-in-out opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <ContentLink>
              Site{' '}
              <Image
                src="icons/icon-link.svg"
                alt="ícone para representar o link"
                width={16}
                height={16}
              />
            </ContentLink>
          </Link>
          <Link
            href={repository}
            target="_blank"
            className="delay-150 ease-in-out opacity-0 group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <ContentLink>
              Repositório <span className="text-sm">{'</>'}</span>
            </ContentLink>
          </Link>
        </div>
      </div>
      <h2 className="text-3xl my-2.5">{title}</h2>
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
    </div>
  );
};
