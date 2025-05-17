import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { ScrollToTop } from '@components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matheus Freitas',
  description:
    'Bem vindo ao meu portifolio, sou um desenvolvedor front-end e quero sempre contribuir de forma significativa para o desenvolvimento de aplicações que possam impactar positivamente os usuários'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen flex justify-center">
          <main className="w-full px-6 md:px-14 max-w-[1440px]">
            {children}
          </main>
        </div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  );
}
