import Link from 'next/link';

import { BorderAnimation } from './BorderAnimation';

export type ItemListProps = {
  children: React.ReactNode;
  onClick?: () => void;
  link: string;
};

export const ItemList = ({ children, link, onClick }: ItemListProps) => {
  return (
    <>
      <li>
        <BorderAnimation>
          <Link href={link} onClick={onClick}>
            {children}
          </Link>
        </BorderAnimation>
      </li>
    </>
  );
};
