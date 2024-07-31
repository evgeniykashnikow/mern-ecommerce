import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { getMenuBySlugApi } from 'api/controllers/menuController';
import Logo from 'components/Logo';
import { MENU_IDS } from 'constants/menuIds';
import HeaderActions from './HeaderActions';
import HeaderNav from './HeaderNav';
import HeaderTopBar from './HeaderTopBar';
import MobileMenu from './MobileMenu';

const Header: FC = async () => {
  const headerMenuQuery = await getMenuBySlugApi(MENU_IDS.PRIMARY);
  const headerMenu = headerMenuQuery.data.data.menuItems.nodes;

  return (
    <header>
      <HeaderTopBar />
      <div className="container">
        <div className="py-6 flex items-center justify-between gap-4 sm:gap-10 h-[88px]">
          <div className="flex gap-4 lg:gap-0 items-center">
            <MobileMenu menuItems={headerMenu} />
            <Logo />
          </div>
          <HeaderNav menuItems={headerMenu} />
          <Input
            type="text"
            placeholder="Search for products..."
            className="hidden lg:block pl-12"
            style={{
              backgroundImage: "url('/assets/icons/search-gray.svg')",
              backgroundPosition: 'left 1rem center',
              backgroundRepeat: 'no-repeat',
            }}
          />
          <HeaderActions />
        </div>
      </div>
    </header>
  );
};

export default Header;
