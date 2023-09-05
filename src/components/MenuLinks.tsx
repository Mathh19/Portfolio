'use client';

import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';
import { IoCloseOutline } from 'react-icons/io5';

import { ItemList } from './ItemList';

const menuItems = [
  { id: 'initial', text: 'Inicio' },
  { id: 'about', text: 'Sobre' },
  { id: 'skills', text: 'Habilidades' },
  { id: 'projects', text: 'Projetos' },
  { id: 'contact', text: 'Contatos' }
];

export const MenuLinks = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <ul className="relative flex gap-5 text-lg max-md:hidden">
        {menuItems.map((menu) => (
          <ItemList key={menu.id} link={`#${menu.id}`}>
            {menu.text}
          </ItemList>
        ))}
      </ul>
      <button
        aria-label="botão abre o modal para navegar pelo os links"
        onClick={() => setOpen(!open)}
        className="relative z-50 hidden bg-background-color text-xl border border-white-color rounded-md p-1 max-md:block duration-200 ease-in-out hover:bg-white-color hover:text-background-color"
      >
        {!open ? <FiMenu /> : <IoCloseOutline />}
      </button>
      <div
        className={`hidden min-h-screen bg-background-color fixed max-md:flex justify-center z-40 inset-0 duration-500 ease-in-out ${
          !open ? 'translate-x-[768px]' : 'translate-x-0'
        }`}
      >
        <ul className="relative flex flex-col justify-center items-center gap-5 text-lg z-50">
          {menuItems.map((menu) => (
            <ItemList
              key={menu.id}
              link={`#${menu.id}`}
              onClick={() => setOpen(false)}
            >
              {menu.text}
            </ItemList>
          ))}
        </ul>
      </div>
    </div>
  );
};
