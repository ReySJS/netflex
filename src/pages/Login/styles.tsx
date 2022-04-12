import styled from 'styled-components'

import BackgroundLogin from '../../assets/images/login-background.png'

export const Conteiner = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: url(${BackgroundLogin});
  background-size: cover;
`

export const Form = styled.div`
  width: 500px;
  height: 500px;
  max-width: 600px;
  max-height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.8);
`

export const FormTitle = styled.h2`
  color: #fff;
`
