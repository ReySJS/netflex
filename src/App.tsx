import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/GlobalStyles';
import { Router } from './routes/routes';
import { UserProvider } from './providers/UserProvider';

export const App = () => {
  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  );
};
