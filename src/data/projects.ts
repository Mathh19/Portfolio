export type Project = {
  title: string;
  description: string;
  img: string;
  url: string;
  repository: string;
  techs: string[];
};

export const projects = [
  {
    title: 'Pomodoro',
    description:
      'Esse é um projeto focado em produtividade, ele ajuda pessoas a manter o foco em suas tarefas utilizando a técnica de pomodoro, sendo possível customizar de acordo com a preferência do usuário, também contém um gerenciador de tarefas.',
    img: '/imgs/pomodoro.png',
    url: 'https://pomodoromate.vercel.app',
    repository: 'https://github.com/Mathh19/focus-mate',
    techs: ['React', 'TypeScript', 'TailwindCSS']
  },
  {
    title: 'Trend Styles',
    description:
      'Um site para uma variedade única de roupas e calçados alternativos, desenvolvido com Next.js e Tailwind para uma experiência de compra moderna e dinâmica.',
    img: '/imgs/trend-styles.png',
    url: 'https://trend-styles.vercel.app',
    repository: 'https://github.com/Mathh19/trend-style',
    techs: ['Next.js', 'TypeScript', 'TailwindCSS']
  },
  {
    title: 'InfoFilms',
    description:
      'InfoFilms é um site com foco em fornecer informações sobre filmes, séries e até os atores, fornecendo busca específica e por categorias.',
    img: '/imgs/infoFilms.png',
    url: 'https://infofilms.netlify.app',
    repository: 'https://github.com/Mathh19/info-films',
    techs: ['React', 'TypeScript', 'CSS', 'Vite', 'MUI', 'API']
  },
  {
    title: 'Blog',
    description:
      'Este site é um blog sobre tecnologia, com foco em programação, nele compartilho meus conhecimentos que obtenho com meus estudos sobre programação.',
    img: '/imgs/blog.png',
    url: 'https://my-space-blog.vercel.app',
    repository: 'https://github.com/Mathh19/next-blog',
    techs: [
      'Next.js',
      'TypeScript',
      'Styled-Components',
      'Graphql',
      'Vitest',
      'Storybook',
      'Strapi'
    ]
  },
  {
    title: 'Show Fest',
    description:
      'Um site para listar eventos como shows de bandas, onde é informado valores e quem irá fazer os shows.',
    img: '/imgs/showfest.png',
    url: 'https://show-fest-bands.netlify.app',
    repository: 'https://github.com/Mathh19/LandingPage',
    techs: ['HTML', 'CSS']
  }
] as Project[];
