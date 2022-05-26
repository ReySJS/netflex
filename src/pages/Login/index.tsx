import { useState } from 'react';

import { useUser } from '../../providers/UserProvider';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

import * as S from './styles';

/**
 * Archive: src/pages/Login/index.tsx
 *
 * Description: Login page
 *
 * Date: 2021/04/11
 *
 * Author: Rey
 */

export const Login = () => {
  const { user, login, loading, logout } = useUser();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log({ email, password });

    login({ email, password });
  };

  return (
    <S.Container>
      {loading ? (
        <h1>Carregando...</h1>
      ) : (
        <S.Form>
          <S.FormTitle>Entrar</S.FormTitle>
          <Input
            placeholder="Digite seu email"
            mode="dark"
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="Digite sua senha"
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="button" onClick={handleSubmit}>
            Entrar
          </Button>
        </S.Form>
      )}
    </S.Container>
  );
};
