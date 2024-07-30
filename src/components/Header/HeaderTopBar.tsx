import { FC } from 'react';
import Link from 'next/link';
import { ROUTES } from 'config/routes';

const HeaderTopBar: FC = () => (
  <div className="bg-black py-2">
    <p className="text-xs sm:text-base text-center text-white">
      Sign up and get 20% off to your first order.{' '}
      <Link href={ROUTES.LOGIN} className="underline">
        Sign Up Now
      </Link>
    </p>
  </div>
);

export default HeaderTopBar;
