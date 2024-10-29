'use client';

import { useRef } from 'react';

import { TSkill } from '@data/skills';

import { Skill } from './Skill';

type ContainerSkillsProps = {
  skills: TSkill[];
};

export const ContainerSkills = ({ skills }: ContainerSkillsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="flex flex-wrap justify-center gap-8">
      {skills.map((skill) => (
        <Skill key={skill.name} img={skill.icon} text={skill.name} />
      ))}
    </div>
  );
};
