import { FC } from 'react';
import { getMenuBySlugApi } from 'api/controllers/menuController';
import Logo from 'components/Logo';
import { MENU_IDS } from 'constants/menuIds';
import HeaderActions from './HeaderActions';
import HeaderNav from './HeaderNav';
import HeaderSearch from './HeaderSearch';
import HeaderTopBar from './HeaderTopBar';
import MobileMenu from './MobileMenu';

const Header: FC = async () => {
  const headerMenuQuery = await getMenuBySlugApi(MENU_IDS.PRIMARY);
  const headerMenu = headerMenuQuery.data.data.menuItems.nodes;

  return (
    <header>
      <HeaderTopBar />
      <div className="container">
        <div className="py-6 flex items-center justify-between gap-10">
          <div className="flex gap-4 items-center">
            <MobileMenu menuItems={headerMenu} />
            <Logo />
          </div>
          <HeaderNav menuItems={headerMenu} />
          <HeaderSearch className="hidden lg:block" />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
