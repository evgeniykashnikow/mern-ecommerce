import { InputHTMLAttributes } from 'react';
import { MenuItem } from 'api/models/menuQuery';

export type MenuItemsProps = {
  menuItems: MenuItem[];
};

export type HeaderSearchProps = {
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;
