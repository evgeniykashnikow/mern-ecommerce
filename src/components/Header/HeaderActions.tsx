'use client';

import { FC, useEffect, useRef } from 'react';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useDialog } from 'hooks/useDialog';

const HeaderActions: FC = () => {
  const { handleOpenDialog, isDialogOpen, handleCloseDialog } = useDialog();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !containerRef.current.contains(event.target as Node)
    ) {
      handleCloseDialog();
    }
  };

  const handleSearchClick = () => {
    handleOpenDialog();
    inputRef.current?.focus();
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  });

  return (
    <div className="flex items-center gap-2 sm:gap-4 w-fit">
      <div ref={containerRef}>
        <Input
          type="text"
          placeholder="Search for products..."
          className={cn('lg:hidden transition pl-12', {
            'opacity-0 invisible w-0 h-0 p-0': !isDialogOpen,
          })}
          ref={inputRef}
          style={{
            backgroundImage: "url('/assets/icons/search-gray.svg')",
            backgroundPosition: 'left 1rem center',
            backgroundRepeat: 'no-repeat',
          }}
        />
        <Image
          className={cn('block lg:hidden cursor-pointer transition', {
            'invisible opacity-0 h-0': isDialogOpen,
          })}
          src="/assets/icons/search.svg"
          alt="search"
          width={24}
          height={24}
          onClick={handleSearchClick}
        />
      </div>
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
