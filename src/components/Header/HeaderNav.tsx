import { FC } from 'react';
import NavLink from 'components/NavLink';
import { MenuItemsProps } from './types';

const HeaderNav: FC<MenuItemsProps> = ({ menuItems }) => (
  <nav className="hidden lg:block">
    <ul className="flex items-center gap-6">
      {menuItems?.map((item) => (
        <li key={item.path}>
          <NavLink
            label={item.label}
            href={item.path}
            withSubmenu={!!item.childItems?.nodes.length}
          />
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderNav;
