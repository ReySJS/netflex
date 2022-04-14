import { MouseEventHandler } from 'react'

import * as S from './styles'

interface PropTypes {
  children: string
  onClick?: MouseEventHandler<HTMLButtonElement>
  type: 'submit' | 'button' | 'reset' | undefined
}

/**
 * Archive: src/pages/Commonnput/index.tsx
 *
 * Description: Login page
 *
 * Date: 2021/04/11
 *
 * Author: Rey
 */

export const CommonButton = ({ onClick, children, type }: PropTypes) => {
  return (
    <S.Conteiner onClick={onClick} type={type}>
      {children}
    </S.Conteiner>
  )
}
