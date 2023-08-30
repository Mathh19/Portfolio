export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between px-10 py-4 border-b border-gray-color">
      <p className="text-4xl font-semibold tracking-wide">{'<Math />'}</p>
      <nav>
        <ul className="flex gap-6 text-lg">
          <li>Inicio</li>
          <li>Sobre</li>
          <li>Habilidades</li>
          <li>Projetos</li>
          <li>Contatos</li>
        </ul>
      </nav>
    </header>
  );
};
