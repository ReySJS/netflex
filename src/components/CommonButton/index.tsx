import { MouseEventHandler } from 'react'

import * as S from './styles'

interface PropTypes {
  label: string
  onClick: MouseEventHandler<HTMLButtonElement>
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

export const CommonButton = ({ onClick, label }: PropTypes) => {
  return <S.Conteiner onClick={onClick}>{label}</S.Conteiner>
}
