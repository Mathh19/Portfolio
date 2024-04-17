import Link from 'next/link';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { MdOutlineEmail } from 'react-icons/md';

export const Footer = () => {
  return (
    <footer className="w-full flex items-center justify-center gap-6 text-3xl px-10 py-4 border-t border-gray-color">
      <Link
        aria-label="link para o perfil do github"
        href="https://github.com/Mathh19"
        target="_blank"
        className="group"
      >
        <BsGithub className="transition-all duration-200 group-hover:-translate-y-2" />
      </Link>
      <Link
        aria-label="link para enviar um email"
        href="mailto:eumathfreitas@gmail.com"
        target="_blank"
        className="group"
      >
        <MdOutlineEmail className="transition-all duration-200 group-hover:-translate-y-2" />
      </Link>
      <Link
        aria-label="link para o linkedin"
        href="https://www.linkedin.com/in/matheus-freitas-629557232/"
        target="_blank"
        className="group"
      >
        <BsLinkedin className="transition-all duration-200 group-hover:-translate-y-2" />
      </Link>
    </footer>
  );
};
