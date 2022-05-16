import { ReactElement } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import { useUser } from '../providers/UserProvider';

import { Login } from '../pages/Login';
import { Home } from '../pages/Home';

interface PrivateTypes {
  children: ReactElement;
}

const Private = ({ children }: PrivateTypes) => {
  const { user } = useUser();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
};

const Public = ({ children }: PrivateTypes) => {
  const { user } = useUser();

  if (user) {
    return <Navigate to="/home" />;
  }

  return children;
};

export const Router = () => (
  <Routes>
    <Route path="/" element={<Navigate to="/login" />} />
    <Route
      path="/login"
      element={
        <Public>
          <Login />
        </Public>
      }
    />
    <Route
      path="/home"
      element={
        <Private>
          <Home />
        </Private>
      }
    />
    <Route path="*" element={<h1>Error 404</h1>} />
  </Routes>
);
