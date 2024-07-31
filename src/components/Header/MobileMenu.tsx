'use client';

import { FC } from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
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
        <DrawerContent className="bottom-[unset] right-[unset] top-0 left-0 h-full mt-0 bg-white rounded-[unset] w-full sm:w-1/2">
          <DrawerHeader className="flex flex-col gap-4 text-left">
            <DrawerClose>
              <BurgerButton isOpen={isDialogOpen} onClick={handleOpenDialog} />
            </DrawerClose>
            <DrawerTitle>
              <Logo onClick={handleCloseDialog} />
            </DrawerTitle>
            <DrawerDescription />
          </DrawerHeader>
          <div className="flex flex-col gap-4 p-4">
            <Accordion type="single" collapsible className="w-full">
              {menuItems?.map((menuItem) =>
                menuItem.childItems?.nodes.length ? (
                  <AccordionItem value={menuItem.path} key={menuItem.path}>
                    <AccordionTrigger>
                      <Link onClick={handleCloseDialog} href={menuItem.path}>
                        {menuItem.label}
                      </Link>
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4">
                      {menuItem.childItems.nodes.map((childMenuItem) => (
                        <NavLink
                          label={childMenuItem.label}
                          href={childMenuItem.path}
                          key={childMenuItem.path}
                        />
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ) : (
                  !menuItem.parentDatabaseId && (
                    <AccordionItem value={menuItem.path} key={menuItem.path}>
                      <Link onClick={handleCloseDialog} href={menuItem.path}>
                        <AccordionTrigger hideArrow>
                          {menuItem.label}
                        </AccordionTrigger>
                      </Link>
                    </AccordionItem>
                  )
                ),
              )}
            </Accordion>
          </div>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileMenu;
