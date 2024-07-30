'use client';

import { FC } from 'react';
import { DialogTitle } from '@radix-ui/react-dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@/components/ui/drawer';
import BurgerButton from 'components/BurgerButton';
import Logo from 'components/Logo';
import NavLink from 'components/NavLink';
import { useDialog } from 'hooks/useDialog';
import { MenuItemsProps } from './types';

const MobileMenu: FC<MenuItemsProps> = ({ menuItems }) => {
  const { handleOpenDialog, isDialogOpen, handleCloseDialog } = useDialog();

  return (
    <>
      <Drawer direction="left" onClose={handleCloseDialog}>
        <DrawerTrigger>
          <BurgerButton isOpen={isDialogOpen} onClick={handleOpenDialog} />
        </DrawerTrigger>
        <DrawerContent className="bottom-[unset] right-[unset] top-0 left-0 h-full mt-0 bg-white rounded-[unset] w-full sm:w-1/3">
          <DrawerHeader className="flex flex-col gap-4 text-left">
            <DrawerClose>
              <BurgerButton isOpen={isDialogOpen} onClick={handleOpenDialog} />
            </DrawerClose>
            <DialogTitle>
              <Logo />
            </DialogTitle>
            <DrawerDescription className="flex flex-col gap-4 mt-8">
              {menuItems?.map((item) => (
                <NavLink
                  key={item.path}
                  label={item.label}
                  href={item.path}
                  withSubmenu={!!item.childItems?.nodes.length}
                />
              ))}
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
