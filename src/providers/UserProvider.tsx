import {
  useState,
  useContext,
  createContext,
  ReactNode,
  useEffect,
} from 'react';

interface ContextTypes {
  user: UserTypes | null;
  loading: boolean;
  login: (value: { email: string; password: string }) => void;
  logout: () => void;
}

export const UserContext = createContext<ContextTypes>({
  user: null,
  loading: true,
  login: () => '',
  logout: () => '',
});

interface UserProviderTypes {
  children: ReactNode;
}

interface LoginTypes {
  email: string;
  password: string;
}

interface UserTypes {
  email: string;
  password: string;
}

export const UserProvider = ({ children }: UserProviderTypes) => {
  const [user, setUser] = useState<UserTypes | null>(null);
  const [loading, setLoading] = useState(true);

  const login = ({ email, password }: LoginTypes) => {
    setUser({ email, password });
    localStorage.setItem('user', JSON.stringify({ email, password }));
  };

  const logout = () => {
    setUser(null);
  };

  useEffect(() => {
    const getUser = localStorage.getItem('user');
    if (getUser && getUser !== null) {
      const loggedUser = JSON.parse(getUser);
      login(loggedUser);
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
