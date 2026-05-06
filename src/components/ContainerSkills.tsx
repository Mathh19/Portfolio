import { TSkill } from '@data/skills';

import { Skill } from './Skill';

type ContainerSkillsProps = {
  skills: TSkill[];
};

export const ContainerSkills = ({ skills }: ContainerSkillsProps) => (
  <div className="skills-fade-edges w-full overflow-hidden">
    <div className="animate-skills-scroll flex w-max">
      <div className="flex shrink-0 gap-8 pr-8">
        {skills.map((skill) => (
          <Skill key={skill.name} img={skill.icon} text={skill.name} />
        ))}
      </div>
      <div className="flex shrink-0 gap-8 pr-8">
        {skills.map((skill) => (
          <Skill key={`dup-${skill.name}`} img={skill.icon} text={skill.name} />
        ))}
      </div>
    </div>
  </div>
);
