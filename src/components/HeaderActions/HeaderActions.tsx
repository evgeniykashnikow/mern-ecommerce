'use client';

import { FC } from 'react';
import Image from 'next/image';
import HeaderSearch from 'components/HeaderSearch';
import { useDialog } from 'hooks/useDialog';

const HeaderActions: FC = () => {
  const { handleOpenDialog, isDialogOpen } = useDialog();

  return (
    <div className="flex items-center gap-4 w-fit">
      {isDialogOpen ? (
        <HeaderSearch />
      ) : (
        <Image
          className="block lg:hidden cursor-pointer"
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          onClick={handleOpenDialog}
        />
      )}

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
};

export default HeaderActions;
