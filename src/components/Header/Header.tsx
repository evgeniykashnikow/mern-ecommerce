import { FC } from 'react';
import HeaderActions from 'components/HeaderActions';
import HeaderNav from 'components/HeaderNav';
import HeaderSearch from 'components/HeaderSearch';
import HeaderTopBar from 'components/HeaderTopBar';
import Logo from 'components/Logo';

const Header: FC = () => (
  <header>
    <HeaderTopBar />
    <div className="container">
      <div className="py-6 flex items-center justify-between gap-10">
        <Logo />
        <HeaderNav />
        <HeaderSearch />
        <HeaderActions />
      </div>
    </div>
  </header>
);

export default Header;
