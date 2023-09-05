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
        visible ? 'visible' : 'invisible'
      } fixed right-4 bottom-4 p-2 border bg-background-color rounded-full text-2xl duration-200 ease-in-out hover:bg-white hover:text-background-color hover:border-background-color`}
    >
      <BsArrowUp />
    </a>
  );
};
