import { FC } from 'react';
import Link from 'next/link';
import { ROUTES } from 'config/routes';
import { Props } from './types';

const Logo: FC<Props> = ({ onClick }) => (
  <Link href={ROUTES.HOME} onClick={onClick}>
    <p className="text-xl sm:text-3xl font-bold text-black">SHOP.CO</p>
  </Link>
);

export default Logo;
