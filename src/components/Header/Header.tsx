import { FC } from 'react';
import HeaderActions from 'components/HeaderActions';
import HeaderNav from 'components/HeaderNav';
import HeaderSearch from 'components/HeaderSearch';
import HeaderTopBar from 'components/HeaderTopBar';
import Logo from 'components/Logo';
import MobileMenu from 'components/MobileMenu';

const Header: FC = () => (
  <header>
    <HeaderTopBar />
    <div className="container">
      <div className="py-6 flex items-center justify-between gap-10">
        <div className="flex gap-4 items-center">
          <MobileMenu />
          <Logo />
        </div>
        <HeaderNav />
        <HeaderSearch className="hidden lg:block" />
        <HeaderActions />
      </div>
    </div>
  </header>
);

export default Header;
