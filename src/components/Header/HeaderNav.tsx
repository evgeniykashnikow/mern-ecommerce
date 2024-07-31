import { FC } from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { MenuItemsProps } from './types';

const HeaderNav: FC<MenuItemsProps> = ({ menuItems }) => (
  <NavigationMenu className="hidden lg:block">
    <NavigationMenuList>
      {menuItems.map((menuItem) =>
        menuItem.childItems?.nodes.length ? (
          <NavigationMenuItem key={menuItem.path}>
            <Link href={menuItem.path}>
              <NavigationMenuTrigger>{menuItem.label}</NavigationMenuTrigger>
            </Link>
            {menuItem.childItems?.nodes.map((childMenuItem) => (
              <NavigationMenuContent key={childMenuItem.path}>
                <ul>
                  <li>
                    <Link href={childMenuItem.path} legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                      >
                        {childMenuItem.label}
                      </NavigationMenuLink>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            ))}
          </NavigationMenuItem>
        ) : (
          !menuItem.parentDatabaseId && (
            <NavigationMenuItem key={menuItem.path}>
              <Link href={menuItem.path} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {menuItem.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        ),
      )}
    </NavigationMenuList>
  </NavigationMenu>
);

export default HeaderNav;
