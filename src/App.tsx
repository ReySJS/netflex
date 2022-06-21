import { BrowserRouter } from 'react-router-dom';

import { UserProvider } from './providers/UserProvider';
import { Router } from './routes/routes';

import GlobalStyle from './styles/GlobalStyles';

export const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Router />
      </BrowserRouter>
    </UserProvider>
  );
};
