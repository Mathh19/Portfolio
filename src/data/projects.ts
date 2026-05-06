export type Project = {
  title: string;
  description: string;
  img?: string;
  url: string;
  repository?: string;
  techs: string[];
};

export const projects: Project[] = [
  {
    title: 'Findship',
    description:
      'Desenvolvi a interface do usuário com base nos designs fornecidos no Figma, garantindo fidelidade visual e responsividade. Fui responsável por integrar o frontend à API, implementando funcionalidades de autenticação, busca e filtragem de bolsas de estudo, programas de intercâmbio e oportunidades globais.',
    url: 'https://findship.ai',
    techs: ['Nextjs', 'TypeScript', 'TailwindCSS']
  },
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
    title: 'Sphera Academy',
    description:
      'Plataforma educacional completa (SPA) com acesso para alunos, área de mentores e painel administrativo. Arquitetura baseada em features com proteção de rotas via middlewares, gerenciamento de estado complexo, WebSockets para notificações em tempo real e formulários com React Hook Form + Zod.',
    url: 'https://www.spheraacademy.com/',
    techs: [
      'React',
      'TypeScript',
      'Vite',
      'TailwindCSS',
      'React Query',
      'Zustand',
      'Socket.IO'
    ]
  },
  {
    title: 'Reapho',
    description:
      'Plataforma full-stack interativa de leitura de mangás com recursos imersivos como reprodução de efeitos sonoros sincronizados por página. Foco em performance com pré-carregamento, lazy loading e caching, além de otimizações de SEO para indexação de conteúdo dinâmico.',
    url: 'https://reapho.app/lp',
    techs: ['Next.js', 'NestJS', 'TypeScript', 'Firebase']
  }
];
