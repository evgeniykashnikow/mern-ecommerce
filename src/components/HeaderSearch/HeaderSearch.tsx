import { FC } from 'react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Props } from './types';

const HeaderSearch: FC<Props> = ({ className }) => (
  <Input
    type="search"
    placeholder="Search for products..."
    className={cn(
      'bg-gray-100 border-0 rounded-2xl placeholder:text-gray-500 max-w-[600px] flex-1',
      className,
    )}
  />
);

export default HeaderSearch;
