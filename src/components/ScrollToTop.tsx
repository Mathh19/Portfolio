'use client';

import { useState, useEffect } from 'react';
import { BsArrowUp } from 'react-icons/bs';

export const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <a
      aria-label="Navega para o topo da página"
      href="#"
      className={`${
        visible ? 'block' : 'hidden'
      } fixed right-4 bottom-4 w-11 h-11 group border bg-background-color rounded-full text-2xl animate-fadeIn duration-200 ease-in-out hover:text-background-color hover:border-background-color`}
    >
      <div className="relative overflow-hidden w-full h-full rounded-full flex justify-center items-center">
        <BsArrowUp className="z-[1] relative" />
        <div className="absolute w-full h-full inset-0 bg-white -left-8 top-8 rounded-full duration-200 ease-in-out group-hover:left-0 group-hover:top-0"></div>
      </div>
    </a>
  );
};
