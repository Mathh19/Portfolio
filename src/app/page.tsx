import { LiaFileDownloadSolid } from 'react-icons/lia';

import { ContainerProjects } from '@components/ContainerProjects';
import { ContainerSkills } from '@components/ContainerSkills';
import { CustomLink } from '@components/CustomLink';
import { Form } from '@components/From/Form';
import { Section } from '@components/Section';
import { SectionHeader } from '@components/SectionHeader';
import { TypewriterText } from '@components/TypewriterText';
import { projects } from '@data/projects';
import { skills } from '@data/skills';

export default function Home() {
  return (
    <div>
      <Section id="initial">
        <SectionHeader as="h1">Olá, sou o Matheus.</SectionHeader>
        <div className="flex flex-col gap-6 justify-center items-center">
          <TypewriterText text="Desenvolvedor Front-end." />

          <CustomLink href="/cv/matheus-freitas-cv.pdf" target="_blank">
            CV <LiaFileDownloadSolid size={20} />
          </CustomLink>
        </div>
      </Section>

      <Section id="about">
        <SectionHeader>Sobre mim</SectionHeader>
        <p className="text-xl font-light text-center max-w-3xl">
          Sou um desenvolvedor front-end dedicado a aprimorar constantemente
          meus conhecimentos. Minha paixão está em contribuir de forma
          significativa para o desenvolvimento de aplicações que possam impactar
          positivamente os usuários. Quero aplicar meus conhecimentos em
          tecnologias para criar experiências excepcionais.
        </p>
      </Section>

      <Section id="skills">
        <SectionHeader>Habilidades</SectionHeader>
        <ContainerSkills skills={skills} />
      </Section>

      <Section id="projects">
        <SectionHeader>Projetos</SectionHeader>
        <ContainerProjects projects={projects} />
      </Section>

      <Section id="contact">
        <SectionHeader>Contato</SectionHeader>
        <Form />
      </Section>
    </div>
  );
}
