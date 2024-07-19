'use client';

import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Props } from './types';

const NavLink: FC<Props> = ({ withSubmenu, label, href }) => {
  const pathname = usePathname();

  return (
    <Link
      className={cn('text-base hover:opacity-40 transition duration-300', {
        'flex items-center gap-1 w-full': withSubmenu,
        underline: pathname === href,
      })}
      href={href}
    >
      {label}
      {withSubmenu && (
        <Image
          src="/assets/icons/arrow-down.svg"
          alt="arrow down"
          width={16}
          height={16}
        />
      )}
    </Link>
  );
};

export default NavLink;
