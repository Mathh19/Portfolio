import Image from 'next/image';
import Link from 'next/link';

import { Button } from './Button';

type ProjectProps = {
  img: string;
  title: string;
  description: string;
  url: string;
  reposioty: string;
  techs: {
    name: string;
  }[];
};

export const Project = ({
  img,
  title,
  description,
  url,
  reposioty,
  techs
}: ProjectProps) => {
  return (
    <div className="max-w-[500px]">
      <div className="relative">
        <Image
          src={img}
          alt={`Imagem do projeto ${title}`}
          width={500}
          height={500}
          className="rounded-md outline outline-1 outline-gray-color"
        />
        <div
          className="group content-[''] absolute top-0 w-full
        max-w-[500px] h-full rounded-md flex flex-col justify-center items-center gap-2 duration-300 ease-in-out hover:bg-black/30 hover:backdrop-blur-sm"
        >
          <Link
            href={url}
            target="_blank"
            className="delay-150 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <Button>
              Site{' '}
              <Image
                src="icons/icon-link.svg"
                alt="ícone para representar o link"
                width={16}
                height={16}
              />
            </Button>
          </Link>
          <Link
            href={reposioty}
            target="_blank"
            className="delay-150 ease-in-out opacity-0 group-hover:opacity-100"
          >
            <Button>
              Repositório <span className="text-sm">{'</>'}</span>
            </Button>
          </Link>
        </div>
      </div>
      <h2 className="text-3xl my-2.5">{title}</h2>
      <p className="font-light">{description}</p>
      <ul className="flex flex-wrap gap-3 py-2">
        {techs.map((tech) => (
          <li
            key={tech.name}
            className="text-sm border border-gray-color rounded-sm py-[2px] px-2.5"
          >
            {tech.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
