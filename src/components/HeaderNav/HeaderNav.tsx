import { FC } from 'react';
import NavLink from 'components/NavLink';
import { NAV_ITEMS } from './utils';

const HeaderNav: FC = () => (
  <nav>
    <ul className="flex items-center gap-6">
      {NAV_ITEMS.map((item) => (
        <li key={item.href}>
          <NavLink
            label={item.label}
            href={item.href}
            withSubmenu={item.withSubmenu}
          />
        </li>
      ))}
    </ul>
  </nav>
);

export default HeaderNav;
