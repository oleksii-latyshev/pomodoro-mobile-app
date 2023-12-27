import Auth from '@/components/screens/auth/auth';
import Home from '@/components/screens/home/home';
import Profile from '@/components/screens/profile/profile';
import Settings from '@/components/screens/settings/settings';
import { IRoute } from '@/navigation/navigation.types';

export const routes: IRoute[] = [
  {
    name: 'Auth',
    component: Auth,
  },
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Settings',
    component: Settings,
  },
  {
    name: 'Profile',
    component: Profile,
  },
];
