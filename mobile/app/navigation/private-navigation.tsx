import Auth from '@/components/screens/auth/auth';
import { useAuth } from '@/hooks/use-auth';
import { TypeRootStackParamList } from '@/navigation/navigation.types';
import { routes } from '@/navigation/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { FC } from 'react';

const Stack = createNativeStackNavigator<TypeRootStackParamList>();

const PrivateNavigation: FC = ({}) => {
  const { user } = useAuth();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: '#1e1c2e',
        },
      }}
    >
      {user ? (
        routes.map((route) => <Stack.Screen key={route.name} {...route} />)
      ) : (
        <Stack.Screen name='Auth' component={Auth} />
      )}
    </Stack.Navigator>
  );
};

export default PrivateNavigation;
