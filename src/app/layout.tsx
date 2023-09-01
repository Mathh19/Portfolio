import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';

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
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="min-h-screen flex justify-center">
          <main className="w-full max-w-[1440px]">{children}</main>
        </div>
        <Footer />
      </body>
    </html>
  );
}
