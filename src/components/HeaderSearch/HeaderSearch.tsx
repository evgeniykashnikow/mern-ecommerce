import { FC } from 'react';
import { Input } from '@/components/ui/input';

const HeaderSearch: FC = () => (
  <Input
    type="search"
    placeholder="Search for products..."
    className="bg-gray-100 border-0 rounded-2xl placeholder:text-gray-500 max-w-[600px]"
  />
);

export default HeaderSearch;
