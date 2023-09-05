import { MenuLinks } from './MenuLinks';

export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between bg-background-color px-8 py-3.5 border-b border-gray-color">
      <p className="text-4xl font-semibold tracking-wide">{'<Math />'}</p>
      <nav>
        <MenuLinks />
      </nav>
    </header>
  );
};
