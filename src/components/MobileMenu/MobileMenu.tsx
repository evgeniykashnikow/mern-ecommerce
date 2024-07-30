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
import { NAV_ITEMS } from 'components/HeaderNav/utils';
import Logo from 'components/Logo';
import NavLink from 'components/NavLink';
import { useDialog } from 'hooks/useDialog';

const MobileMenu: FC = () => {
  const { handleOpenDialog, isDialogOpen, handleCloseDialog } = useDialog();

  return (
    <>
      <Drawer direction="left" onClose={handleCloseDialog}>
        <DrawerTrigger>
          <BurgerButton isOpen={isDialogOpen} onClick={handleOpenDialog} />
        </DrawerTrigger>
        <DrawerContent className="bottom-[unset] right-[unset] top-0 left-0 h-full mt-0 bg-white rounded-[unset] w-1/3">
          <DrawerHeader className="flex flex-col gap-4">
            <DrawerClose>
              <BurgerButton isOpen={isDialogOpen} onClick={handleOpenDialog} />
            </DrawerClose>
            <DialogTitle>
              <Logo />
            </DialogTitle>
            <DrawerDescription className="flex flex-col gap-4 mt-8">
              {NAV_ITEMS.map((item) => (
                <NavLink
                  key={item.href}
                  label={item.label}
                  href={item.href}
                  withSubmenu={item.withSubmenu}
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
