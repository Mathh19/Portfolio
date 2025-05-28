import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import './globals.css';
import { Footer } from '@components/Footer';
import { Header } from '@components/Header';
import { ScrollToTop } from '@components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Matheus Freitas | Desenvolvedor Front-End',
  description:
    'Portfólio de Matheus Freitas, desenvolvedor front-end especializado em interfaces modernas e acessíveis. Confira projetos, habilidades e formas de contato.',
  authors: [{ name: 'Matheus Freitas' }],
  keywords: [
    'Desenvolvedor Front-End',
    'Portfólio',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Matheus Freitas',
    'UI',
    'Web Developer'
  ],
  verification: {
    google: 'V_HDiTP1C1aHySVkCM4'
  },
  metadataBase: new URL('https://matheus-freitas.vercel.app'),
  openGraph: {
    title: 'Matheus Freitas | Desenvolvedor Front-End',
    description:
      'Conheça o portfólio de Matheus Freitas, desenvolvedor front-end apaixonado por criar interfaces impactantes.',
    url: 'https://matheus-freitas.vercel.app',
    images: [
      {
        url: 'https://matheus-freitas.vercel.app/og-image.jpg',
        width: 1200,
        height: 630
      }
    ],
    siteName: 'Matheus Freitas',
    locale: 'pt_BR',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matheus Freitas | Desenvolvedor Front-End',
    description:
      'Conheça o portfólio de Matheus Freitas, desenvolvedor front-end apaixonado por criar interfaces impactantes.',
    images: ['https://matheus-freitas.vercel.app/og-image.jpg']
  }
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
