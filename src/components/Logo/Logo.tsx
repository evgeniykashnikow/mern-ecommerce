import { FC } from 'react';
import Link from 'next/link';
import { ROUTES } from 'config/routes';

const Logo: FC = () => (
  <Link href={ROUTES.HOME}>
    <p className="text-3xl font-bold text-black">SHOP.CO</p>
  </Link>
);

export default Logo;
