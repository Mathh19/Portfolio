import { projects } from '@data/projects';

const BASE_URL = 'https://matheus-freitas.vercel.app';

export const JsonLd = () => {
  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Matheus Freitas',
    url: BASE_URL,
    jobTitle: 'Desenvolvedor Front-End',
    email: 'mailto:eumathfreitas@gmail.com',
    knowsAbout: [
      'HTML',
      'CSS',
      'JavaScript',
      'TypeScript',
      'React',
      'Next.js',
      'TailwindCSS',
      'Git'
    ],
    sameAs: [
      'https://github.com/Mathh19',
      'https://www.linkedin.com/in/matheus-freitas-629557232/'
    ]
  };

  const softwareWorks = projects.map((project) => ({
    '@context': 'https://schema.org',
    '@type': 'SoftwareSourceCode',
    name: project.title,
    description: project.description,
    url: project.url,
    ...(project.repository ? { codeRepository: project.repository } : {}),
    programmingLanguage: project.techs,
    author: {
      '@type': 'Person',
      name: 'Matheus Freitas'
    }
  }));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(person) }}
      />
      {softwareWorks.map((work) => (
        <script
          key={work.name}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(work) }}
        />
      ))}
    </>
  );
};
