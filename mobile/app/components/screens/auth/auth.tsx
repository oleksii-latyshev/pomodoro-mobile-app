import { FC, PropsWithChildren } from 'react';
import { View } from 'react-native';

const Auth: FC<PropsWithChildren<unknown>> = ({ children }) => {
  return <View>{children}</View>;
};

export default Auth;
