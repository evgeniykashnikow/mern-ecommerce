import { FC } from 'react';
import { getMenuBySlugApi } from 'api/controllers/menuController';
import HeaderActions from 'components/HeaderActions';
import HeaderNav from 'components/HeaderNav';
import HeaderSearch from 'components/HeaderSearch';
import HeaderTopBar from 'components/HeaderTopBar';
import Logo from 'components/Logo';
import MobileMenu from 'components/MobileMenu';
import { MENU_IDS } from 'constants/menuIds';

const Header: FC = async () => {
  const headerMenuQuery = await getMenuBySlugApi(MENU_IDS.PRIMARY);
  const headerMenu = headerMenuQuery.data.data.menuItems.edges;

  return (
    <header>
      <HeaderTopBar />
      <div className="container">
        <div className="py-6 flex items-center justify-between gap-10">
          <div className="flex gap-4 items-center">
            <MobileMenu menuItems={headerMenu} />
            <Logo />
          </div>
          <HeaderNav />
          <HeaderSearch className="hidden lg:block" />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
