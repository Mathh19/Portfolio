import { Project } from '@data/projects';

import { ProjectCard } from './ProjectCard';

type ContainerProjectsProps = {
  projects: Project[];
};

export const ContainerProjects = ({ projects }: ContainerProjectsProps) => {
  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 justify-items-center">
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
  );
};
