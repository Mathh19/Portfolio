'use client';

import Image from 'next/image';
import { IoIosLink, IoLogoGithub } from 'react-icons/io';

import { Project } from '@data/projects';
import { motion } from 'framer-motion';

import { CustomLink } from './CustomLink';
import { GeometricFallback } from './GeometricFallback';

export const ProjectCard = ({
  img,
  title,
  description,
  url,
  repository,
  techs
}: Project) => {
  return (
    <motion.div
      className="w-full space-y-2.5"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative bg-gradient-to-b rounded-md from-white/20 to-white/5 p-[1px]">
        {img ? (
          <Image
            src={img}
            alt={`Imagem do projeto ${title}`}
            width={800}
            height={500}
            priority
            draggable={false}
            className="rounded-md aspect-[16/10] w-full object-cover"
          />
        ) : (
          <GeometricFallback />
        )}
      </div>

      <h2 className="text-3xl font-medium">{title}</h2>
      <p className="font-light">{description}</p>

      <ul className="flex flex-wrap gap-2 py-2">
        {techs.map((tech) => (
          <li
            key={tech}
            className="rounded-md border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-gray-color transition-colors duration-200 hover:border-white/30 hover:bg-white/10"
          >
            {tech}
          </li>
        ))}
      </ul>

      <div className="flex gap-2.5">
        <CustomLink href={url} target="_blank">
          Site <IoIosLink />
        </CustomLink>

        {repository && (
          <CustomLink href={repository} target="_blank">
            GitHub <IoLogoGithub size={20} />
          </CustomLink>
        )}
      </div>
    </motion.div>
  );
};
