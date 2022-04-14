import { useNavigate } from 'react-router-dom'
import { CommonButton } from '../../components/CommonButton'
import { CommonInput } from '../../components/CommonInput'

import { useUser } from '../../providers/UserProvider'

import * as S from './styles'

interface handleSubmitTypes {
  name: string
  password: string
  preventDefault: any
}

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
  const navigate = useNavigate()
  const { user } = useUser()

  const handleSubmit = ({
    preventDefault,
    name,
    password,
  }: handleSubmitTypes) => {
    preventDefault()

    console.log(name, password)
  }

  return (
    <S.Conteiner>
      <S.Form onSubmit={(e) => handleSubmit(e)}>
        <S.FormTitle>Entrar</S.FormTitle>
        <CommonInput
          placeholder="Digite seu email"
          mode="dark"
          type="email"
          name="email"
        />
        <CommonInput
          placeholder="Digite sua senha"
          type="password"
          name="password"
        />
        <CommonButton type="submit">Entrar</CommonButton>
      </S.Form>
    </S.Conteiner>
  )
}
