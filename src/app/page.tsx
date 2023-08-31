import Image from 'next/image';
import Link from 'next/link';

import { ContentLink } from '@components/ContentLink';
import { Project } from '@components/Project';
import { Section } from '@components/Section';
import { Skill } from '@components/Skill';
import projects from '@content/projects.json';
import skills from '@content/skills.json';

export default function Home() {
  return (
    <div>
      <Section title="Matheus Freitas">
        <div className="flex flex-col gap-6 justify-center items-center">
          <h2 className="text-2xl text-center">Desenvolvedor Front-end</h2>
          <Link
            href="/cv/atual-cv.pdf"
            download="matheus-cv.pdf"
            className="group"
          >
            <ContentLink>
              Baixar CV
              <Image
                src="/icons/icon-cv.svg"
                alt="svg icon"
                width={18}
                height={18}
                className="group-hover:animate-bounce"
              />
            </ContentLink>
          </Link>
        </div>
      </Section>
      <Section title="Sobre mim">
        <p className="text-xl font-light text-center max-w-3xl">
          Sou um desenvolvedor front-end dedicado a aprimorar constantemente
          meus conhecimentos. Minha paixão está em contribuir de forma
          significativa para o desenvolvimento de aplicações que possam impactar
          positivamente os usuários. Quero aplicar meus conhecimentos em
          tecnologias para criar experiências excepcionais.
        </p>
      </Section>
      <Section title="Habilidades">
        <Skill.Container>
          {skills.data.map((skill) => (
            <Skill.Item key={skill.name} text={skill.name} img={skill.icon} />
          ))}
        </Skill.Container>
      </Section>
      <Section title="Projetos">
        <div className="grid grid-cols-2 gap-6">
          {projects.data.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.link}
              reposioty={project.repository}
              img={project.img}
              techs={project.techs}
            />
          ))}
        </div>
      </Section>
    </div>
  );
}
