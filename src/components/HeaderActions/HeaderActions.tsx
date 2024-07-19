import { FC } from 'react';
import Image from 'next/image';

const HeaderActions: FC = () => (
  <div className="flex items-center gap-4 w-fit">
    <Image
      className="cursor-pointer"
      src="/assets/icons/cart.svg"
      alt="cart"
      width={24}
      height={24}
    />
    <Image
      className="cursor-pointer"
      src="/assets/icons/profile.svg"
      alt="profile"
      width={24}
      height={24}
    />
  </div>
);

export default HeaderActions;
