import { CommonInput } from '../../components/CommonInput'

import * as S from './styles'

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
  return (
    <S.Conteiner>
      <S.Form>
        <S.FormTitle>Entrar</S.FormTitle>
        <CommonInput placeholder="Digite seu email" mode="dark" type="email" />
        <CommonInput placeholder="Digite sua senha" type="password" />
      </S.Form>
    </S.Conteiner>
  )
}
