import { LiaFileDownloadSolid } from 'react-icons/lia';

import { ContainerProjects } from '@components/ContainerProjects';
import { ContainerSkills } from '@components/ContainerSkills';
import { CustomLink } from '@components/CustomLink';
import { Form } from '@components/Form';
import { Section } from '@components/Section/Section';
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
        <ContainerSkills skills={skills} />
      </Section>
      <Section id="projects" title="Projetos">
        <ContainerProjects projects={projects} />
      </Section>
      <Section id="contact" title="Contato">
        <Form />
      </Section>
    </div>
  );
}
