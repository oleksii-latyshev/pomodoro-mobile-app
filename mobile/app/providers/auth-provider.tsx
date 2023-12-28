import * as Splash from 'expo-splash-screen';
import { IUser } from '@/types/user.interface';
import {
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useEffect,
  useState,
} from 'react';

export type IUserState = IUser | null;

interface IContext {
  user: IUserState;
  setUser: Dispatch<SetStateAction<IUserState>>;
}

export const AuthContext = createContext({} as IContext);

Splash.preventAutoHideAsync();

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [user, setUser] = useState<IUserState>(null);

  useEffect(() => {
    let isMounted = false;

    const getUserFromStorage = async () => {
      if (isMounted) {
      }

      await Splash.hideAsync();
    };

    getUserFromStorage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
