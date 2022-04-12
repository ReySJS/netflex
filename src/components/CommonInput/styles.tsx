import styled from 'styled-components'

interface ConteinerTypes {
  mode?: string
}

export const Input = styled.input<ConteinerTypes>`
  height: 50px;
  width: 300px;
  padding-left: 30px;
  background-color: #f7f7f7;

  font-family: 'Inter', sans-serif;
  font-weight: 400;
  font-size: 25px;
  line-height: 30px;
  color: #353535;

  border-radius: 5px;

  ::placeholder {
    color: #353535;
  }

  ${({ mode }) =>
    mode === 'dark' &&
    `
    background-color: #333;
    color: #808080;
    
    ::placeholder {
    color: #808080;
    }
    `}
`
