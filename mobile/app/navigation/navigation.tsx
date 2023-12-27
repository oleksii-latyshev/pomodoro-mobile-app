import { useAuth } from '@/hooks/use-auth';
import { FC } from 'react';
import { Text, View } from 'react-native';

const Navigation: FC = ({}) => {
  const { user } = useAuth();

  return (
    <View>
      <Text>private-navigation</Text>
    </View>
  );
};

export default Navigation;
