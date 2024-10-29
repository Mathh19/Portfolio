import { LiaFileDownloadSolid } from 'react-icons/lia';

import { CustomLink } from '@components/CustomLink';
import { Form } from '@components/Form';
import { ProjectCard } from '@components/ProjectCard';
import { Section } from '@components/Section';
import { Skill } from '@components/Skill';
import { projects } from '@data/projects';
import { skills } from '@data/skills';

export default function Home() {
  return (
    <div>
      <Section id="initial" title="Matheus Freitas">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="animate-typewriter animate-line text-2xl text-center max-[336px]:text-xl">
            Desenvolvedor Front-end.
          </h2>

          <CustomLink href="/cv/matheus-freitas-cv.pdf" target="_blank">
            CV <LiaFileDownloadSolid size={20} />
          </CustomLink>
        </div>
      </Section>
      <Section id="about" title="Sobre mim">
        <p id="About" className="text-xl font-light text-center max-w-3xl">
          Sou um desenvolvedor front-end dedicado a aprimorar constantemente
          meus conhecimentos. Minha paixão está em contribuir de forma
          significativa para o desenvolvimento de aplicações que possam impactar
          positivamente os usuários. Quero aplicar meus conhecimentos em
          tecnologias para criar experiências excepcionais.
        </p>
      </Section>
      <Section id="skills" title="Habilidades">
        <div className="flex flex-wrap justify-center gap-8">
          {skills.map((skill) => (
            <Skill key={skill.name} img={skill.icon} text={skill.name} />
          ))}
        </div>
      </Section>
      <Section id="projects" title="Projetos">
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              repository={project.repository}
              img={project.img}
              techs={project.techs}
            />
          ))}
        </div>
      </Section>
      <Section id="contact" title="Contato">
        <Form />
      </Section>
    </div>
  );
}
