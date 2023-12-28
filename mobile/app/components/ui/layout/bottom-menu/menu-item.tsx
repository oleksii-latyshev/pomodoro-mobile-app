import { Feather } from '@expo/vector-icons';
import { IMenuItem, TypeNav } from '@/components/ui/layout/bottom-menu/menu.interface';
import { FC } from 'react';
import { Pressable, Text, View } from 'react-native';
import { AppConstants } from '@/app.constants';

interface IMenuItemProps {
  item: IMenuItem;
  nav: TypeNav;
  currentRoute?: string;
}

const MenuItem: FC<IMenuItemProps> = ({ currentRoute, nav, item }) => {
  const isActive = currentRoute === item.path;

  return (
    <Pressable className='w-[24%] items-center' onPress={() => nav(item.path)}>
      <Feather
        name={item.iconName}
        size={26}
        color={isActive ? AppConstants.primary : '#8D8A97'}
      />
    </Pressable>
  );
};

export default MenuItem;
